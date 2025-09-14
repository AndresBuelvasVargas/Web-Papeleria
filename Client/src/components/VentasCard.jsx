import { useNavigate } from "react-router-dom";

export function VentaCard({ venta }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-md rounded-xl p-5 border border-gray-200 cursor-pointer hover:shadow-lg hover:border-blue-400 transition"
      onClick={() => navigate(`/ventas/${venta.venta_id}`)}
    >
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        Venta #{venta.venta_id}
      </h3>

      {/* Esto es un comentario dentro de JSX.
      <p className="text-sm text-gray-600">
        <span className="font-medium">Cliente:</span>{" "}
        {venta.cliente || "Desconocido"}
      </p>*/}

      <p className="text-sm text-gray-600">
        <span className="font-medium">Fecha:</span>{" "}
        {new Date(venta.fecha_venta).toLocaleDateString()}
      </p>

      <p className="text-sm text-gray-600">
        <span className="font-medium">Total:</span>{" "}
        <span className="text-green-600 font-semibold">${venta.total}</span>
      </p>

      <div className="flex justify-center mt-4">
        <img
          className="w-40 h-40 object-cover rounded-lg border"
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="Venta"
        />
      </div>
    </div>
  );
}
