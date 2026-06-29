// Layout del panel administrativo. Distinto del público:
// usa una barra superior simple + contenido a ancho completo,
// para que las tablas de gestión tengan más espacio.
// Incluye botón de cerrar sesión, que limpia el AuthContext
// y redirige al login.

import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function LayoutAdmin() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/admin/login", { replace: true });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-selva text-white px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-titulo text-lg">
          <FaLeaf className="text-dorado" />
          Panel Administrativo · Sáakiri
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-dorado-light hover:text-white transition-colors"
          >
            <FaArrowLeft size={12} /> Ver sitio público
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-dorado-light hover:text-white transition-colors"
          >
            <FaSignOutAlt size={12} /> Cerrar sesión
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-5 py-8">
        <Outlet />
      </main>
    </div>
  );
}