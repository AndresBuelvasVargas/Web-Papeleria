import { useEffect, useState } from "react";
import { obtenerTodosClientes } from "../api/Clientes.api";
import { ClienteCard } from "./ClienteCard";
import { Link } from "react-router-dom";
export function ClientesLista() {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    async function cargarClientes() {
      const res = await obtenerTodosClientes();
      setClientes(res.data);
    }

    cargarClientes();
  }, []);

  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
        <Link to="/clientes-create">Crear nuevo Cliente</Link>
      </button>
      <h2 className="font-bold text-2xl mb-4">Lista de Clientes</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientes.map((cliente) => (
          <ClienteCard key={cliente.ClienteID} cliente={cliente} />
        ))}
      </div>
    </div>
  );
}
