import { useEffect, useState } from "react";
import { obtenerTodosProductos } from "../api/Productos.api";
import { ProductosCard } from "./ProductoCard";
import { Link } from "react-router-dom";

export function ProductosLista() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await obtenerTodosProductos();
      setProductos(response.data);
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
        <Link to="/productos-create">Crear nuevo Producto</Link>
      </button>
      <h2 className="font-bold text-2xl mb-4">Lista de Productos</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <ProductosCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
