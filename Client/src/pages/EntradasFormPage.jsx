import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  obtenerTodosProductos,
  actualizarProducto,
} from "../api/Productos.api";
import { obtenerTodosProveedores } from "../api/Proveedores.api";
import { crearMovimiento } from "../api/MovimientoVentas.api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function EntradasFormPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [productos, setProductos] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const navigate = useNavigate();

  // Cargar productos y proveedores
  useEffect(() => {
    async function cargarDatos() {
      const resProductos = await obtenerTodosProductos();
      setProductos(resProductos.data);

      const resProveedores = await obtenerTodosProveedores();
      setProveedores(resProveedores.data);
    }
    cargarDatos();
  }, []);

  // Guardar entrada
  const onSubmit = handleSubmit(async (data) => {
    try {
      const producto = productos.find((p) => p.id === parseInt(data.producto));
      if (!producto) {
        toast.error("Producto no encontrado");
        return;
      }

      // Crear movimiento de entrada
      await crearMovimiento({
        tipo_movimiento: "entrada",
        cantidad: parseInt(data.cantidad),
        producto: producto.id,
        proveedor: data.proveedor || null,
      });

      // Actualizar stock sumando
      const productoActualizado = {
        ...producto,
        Stock: producto.Stock + parseInt(data.cantidad),
      };
      await actualizarProducto(producto.id, productoActualizado);

      toast.success("Entrada registrada correctamente");

      reset(); // limpiar formulario
      navigate("/inventario"); // redirigir al inventario
    } catch (error) {
      console.error(error);
      toast.error("Error al registrar la entrada");
    }
  });

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 text-gray-700">
      <h2 className="text-2xl font-bold text-center mb-4">Registrar Entrada</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Selección de producto */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Producto
          </label>
          <select
            {...register("producto", { required: true })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Seleccione un producto</option>
            {productos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.Nombre} (Stock: {p.Stock})
              </option>
            ))}
          </select>
          {errors.producto && (
            <span className="text-red-500 text-sm">Seleccione un producto</span>
          )}
        </div>

        {/* Cantidad */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Cantidad
          </label>
          <input
            type="number"
            min="1"
            {...register("cantidad", { required: true, min: 1 })}
            className="w-full border rounded-lg p-2"
          />
          {errors.cantidad && (
            <span className="text-red-500 text-sm">
              Ingrese una cantidad válida
            </span>
          )}
        </div>

        {/* Selección de proveedor */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Proveedor
          </label>
          <select
            {...register("proveedor")}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Sin proveedor</option>
            {proveedores.map((pr) => (
              <option key={pr.ProveedorID} value={pr.ProveedorID}>
                {pr.Nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Botón guardar */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
        >
          Guardar Entrada
        </button>
        <button
          onClick={() => navigate("/movimientos-lista")}
          className="fixed right-6 bottom-8 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg"
          aria-label="Registrar Entrada"
        >
          + Revisar historial de movimientos
        </button>
      </form>
    </div>
  );
}
