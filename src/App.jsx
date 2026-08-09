import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { PaquetesProvider } from "./context/PaquetesContext";
import { AuthProvider } from "./context/AuthContext";
import RutaProtegida from "./components/RutaProtegida";

import LayoutPublico from "./layouts/LayoutPublico";
import LayoutAdmin from "./layouts/LayoutAdmin";

import Home from "./pages/Home";
import Paquetes from "./pages/Paquetes";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
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
        <ScrollToTop />
        <Routes>
          <Route element={<LayoutPublico />}>
            <Route path="/" element={<Home />} />
            <Route path="/paquetes" element={<Paquetes />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/paquete/:id" element={<DetallePaquete />} />
            <Route path="/reservar/:id" element={<Reservar />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<RutaProtegida />}>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route index element={<AdminPaquetes />} />
              <Route path="nuevo" element={<FormPaquete />} />
              <Route path="editar/:id" element={<FormPaquete />} />
            </Route>
          </Route>

          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </PaquetesProvider>
    </AuthProvider>
  );
}