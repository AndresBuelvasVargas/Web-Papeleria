import { useEffect, useState } from "react";
import { obtenerTodosClientes } from "../api/Clientes.api"
import { ClienteCard } from "./ClienteCard";
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
        <div className="grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientes.map(cliente => (
                <ClienteCard key={cliente.ClienteID} cliente={cliente} />
            ))}
        </div>
    );
}