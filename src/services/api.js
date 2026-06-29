import axios from "axios";

const BASE_URL = "https://6a3f02f09b6d371e83809256.mockapi.io";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function obtenerPaquetes() {
  const { data } = await api.get("/paquetes");
  return data;
}

export async function obtenerPaquetePorId(id) {
  const { data } = await api.get(`/paquetes/${id}`);
  return data;
}

export async function crearPaquete(paquete) {
  const { data } = await api.post("/paquetes", paquete);
  return data;
}

export async function actualizarPaquete(id, paquete) {
  const { data } = await api.put(`/paquetes/${id}`, paquete);
  return data;
}

export async function eliminarPaquete(id) {
  const { data } = await api.delete(`/paquetes/${id}`);
  return data;
}

export async function crearReserva(reserva) {
  const { data } = await api.post("/reservas", reserva);
  return data;
}

export default api;