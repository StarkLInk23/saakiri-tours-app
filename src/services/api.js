// src/services/api.js
//
// Capa de servicios: centraliza toda la comunicación con el backend propio.
// Ya no usamos MockAPI — ahora apunta a nuestra API REST con
// Node + Express + PostgreSQL + Prisma corriendo en el servidor.

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor: agrega el token JWT automáticamente en cada petición
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── PAQUETES ──────────────────────────────────────────────────────────────

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

// ── RESERVAS ──────────────────────────────────────────────────────────────

export async function crearReserva(reserva) {
  const { data } = await api.post("/reservas", reserva);
  return data;
}

// ── AUTH ──────────────────────────────────────────────────────────────────

export async function loginAdmin(usuario, password) {
  const { data } = await api.post("/auth/login", { usuario, password });
  return data; // { token, nombre }
}

export default api;