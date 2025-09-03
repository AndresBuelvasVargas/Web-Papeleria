import { Link } from "react-router-dom";

export function Navegacion() {
  return (
    <div className="flex justify-between items-center py-4 mb-4 border-b border-gray-700">
      <Link to="/clientes">
        <h1 className="font-bold text-3xl mb-4">Clientes</h1>
      </Link>
      <Link to="/proveedores">
        <h1 className="font-bold text-3xl mb-4">Proveedores</h1>
      </Link>
      <Link to="/productos">
        <h1 className="font-bold text-3xl mb-4">Productos</h1>
      </Link>
    </div>
  );
}
