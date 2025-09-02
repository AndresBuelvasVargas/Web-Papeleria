import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  crearCliente,
  eliminarCliente,
  actualizarCliente,
  obtenerCliente,
} from "../api/Clientes.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function ClientesFormPage() {
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
      console.log("Actualizar cliente");
      console.log(data);
      await actualizarCliente(params.id, data);
      toast.success("Cliente actualizado exitosamente", {
        position: "top-right",
        background: "#146cf0ff",
        color: "#fff",
      });
    } else {
      console.log("Crear nuevo cliente");
      await crearCliente(data);
      toast.success("Cliente creado exitosamente", {
        position: "top-right",
        background: "#101010",
        color: "#fff",
      });
    }
    navigate("/clientes");
  });

  useEffect(() => {
    async function cargarCliente() {
      if (params.id) {
        const { data } = await obtenerCliente(params.id);
        setValue("Nombre", data.Nombre);
        setValue("Direccion", data.Direccion);
        setValue("Telefono", data.Telefono);
        setValue("Email", data.Email);
      }
    }
    cargarCliente();
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
          placeholder="Dirección"
          type="text"
          {...register("Direccion", { required: true })}
        />
        {errors.Direccion && <span>La dirección es requerida</span>}
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

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4" type="submit">Guardar</button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg w-50 mt-4"
            onClick={async () => {
              if (window.confirm("¿Estás seguro de eliminar este cliente?")) {
                const res = await eliminarCliente(params.id);
                if (res.status === 204) {
                  toast.success("Cliente eliminado exitosamente", {
                    position: "top-right",
                    background: "#f80462ff",
                    color: "#fff",
                  });
                  navigate("/clientes");
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
