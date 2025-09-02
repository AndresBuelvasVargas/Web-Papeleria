import axios from "axios";

const ProveedorApi = axios.create({
    baseURL: "http://localhost:8000/Proveedores/api/v1/Proveedores/"
});

export const obtenerTodosProveedores = () => ProveedorApi.get("/");

export const obtenerProveedor = (id) => ProveedorApi.get(`/${id}/`);

export const crearProveedor = (proveedorData) => ProveedorApi.post("/", proveedorData);

export const eliminarProveedor = (id) => ProveedorApi.delete(`/${id}`);

export const actualizarProveedor = (id, proveedorData) => ProveedorApi.put(`/${id}/`, proveedorData);