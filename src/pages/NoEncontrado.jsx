// src/pages/NoEncontrado.jsx
import { Link } from "react-router-dom";

export default function NoEncontrado() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-5 text-center">
      <h1 className="font-titulo text-6xl text-[var(--color-selva)] mb-3">404</h1>
      <p className="text-gray-500 mb-6">
        Esta página no existe o fue movida.
      </p>
      <Link
        to="/"
        className="bg-[var(--color-selva)] text-white text-sm uppercase tracking-wider px-6 py-2.5 hover:bg-[var(--color-dorado)] hover:text-[var(--color-selva)] transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
