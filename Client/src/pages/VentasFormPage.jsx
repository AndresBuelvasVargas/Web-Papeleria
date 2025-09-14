import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearVenta, obtenerVenta } from "../api/Ventas.api";
import { obtenerTodosClientes } from "../api/Clientes.api";
import {
  actualizarProducto,
  obtenerTodosProductos,
} from "../api/Productos.api";
import { crearMovimiento } from "../api/MovimientoVentas.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function VentasFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [productoId, setProductoId] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [venta, setVenta] = useState(null);

  // Cargar clientes, productos y venta
  useEffect(() => {
    async function cargarDatos() {
      const resClientes = await obtenerTodosClientes();
      const resProductos = await obtenerTodosProductos();
      setClientes(resClientes.data);
      setProductos(resProductos.data);

      // si hay params.id cargamos la venta
      if (params.id) {
        const { data } = await obtenerVenta(params.id);
        setVenta(data);

        // Cliente en el formulario
        setValue("cliente", data.cliente?.ClienteID || data.cliente);

        // Normalizamos detalles para que siempre tengan "producto" objeto
        const detallesNormalizados = (data.detalles || []).map((d) => {
          if (d.producto && typeof d.producto === "object") {
            return d;
          } else {
            const prod = resProductos.data.find((p) => p.id === d.producto);
            return { ...d, producto: prod };
          }
        });

        setDetalles(detallesNormalizados);
      }
    }
    cargarDatos();
  }, [params.id, setValue]);

  // Agregar producto al detalle
  const agregarDetalle = () => {
    if (!productoId || cantidad <= 0) return;

    const producto = productos.find((p) => p.id === parseInt(productoId));
    if (!producto) {
      toast.error("Producto no encontrado");
      return;
    }

    if (cantidad > producto.Stock) {
      toast.error(
        `No hay suficiente stock de ${producto.Nombre}. Stock disponible: ${producto.Stock}`
      );
      return;
    }

    // agregamos al detalle
    setDetalles([
      ...detalles,
      {
        producto,
        cantidad: Number(cantidad),
        precio_unitario: Number(producto.Precio_unitario),
      },
    ]);

    // reset inputs
    setProductoId("");
    setCantidad(1);
  };

  // Guardar venta
  const onSubmit = handleSubmit(async (data) => {
    const total = detalles.reduce(
      (acc, d) => acc + d.cantidad * d.precio_unitario,
      0
    );

    const payload = {
      cliente: data.cliente,
      total,
      detalles: detalles.map((d) => ({
        producto: d.producto.id,
        cantidad: d.cantidad,
        precio_unitario: d.precio_unitario,
      })),
    };

    await crearVenta(payload);

    // Crear movimientos y actualizar stock
    await Promise.all(
      detalles.map(async (d) => {
        await crearMovimiento({
          tipo_movimiento: "salida",
          cantidad: d.cantidad,
          producto: d.producto.id,
          proveedor: d.producto.Proveedor || null,
        });

        const productoActualizado = {
          ...d.producto,
          Stock: d.producto.Stock - d.cantidad,
        };
        await actualizarProducto(d.producto.id, productoActualizado);
      })
    );

    toast.success("Venta creada exitosamente");
    navigate("/ventas");
  });

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 text-gray-700">
      <h2 className="text-2xl font-bold text-center mb-4">
        {params.id ? "Detalle Venta" : "Nueva Venta"}
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Cliente */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Cliente
          </label>
          <select
            name="cliente"
            {...register("cliente", { required: true })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            disabled={!!params.id} // deshabilitar en modo detalle
          >
            <option value="">Seleccione un cliente</option>
            {clientes.map((c) => (
              <option key={c.ClienteID} value={c.ClienteID}>
                {c.Nombre}
              </option>
            ))}
          </select>
          {errors.cliente && (
            <span className="text-red-500 text-sm">Cliente requerido</span>
          )}
        </div>

        {/* Selección de productos (solo si es nueva venta) */}
        {!params.id && (
          <div className="flex gap-2 items-center">
            <select
              value={productoId}
              onChange={(e) => setProductoId(e.target.value)}
              className="flex-1 border rounded-lg p-2"
            >
              <option value="">Seleccione producto</option>
              {productos.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.Nombre} - ${p.Precio_unitario}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={cantidad}
              min="1"
              onChange={(e) => setCantidad(e.target.value)}
              className="w-20 border rounded-lg p-2"
            />

            <button
              type="button"
              onClick={agregarDetalle}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              +
            </button>
          </div>
        )}

        {/* Detalle de la venta */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="font-semibold mb-2">Detalle</h3>
          {detalles.length === 0 ? (
            <p className="text-gray-500 text-sm">Sin productos añadidos</p>
          ) : (
            <ul className="divide-y">
              {detalles.map((d, i) => (
                <li key={i} className="py-2 flex justify-between">
                  <span>
                    {d.producto?.Nombre} x {d.cantidad}
                    <p className="text-xs text-gray-500">
                      {d.producto?.Descripcion}
                    </p>
                  </span>
                  <span className="font-semibold">
                    ${Number(d.cantidad) * Number(d.precio_unitario)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botón Guardar (solo nueva venta) */}
        {!params.id && (
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
          >
            Guardar Venta
          </button>
        )}
      </form>

      {/* Fecha de venta (solo en modo detalle) */}
      {params.id && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Fecha de venta
            </label>
            <p className="p-2 bg-gray-100 rounded-lg">
              {venta?.fecha_venta
                ? new Date(venta.fecha_venta).toLocaleString()
                : "No disponible"}
            </p>
          </div>

          <button
            onClick={() => navigate("/ventas")}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
          >
            Volver a Ventas
          </button>
        </div>
      )}
    </div>
  );
}
