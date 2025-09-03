import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  crearProveedor,
  eliminarProveedor,
  actualizarProveedor,
  obtenerProveedor,
} from "../api/Proveedores.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function ProveedoresFormPage() {
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
      console.log("Actualizar Proveedor");
      console.log(data);
      await actualizarProveedor(params.id, data);
      toast.success("Proveedor actualizado exitosamente", {
        position: "top-center",
        background: "#146cf0ff",
        color: "#fff",
      });
    } else {
      console.log("Crear nuevo proveedor");
      await crearProveedor(data);
      toast.success("Proveedor creado exitosamente", {
        position: "top-center",
        background: "#101010",
        color: "#fff",
      });
    }
    navigate("/proveedores");
  });

  useEffect(() => {
    async function cargarProveedor() {
      if (params.id) {
        const { data } = await obtenerProveedor(params.id);
        setValue("Nombre", data.Nombre);
        setValue("Contacto", data.Contacto);
        setValue("Telefono", data.Telefono);
        setValue("Email", data.Email);
      }
    }
    cargarProveedor();
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
          placeholder="Contacto"
          type="text"
          {...register("Contacto", { required: true })}
        />
        {errors.Contacto && <span>El contacto es requerido</span>}
        <input
          className="bg-zinc-800 p-3 rounded-lg block w-full mb-3"
          placeholder="Teléfono"
          type="tel"
          {...register("Telefono", { required: true })}
        />
        {errors.Telefono && <span>El teléfono es requerido</span>}
        <input
          className="bg-zinc-800 p-3 rounded-lg block w-full mb-3"
          placeholder="Email"
          type="email"
          {...register("Email", { required: true })}
        />
        {errors.Email && <span>El email es requerido</span>}

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
              if (window.confirm("¿Estás seguro de eliminar este proveedor?")) {
                const res = await eliminarProveedor(params.id);
                if (res.status === 204) {
                  toast.success("Proveedor eliminado exitosamente", {
                    position: "top-center",
                    background: "#f80462ff",
                    color: "#fff",
                  });
                  navigate("/proveedores");
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