import { useEffect, useState } from "react";
import { obtenerTodosMovimientos } from "../api/MovimientoVentas.api";
import { useNavigate } from "react-router-dom";

export function ListaMovimientos() {
  const [movimientos, setMovimientos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function cargarMovimientos() {
      try {
        const res = await obtenerTodosMovimientos();

        // Ordenar por fecha descendente
        const ordenados = res.data.sort(
          (a, b) => new Date(b.fecha_movimiento) - new Date(a.fecha_movimiento)
        );

        setMovimientos(ordenados);
      } catch (error) {
        console.error("Error al cargar movimientos", error);
      }
    }
    cargarMovimientos();
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="fixed right-6 bottom-8 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg"
      >
        ← Volver
      </button>
      <div className="max-w-3xl mx-auto mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Historial de Movimientos
        </h2>
        <div className="space-y-3">
          {movimientos.length === 0 ? (
            <p className="text-center text-gray-500">
              No hay movimientos registrados
            </p>
          ) : (
            movimientos.map((mov) => (
              <div
                key={mov.movimiento_id}
                className={`flex justify-between items-center p-4 rounded-lg shadow-md border 
                  ${
                    mov.tipo_movimiento === "entrada"
                      ? "bg-green-50 border-green-300"
                      : "bg-red-50 border-red-300"
                  }`}
              >
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Producto:</span>{" "}
                    {mov.producto_nombre || "Desconocido"}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Cantidad:</span>{" "}
                    <span
                      className={`font-bold ${
                        mov.tipo_movimiento === "entrada"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {mov.cantidad}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Proveedor:</span>{" "}
                    {mov.proveedor_nombre || "N/A"}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-semibold ${
                      mov.tipo_movimiento === "entrada"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {mov.tipo_movimiento.toUpperCase()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(mov.fecha_movimiento).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
