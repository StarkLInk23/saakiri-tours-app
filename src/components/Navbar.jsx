import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrar = () => setMenuAbierto(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium uppercase tracking-wider transition-colors pb-1 border-b-2 ${
      isActive
        ? "text-dorado border-dorado"
        : "text-selva border-transparent hover:text-dorado hover:border-dorado"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-crema/95 backdrop-blur-sm border-b-2 border-dorado z-50">
      <div className="max-w-6xl mx-auto px-5 h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={cerrar}>
          <div className="font-titulo text-lg font-semibold text-selva leading-tight">
            Sáakiri Tours &amp; Travel
            <span className="block text-xs font-normal italic text-tierra">
              Puerto Maldonado · Perú
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            <li><NavLink to="/" end className={linkClass}>Inicio</NavLink></li>
            <li><NavLink to="/paquetes" className={linkClass}>Paquetes</NavLink></li>
            <li><NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink></li>
            <li><NavLink to="/contacto" className={linkClass}>Contacto</NavLink></li>
          </ul>
        </nav>

        {/* Hamburguesa */}
        <button
          className="md:hidden text-selva text-xl p-2"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú"
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-crema border-t border-dorado-light px-5 py-5 flex flex-col gap-5">
          <NavLink to="/" end className={linkClass} onClick={cerrar}>Inicio</NavLink>
          <NavLink to="/paquetes" className={linkClass} onClick={cerrar}>Paquetes</NavLink>
          <NavLink to="/nosotros" className={linkClass} onClick={cerrar}>Nosotros</NavLink>
          <NavLink to="/contacto" className={linkClass} onClick={cerrar}>Contacto</NavLink>
        </div>
      )}
    </header>
  );
}