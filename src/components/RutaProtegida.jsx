// src/components/RutaProtegida.jsx
//
// Envuelve las rutas que requieren sesión de administrador.
// Si no hay sesión activa, redirige a /admin/login y recuerda
// la ruta de destino original para volver allí tras el login.

import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RutaProtegida() {
  const { autenticado } = useAuth();
  const location = useLocation();

  if (!autenticado) {
    return (
      <Navigate to="/admin/login" state={{ from: location.pathname }} replace />
    );
  }

  return <Outlet />;
}
