// Define todas las rutas de la aplicación con React Router DOM.
// Separa rutas públicas (LayoutPublico) de rutas administrativas
// (LayoutAdmin), estas últimas protegidas por RutaProtegida:
// solo accesibles tras iniciar sesión en /admin/login.

import { Routes, Route } from "react-router-dom";
import { PaquetesProvider } from "./context/PaquetesContext";
import { AuthProvider } from "./context/AuthContext";
import RutaProtegida from "./components/RutaProtegida";

import LayoutPublico from "./layouts/LayoutPublico";
import LayoutAdmin from "./layouts/LayoutAdmin";

import Catalogo from "./pages/Catalogo";
import DetallePaquete from "./pages/DetallePaquete";
import Reservar from "./pages/Reservar";
import AdminLogin from "./pages/AdminLogin";
import AdminPaquetes from "./pages/AdminPaquetes";
import FormPaquete from "./pages/FormPaquete";
import NoEncontrado from "./pages/NoEncontrado";

export default function App() {
  return (
    <AuthProvider>
      <PaquetesProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route element={<LayoutPublico />}>
            <Route path="/" element={<Catalogo />} />
            <Route path="/paquete/:id" element={<DetallePaquete />} />
            <Route path="/reservar/:id" element={<Reservar />} />
          </Route>

          {/* Login del administrador (pública, sin layout admin) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Rutas administrativas protegidas */}
          <Route element={<RutaProtegida />}>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route index element={<AdminPaquetes />} />
              <Route path="nuevo" element={<FormPaquete />} />
              <Route path="editar/:id" element={<FormPaquete />} />
            </Route>
          </Route>

          {/* 404 */}
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </PaquetesProvider>
    </AuthProvider>
  );
}