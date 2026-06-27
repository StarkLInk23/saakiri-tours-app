// src/pages/DetallePaquete.jsx
//
// Página de detalle de un paquete específico. Lee el :id de la URL
// con useParams y busca el paquete dentro del contexto global.

import { useParams, Link, useNavigate } from "react-router-dom";
import { usePaquetes } from "../context/PaquetesContext";
import { Loader, ErrorMensaje } from "../components/Estado";
import { FaArrowLeft, FaUsers, FaClock } from "react-icons/fa";

export default function DetallePaquete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { paquetes, cargando, error } = usePaquetes();

  if (cargando) return <Loader texto="Cargando detalle del paquete..." />;
  if (error) return <ErrorMensaje mensaje={error} />;

  const paquete = paquetes.find((p) => p.id === id);

  if (!paquete) {
    return (
      <div className="text-center py-24 px-5">
        <p className="text-gray-500 mb-4">
          No encontramos ese paquete turístico.
        </p>
        <Link
          to="/"
          className="text-selva underline hover:text-dorado"
        >
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const { nombre, duracion, descripcion, precioBasico, precioPremium, minPax, imagen } =
    paquete;

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-selva mb-6 hover:text-dorado transition-colors"
      >
        <FaArrowLeft size={12} /> Volver
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-80 md:h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/600x400/2d5016/f5f0e8?text=S%C3%A1akiri+Tours";
          }}
        />

        <div>
          <p className="text-xs uppercase tracking-widest text-tierra mb-2 flex items-center gap-2">
            <FaClock size={12} /> {duracion}
          </p>
          <h1 className="font-titulo text-4xl text-selva mb-4">
            {nombre}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">{descripcion}</p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <FaUsers size={14} />
            Mínimo {minPax} {minPax === 1 ? "persona" : "personas"}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-dorado-light p-4 text-center">
              <p className="text-xs uppercase text-gray-400 mb-1">Básico</p>
              <p className="font-titulo text-2xl text-selva">
                ${precioBasico}
              </p>
              <p className="text-xs text-gray-400">USD / persona</p>
            </div>
            <div className="border border-dorado bg-dorado-light/20 p-4 text-center">
              <p className="text-xs uppercase text-tierra mb-1">
                Premium
              </p>
              <p className="font-titulo text-2xl text-selva">
                ${precioPremium}
              </p>
              <p className="text-xs text-gray-400">USD / persona</p>
            </div>
          </div>

          <Link
            to={`/reservar/${paquete.id}`}
            className="block text-center bg-dorado text-selva font-medium uppercase tracking-wider text-sm py-3.5 border-2 border-dorado hover:bg-transparent hover:text-selva transition-colors"
          >
            Reservar este paquete
          </Link>
        </div>
      </div>
    </div>
  );
}
