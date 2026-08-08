import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const esHome = location.pathname === "/";

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium uppercase tracking-wider transition-colors pb-1 border-b-2 ${
      isActive
        ? "text-dorado border-dorado"
        : "text-selva border-transparent hover:text-dorado hover:border-dorado"
    }`;

  const anclaClass =
    "text-sm font-medium uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent text-selva hover:text-dorado hover:border-dorado cursor-pointer";

  return (
    <header className="fixed top-0 left-0 w-full bg-crema/95 backdrop-blur-sm border-b-2 border-dorado z-50">
      <div className="max-w-6xl mx-auto px-5 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="font-titulo text-xl font-semibold text-selva leading-tight">
            Sáakiri Tours &amp; Travel
            <span className="block text-xs font-normal italic text-tierra">
              Puerto Maldonado · Perú
            </span>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-7">
            <li>
              <NavLink to="/" end className={linkClasses}>
                Inicio
              </NavLink>
            </li>
            {esHome && (
              <>
                <li>
                  <a href="#nosotros" className={anclaClass}>
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#paquetes" className={anclaClass}>
                    Paquetes
                  </a>
                </li>
                <li>
                  <a href="#contacto" className={anclaClass}>
                    Contacto
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}