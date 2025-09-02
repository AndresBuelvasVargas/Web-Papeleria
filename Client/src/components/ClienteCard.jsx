import { useNavigate } from "react-router-dom";

export function ClienteCard({ cliente }) {
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-800 p-4 rounded shadow cursor-pointer hover:bg-zinc-700 transition"
        onClick={() => {
            navigate(`/clientes/${cliente.ClienteID}`);
        }}>
            <h3 className="text-lg font-semibold">{cliente.Nombre}</h3>
            <p className="text-sm text-gray-400">{cliente.Direccion}</p>
            <p className="text-sm text-gray-400">{cliente.Telefono}</p>
            <p className="text-sm text-gray-400">{cliente.Email}</p>
        </div>
    );
}