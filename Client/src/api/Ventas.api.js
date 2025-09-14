import axios from "axios";

const VentasApi = axios.create({
  baseURL: "http://127.0.0.1:8000/Ventas/api/v1/ventas/",
});

// Obtener todas las ventas
export const obtenerTodasVentas = () => VentasApi.get("/");

// Obtener una venta por ID
export const obtenerVenta = (id) => VentasApi.get(`/${id}/`);

// Crear una nueva venta
export const crearVenta = (ventaData) => VentasApi.post("/", ventaData);

export default VentasApi;
