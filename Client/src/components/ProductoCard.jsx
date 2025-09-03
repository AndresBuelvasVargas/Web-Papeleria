import { useNavigate } from "react-router-dom";

export function ProductosCard({ producto }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-4 rounded shadow cursor-pointer hover:bg-zinc-700 transition"
      onClick={() => {
        navigate(`/productos/${producto.id}`);
      }}
    >
      <h3 className="text-lg font-semibold">{producto.Nombre}</h3>
      <p className="text-sm text-gray-400">{producto.Descripcion}</p>
      <p className="text-sm text-green-400">Precio: ${producto.Precio_unitario}</p>
      <p className="text-sm text-gray-400">Stock: {producto.Stock}</p>
      <p className="text-sm text-gray-400">Proveedor: {producto.Proveedor}</p>
      <div className="flex justify-center">
        <img className="w-80 h-80 border-2" src="https://i.pinimg.com/736x/63/14/6e/63146e6c90288cb0df08c02c72974503.jpg" alt={producto.Nombre} />
      </div>
    </div>
  );
}
