// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1a2e0a] text-crema/60 px-5 py-10 text-center mt-auto">
      <div className="font-titulo text-lg text-dorado-light mb-3">
        Sáakiri Tours &amp; Travel
        <span className="block text-sm italic text-crema/50 mt-1">
          "Explora sin límites, viaja con el alma."
        </span>
      </div>

      <nav className="flex justify-center gap-6 flex-wrap mb-5">
        <Link to="/" className="text-xs uppercase tracking-wider hover:text-dorado">
          Inicio
        </Link>
        <Link to="/admin" className="text-xs uppercase tracking-wider hover:text-dorado">
          Admin
        </Link>
      </nav>

      <p className="text-xs">
        &copy; 2026 Sáakiri Tours &amp; Travel · Puerto Maldonado, Madre de Dios, Perú
      </p>
    </footer>
  );
}
