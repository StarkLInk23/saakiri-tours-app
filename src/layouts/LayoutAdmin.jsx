// src/layouts/LayoutAdmin.jsx
//
// Layout del panel administrativo. Distinto del público:
// usa una barra superior simple + contenido a ancho completo,
// para que las tablas de gestión tengan más espacio.

import { Outlet, Link, NavLink } from "react-router-dom";
import { FaLeaf, FaArrowLeft } from "react-icons/fa";

export default function LayoutAdmin() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[var(--color-selva)] text-white px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-titulo text-lg">
          <FaLeaf className="text-[var(--color-dorado)]" />
          Panel Administrativo · Sáakiri
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm uppercase tracking-wider text-[var(--color-dorado-light)] hover:text-white transition-colors"
        >
          <FaArrowLeft size={12} /> Ver sitio público
        </Link>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-5 py-8">
        <Outlet />
      </main>
    </div>
  );
}
