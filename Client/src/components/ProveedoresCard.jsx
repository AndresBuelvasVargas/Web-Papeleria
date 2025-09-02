import { useNavigate } from "react-router-dom";

export function ProveedoresCard({ proveedor }) {
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-800 p-4 rounded shadow cursor-pointer hover:bg-zinc-700 transition"
        onClick={() => {
            navigate(`/proveedores/${proveedor.ProveedorID}`);
        }}>
            <h3 className="text-lg font-semibold">{proveedor.Nombre}</h3>
            <p className="text-sm text-gray-400">{proveedor.Contacto}</p>
            <p className="text-sm text-gray-400">{proveedor.Telefono}</p>
            <p className="text-sm text-gray-400">{proveedor.Email}</p>
        </div>
    );
}