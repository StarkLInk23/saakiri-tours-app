// src/services/api.js
//
// Capa de servicios: centraliza toda la comunicación con MockAPI.
// Cualquier componente que necesite datos de "paquetes" pasa por aquí,
// nunca llama a axios directamente. Esto facilita el mantenimiento
// y el manejo centralizado de errores.

import axios from "axios";

const BASE_URL = "https://6a3f02f09b6d371e83809256.mockapi.io";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ── PAQUETES ──────────────────────────────────────────────────────────────

// GET /paquetes → lista todos los paquetes turísticos
export async function obtenerPaquetes() {
  const { data } = await api.get("/paquetes");
  return data;
}

// GET /paquetes/:id → obtiene un paquete específico
export async function obtenerPaquetePorId(id) {
  const { data } = await api.get(`/paquetes/${id}`);
  return data;
}

// POST /paquetes → crea un nuevo paquete
export async function crearPaquete(paquete) {
  const { data } = await api.post("/paquetes", paquete);
  return data;
}

// PUT /paquetes/:id → actualiza un paquete existente
export async function actualizarPaquete(id, paquete) {
  const { data } = await api.put(`/paquetes/${id}`, paquete);
  return data;
}

// DELETE /paquetes/:id → elimina un paquete
export async function eliminarPaquete(id) {
  const { data } = await api.delete(`/paquetes/${id}`);
  return data;
}

// ── RESERVAS ──────────────────────────────────────────────────────────────
// (Usa el mismo recurso "paquetes" no aplica; las reservas se guardan
//  en un recurso separado "reservas" — créalo en MockAPI con los campos:
//  nombreCliente, telefono, email, paqueteId, paqueteNombre, fechaTour,
//  numPersonas, mensaje, createdAt)

export async function crearReserva(reserva) {
  const { data } = await api.post("/reservas", reserva);
  return data;
}

export default api;
