import axios from "axios";

const DetalleVentasApi = axios.create({
  baseURL: "http://127.0.0.1:8000/Ventas/api/v1/detalleventas/",
});

export const obtenerTodosDetalles = () => DetalleVentasApi.get("/");
export const obtenerDetalle = (id) => DetalleVentasApi.get(`/${id}/`);
export const crearDetalle = (detalleData) => DetalleVentasApi.post("/", detalleData);
export const eliminarDetalle = (id) => DetalleVentasApi.delete(`/${id}/`);
export const actualizarDetalle = (id, detalleData) =>
  DetalleVentasApi.put(`/${id}/`, detalleData);

export default DetalleVentasApi;
