import axios from "axios";

const ClienteApi = axios.create({
    baseURL: "http://localhost:8000/Clientes/api/v1/Clientes/"
});

export const obtenerTodosClientes = () => ClienteApi.get("/");

export const obtenerCliente = (id) => ClienteApi.get(`/${id}/`);

export const crearCliente = (clienteData) => ClienteApi.post("/", clienteData);

export const eliminarCliente = (id) => ClienteApi.delete(`/${id}`);

export const actualizarCliente = (id, clienteData) => ClienteApi.put(`/${id}/`, clienteData);