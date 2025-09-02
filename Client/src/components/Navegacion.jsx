import { Link } from "react-router-dom";

export function Navegacion() {
  return (
    <div className="flex justify-between items-center py-4 mb-4 border-b border-gray-700">
      <Link to="/clientes">
        <h1 className="font-bold text-3xl mb-4">Clientes</h1>
      </Link>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        <Link to="/clientes-create">Crear Cliente</Link>
      </button>
    </div>
  );
}
