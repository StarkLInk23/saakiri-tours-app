import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `text-sm font-medium uppercase tracking-wider transition-colors pb-1 border-b-2 ${
      isActive
        ? "text-dorado border-dorado"
        : "text-selva border-transparent hover:text-dorado hover:border-dorado"
    }`;

  return (
    <header className="fixed inset-x-0 -top-px z-50 bg-crema/95 backdrop-blur-sm border-b-2 border-dorado">
      <div className="max-w-6xl mx-auto h-72px px-6 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-4">
          <img
            src="https://saakiriamazonia.wordpress.com/wp-content/uploads/2025/02/cropped-logo-transp.png"
            alt="Sáakiri Tours & Travel"
            className="h-[68px] w-auto object-contain"
          />

          <div className="leading-tight">
            <h1 className="font-titulo text-2xl font-semibold text-selva">
              Sáakiri Tours &amp; Travel
            </h1>

            <p className="text-sm italic text-tierra">
              Puerto Maldonado · Perú
            </p>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <NavLink to="/" className={linkClasses}>
                Inicio
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}