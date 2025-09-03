import { useEffect, useState } from "react";
import { obtenerTodosProveedores } from "../api/Proveedores.api";
import { ProveedoresCard } from "./ProveedoresCard";
import { Link, useParams } from "react-router-dom";
export function ProveedoresLista() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchProveedores = async () => {
      const response = await obtenerTodosProveedores();
      setProveedores(response.data);
    };

    fetchProveedores();
  }, []);
  const params = useParams();
  return (
    <div>
      {!params.id && (
        <>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
            <Link to="/proveedores-create">Crear nuevo Proveedor</Link>
          </button>
          <h2 className="font-bold text-2xl mb-4">Lista de Proveedores</h2>
        </>
      )}

      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {proveedores.map((proveedor) => (
          <ProveedoresCard key={proveedor.ProveedorID} proveedor={proveedor} />
        ))}
      </div>
    </div>
  );
}
