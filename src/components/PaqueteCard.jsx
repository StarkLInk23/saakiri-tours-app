// src/components/PaqueteCard.jsx
import { Link } from "react-router-dom";

export default function PaqueteCard({ paquete }) {
  const { id, nombre, duracion, descripcion, precioBasico, imagen, minPax } = paquete;

  return (
    <article className="bg-[var(--color-crema)] border border-[var(--color-dorado-light)] overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-xl">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-52 object-cover"
        onError={(e) => {
          e.target.src =
            "https://placehold.co/600x400/2d5016/f5f0e8?text=S%C3%A1akiri+Tours";
        }}
      />
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-tierra)] mb-1">
          {duracion}
        </p>
        <h3 className="font-titulo text-2xl text-[var(--color-selva)] mb-2">
          {nombre}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {descripcion}
        </p>

        <div className="flex items-baseline gap-1.5 py-2.5 border-t border-[var(--color-dorado-light)] mb-4">
          <span className="text-xs text-gray-400 uppercase">Desde</span>
          <span className="font-titulo text-2xl font-semibold text-[var(--color-selva)] leading-none">
            ${precioBasico} USD
          </span>
          <span className="text-xs text-gray-400">
            / persona · mín. {minPax} pax
          </span>
        </div>

        <Link
          to={`/paquete/${id}`}
          className="inline-block text-xs font-medium uppercase tracking-widest text-[var(--color-selva)] border-b border-[var(--color-dorado)] pb-0.5 hover:text-[var(--color-dorado)] transition-colors"
        >
          Ver detalle →
        </Link>
      </div>
    </article>
  );
}
