import { Link } from "react-router-dom";
import { Users, Truck, Package, ShoppingCart, BarChart, HomeIcon } from "lucide-react";

export function Navegacion() {
  const items = [
    {path: "/", label: "Inicio", icon: <HomeIcon className="w-10 h-10 text-gray-500" /> },
    { path: "/ventas", label: "Ventas", icon: <ShoppingCart className="w-10 h-10 text-orange-500" /> },
    { path: "/clientes", label: "Clientes", icon: <Users className="w-10 h-10 text-blue-500" /> },
    { path: "/proveedores", label: "Proveedores", icon: <Truck className="w-10 h-10 text-green-500" /> },
    { path: "/productos", label: "Productos", icon: <Package className="w-10 h-10 text-purple-500" /> },
    { path: "/inventario", label: "Entradas", icon: <BarChart className="w-10 h-10 text-red-500" /> },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 p-6">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="flex flex-col items-center p-5 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-400 transition cursor-pointer"
        >
          {item.icon}
          <span className="mt-3 font-semibold text-gray-700 text-lg">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
