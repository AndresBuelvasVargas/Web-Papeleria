import axios from "axios";

const MovimientosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/Ventas/api/v1/movimientos/",
});

export const obtenerTodosMovimientos = () => MovimientosApi.get("/");
export const obtenerMovimiento = (id) => MovimientosApi.get(`/${id}/`);
export const crearMovimiento = (movimientoData) => MovimientosApi.post("/", movimientoData);
export const eliminarMovimiento = (id) => MovimientosApi.delete(`/${id}/`);
export const actualizarMovimiento = (id, movimientoData) =>
  MovimientosApi.put(`/${id}/`, movimientoData);

export default MovimientosApi;
