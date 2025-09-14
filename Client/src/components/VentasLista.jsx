import { useEffect, useState } from "react";
import { obtenerTodasVentas } from "../api/Ventas.api";
import { VentaCard } from "./VentasCard";
import { Link } from "react-router-dom";

export function VentasLista() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    async function cargarVentas() {
      try {
        const res = await obtenerTodasVentas();
        setVentas(res.data);
      } catch (error) {
        console.error("Error cargando ventas:", error);
      }
    }
    cargarVentas();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Botón Crear */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl text-white">Lista de Ventas</h2>
        <Link
          to="/ventas-create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors"
        >
          Nueva Venta
        </Link>
      </div>

      {/* Grid de Ventas */}
      {ventas.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ventas.map((venta) => (
            <VentaCard key={venta.venta_id} venta={venta} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No hay ventas registradas todavía.
        </p>
      )}
    </div>
  );
}
