import axios from 'axios';

const ProductosApi = axios.create({
    baseURL: "http://localhost:8000/Productos/api/v1/Productos/"
});

export const obtenerTodosProductos = () => ProductosApi.get("/");

export const obtenerProducto = (id) => ProductosApi.get(`/${id}/`);

export const crearProducto = (productoData) => ProductosApi.post("/", productoData);

export const eliminarProducto = (id) => ProductosApi.delete(`/${id}`);

export const actualizarProducto = (id, productoData) => ProductosApi.put(`/${id}/`, productoData);