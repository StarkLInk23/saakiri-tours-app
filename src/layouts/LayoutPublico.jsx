// src/layouts/LayoutPublico.jsx
//
// Layout compartido por las páginas públicas (Catálogo, Detalle, Reserva).
// Usa <Outlet /> de React Router para renderizar la página activa.

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LayoutPublico() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
