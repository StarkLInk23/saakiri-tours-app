import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaSignOutAlt } from "react-icons/fa";
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
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm uppercase tracking-wider text-dorado-light hover:text-white transition-colors"
        >
          <FaSignOutAlt size={13} /> Cerrar sesión
        </button>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-5 py-8">
        <div className="mb-4">
          <Link
            to="/"
            className="text-xs text-gray-400 hover:text-selva transition-colors"
          >
            ← Volver al sitio público
          </Link>
        </div>
        <Outlet />
      </main>
    </div>
  );
}