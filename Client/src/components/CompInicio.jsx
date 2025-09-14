import { useNavigate } from "react-router-dom";
import { ShoppingCart, Truck, Users, Package, BarChart, Settings } from "lucide-react";

export function MenuPrincipal() {
  const navigate = useNavigate();

  const opciones = [
    { titulo: "Realizar una venta", desc: "Lleva el control de ventas al contado o apartadas", icon: <ShoppingCart size={40} className="text-orange-500" />, ruta: "/ventas" },
    { titulo: "Mis clientes", desc: "Registra clientes y consulta detalles", icon: <Users size={40} className="w-10 h-10 text-blue-500" />, ruta: "/clientes" },
    { titulo: "Nuestros Proveedores", desc: "Listado de proveedores y sus productos", icon: <Truck className="w-10 h-10 text-green-500" />, ruta: "/proveedores" },
    { titulo: "Productos", desc: "Tus productos y consulta sus detalles", icon: <Package size={40} className="text-purple-500" />, ruta: "/productos" },
    { titulo: "Proveedores", desc: "Consulta reportes de ventas e inventario", icon: <BarChart size={40} className="text-red-500" />, ruta: "/inventario" },
    { titulo: "Ajustes", desc: "Configura la aplicación, usuarios y permisos", icon: <Settings size={40} className="text-gray-600" />, ruta: "/En_trabajo" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Bienvenido. Elija una opción</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {opciones.map((op, index) => (
          <div
            key={index}
            onClick={() => navigate(op.ruta)}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer flex flex-col items-center text-center transition"
          >
            {op.icon}
            <h2 className="text-lg font-semibold mt-3">{op.titulo}</h2>
            <p className="text-gray-500 text-sm">{op.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}