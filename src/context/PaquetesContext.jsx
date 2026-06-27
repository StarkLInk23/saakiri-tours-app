// src/context/PaquetesContext.jsx
//
// Context API: estado global de paquetes turísticos.
// Evita pasar props manualmente entre Catálogo, Admin y Detalle.
// Centraliza también las funciones CRUD para que cualquier componente
// pueda llamarlas y el estado se actualice automáticamente en toda la app.

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import {
  obtenerPaquetes,
  crearPaquete,
  actualizarPaquete,
  eliminarPaquete,
} from "../services/api";

const PaquetesContext = createContext(null);

export function PaquetesProvider({ children }) {
  const [paquetes, setPaquetes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const cargarPaquetes = useCallback(async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await obtenerPaquetes();
      setPaquetes(data);
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los paquetes. Verifica tu conexión.");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarPaquetes();
  }, [cargarPaquetes]);

  async function agregarPaquete(nuevoPaquete) {
    try {
      const creado = await crearPaquete(nuevoPaquete);
      setPaquetes((prev) => [...prev, creado]);
      Swal.fire({
        icon: "success",
        title: "Paquete creado",
        text: `"${creado.nombre}" se agregó correctamente.`,
        confirmButtonColor: "#2d5016",
      });
      return creado;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear el paquete.",
        confirmButtonColor: "#2d5016",
      });
      throw err;
    }
  }

  async function editarPaquete(id, datosActualizados) {
    try {
      const actualizado = await actualizarPaquete(id, datosActualizados);
      setPaquetes((prev) =>
        prev.map((p) => (p.id === id ? actualizado : p))
      );
      Swal.fire({
        icon: "success",
        title: "Paquete actualizado",
        text: `"${actualizado.nombre}" se actualizó correctamente.`,
        confirmButtonColor: "#2d5016",
      });
      return actualizado;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el paquete.",
        confirmButtonColor: "#2d5016",
      });
      throw err;
    }
  }

  async function borrarPaquete(id, nombre) {
    const confirmacion = await Swal.fire({
      icon: "warning",
      title: "¿Eliminar paquete?",
      text: `Se eliminará "${nombre}" permanentemente.`,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#c9302c",
      cancelButtonColor: "#888",
    });

    if (!confirmacion.isConfirmed) return false;

    try {
      await eliminarPaquete(id);
      setPaquetes((prev) => prev.filter((p) => p.id !== id));
      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "El paquete se eliminó correctamente.",
        confirmButtonColor: "#2d5016",
      });
      return true;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el paquete.",
        confirmButtonColor: "#2d5016",
      });
      return false;
    }
  }

  const value = {
    paquetes,
    cargando,
    error,
    recargar: cargarPaquetes,
    agregarPaquete,
    editarPaquete,
    borrarPaquete,
  };

  return (
    <PaquetesContext.Provider value={value}>
      {children}
    </PaquetesContext.Provider>
  );
}

// Hook personalizado para consumir el contexto fácilmente
export function usePaquetes() {
  const context = useContext(PaquetesContext);
  if (!context) {
    throw new Error("usePaquetes debe usarse dentro de un PaquetesProvider");
  }
  return context;
}
