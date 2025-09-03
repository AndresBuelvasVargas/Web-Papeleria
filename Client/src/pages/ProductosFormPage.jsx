import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { obtenerTodosProveedores } from "../api/Proveedores.api";
import {
  crearProducto,
  eliminarProducto,
  actualizarProducto,
  obtenerProducto,
} from "../api/Productos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function ProductosFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      console.log("Actualizar Producto");
      await actualizarProducto(params.id, data);
      toast.success("Producto actualizado exitosamente", {
        position: "top-center",
        background: "#146cf0ff",
        color: "#fff",
      });
    } else {
      console.log("Crear nuevo producto");
      await crearProducto(data);
      toast.success("Producto creado exitosamente", {
        position: "top-center",
        background: "#101010",
        color: "#fff",
      });
    }
    navigate("/productos");
  });

  useEffect(() => {
    async function cargarProducto() {
      if (params.id) {
        const { data } = await obtenerProducto(params.id);
        setValue("Nombre", data.Nombre);
        setValue("Descripcion", data.Descripcion);
        setValue("Precio_unitario", data.Precio_unitario);
        setValue("Stock", data.Stock);
        setValue("Proveedor", data.Proveedor);
      }
    }
    cargarProducto();
  }, []);

  const [proveedores, setProveedores] = useState([]);
  
    useEffect(() => {
      const fetchProveedores = async () => {
        const response = await obtenerTodosProveedores();
        setProveedores(response.data);
      };
  
      fetchProveedores();
    }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-800 p-3 rounded-lg block w-full mb-3"
          placeholder="Nombre"
          type="text"
          {...register("Nombre", { required: true })}
        />
        {errors.Nombre && <span>El nombre es requerido</span>}
        <input
          className="bg-zinc-800 p-3 rounded-lg block w-full mb-3"
          placeholder="Descripcion"
          type="textarea"
          {...register("Descripcion", { required: true })}
        />
        {errors.Descripcion && <span>La descripcion es requerida</span>}
        <input
          className="bg-zinc-800 p-3 rounded-lg block w-full mb-3"
          placeholder="Precio Unitario"
          type="tel"
          {...register("Precio_unitario", { required: true })}
        />
        {errors.Precio_unitario && <span>El precio unitario es requerido</span>}
        <input
          className="bg-zinc-800 p-3 rounded-lg block w-full mb-3"
          placeholder="Stock"
          type="number"
          {...register("Stock", { required: true })}
        />
        {errors.Stock && <span>El stock es requerido</span>}
        <select className="bg-zinc-800 p-3 rounded-lg block w-full mb-3" {...register("Proveedor", { required: true })}>
          <option value="0">Seleccione un proveedor</option>
          {proveedores.map((proveedor) => (
            <option key={proveedor.ProveedorID} value={proveedor.ProveedorID}>
              {proveedor.Nombre}
            </option>
          ))}
        </select>
        {errors.Proveedor && <span>El proveedor es requerido</span>}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4"
          type="submit"
        >
          Guardar
        </button>
      </form>
      {!params.id && (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-4"
          onClick={() => navigate("/proveedores")}
        >
          Volver
        </button>
      )}

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg w-50 mt-4"
            onClick={async () => {
              if (window.confirm("¿Estás seguro de eliminar este producto?")) {
                const res = await eliminarProducto(params.id);
                if (res.status === 204) {
                  toast.success("Producto eliminado exitosamente", {
                    position: "top-center",
                    background: "#f80462ff",
                    color: "#fff",
                  });
                  navigate("/productos");
                }
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
