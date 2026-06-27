// src/App.jsx
//
// Define todas las rutas de la aplicación con React Router DOM.
// Separa rutas públicas (LayoutPublico) de rutas administrativas (LayoutAdmin).

import { Routes, Route } from "react-router-dom";
import { PaquetesProvider } from "./context/PaquetesContext";

import LayoutPublico from "./layouts/LayoutPublico";
import LayoutAdmin from "./layouts/LayoutAdmin";

import Catalogo from "./pages/Catalogo";
import DetallePaquete from "./pages/DetallePaquete";
import Reservar from "./pages/Reservar";
import AdminPaquetes from "./pages/AdminPaquetes";
import FormPaquete from "./pages/FormPaquete";
import NoEncontrado from "./pages/NoEncontrado";

export default function App() {
  return (
    <PaquetesProvider>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<LayoutPublico />}>
          <Route path="/" element={<Catalogo />} />
          <Route path="/paquete/:id" element={<DetallePaquete />} />
          <Route path="/reservar/:id" element={<Reservar />} />
        </Route>

        {/* Rutas administrativas */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPaquetes />} />
          <Route path="nuevo" element={<FormPaquete />} />
          <Route path="editar/:id" element={<FormPaquete />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </PaquetesProvider>
  );
}
