// Página de detalle de un paquete específico. Lee el :id de la URL
// con useParams y busca el paquete dentro del contexto global.

import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { usePaquetes } from "../context/PaquetesContext";
import { Loader, ErrorMensaje } from "../components/Estado";
import { FaArrowLeft, FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";

export default function DetallePaquete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { paquetes, cargando, error } = usePaquetes();
  const [tabActivo, setTabActivo] = useState("itinerario");

  if (cargando) return <Loader />;
  if (error) return <ErrorMensaje mensaje={error} />;

  const paquete = paquetes.find((p) => String(p.id) === String(id));

  if (!paquete) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="font-titulo text-3xl text-selva mb-4">
          No encontramos ese paquete turístico.
        </h2>
        <Link
          to="/paquetes"
          className="inline-flex items-center gap-2 text-selva hover:text-dorado"
        >
          <FaArrowLeft /> Volver al catálogo
        </Link>
      </div>
    );
  }

  const {
    nombre,
    duracion,
    descripcion,
    precioBasico,
    precioPremium,
    minPax,
    imagen,
    itinerario,
    incluye,
  } = paquete;

  const hayItinerario = Array.isArray(itinerario) && itinerario.length > 0;
  const hayIncluye = Array.isArray(incluye) && incluye.length > 0;

  const tabs = [
    ...(hayItinerario ? [{ id: "itinerario", label: "Itinerario" }] : []),
    ...(hayIncluye ? [{ id: "incluye", label: "Incluye" }] : []),
  ];

  // Si la pestaña activa no existe para este paquete, cae a la primera disponible.
  const activo = tabs.some((t) => t.id === tabActivo) ? tabActivo : tabs[0]?.id;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-selva mb-6 hover:text-dorado transition-colors"
      >
        <FaArrowLeft /> Volver
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-80 md:h-full object-cover rounded-2xl shadow-lg"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/600x400/2d5016/f5f0e8?text=S%C3%A1akiri+Tours";
          }}
        />

        <div>
          <p className="text-xs uppercase tracking-widest text-tierra mb-2 flex items-center gap-2">
            <FaClock size={12} /> {duracion}
          </p>

          <h1 className="font-titulo text-4xl text-selva mb-4">{nombre}</h1>

          <p className="text-gray-600 leading-relaxed mb-6">{descripcion}</p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <FaUsers size={14} />
            Mínimo {minPax} {minPax === 1 ? "persona" : "personas"}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-dorado-light p-4 text-center rounded-xl">
              <p className="text-xs uppercase text-gray-400 mb-1">Básico</p>
              <p className="font-titulo text-2xl text-selva">${precioBasico}</p>
              <p className="text-xs text-gray-400">USD / persona</p>
            </div>

            <div className="border border-dorado bg-dorado-light/20 p-4 text-center rounded-xl">
              <p className="text-xs uppercase text-tierra mb-1">Premium</p>
              <p className="font-titulo text-2xl text-selva">${precioPremium}</p>
              <p className="text-xs text-gray-400">USD / persona</p>
            </div>
          </div>

          <Link
            to={`/reservar/${paquete.id}`}
            className="block text-center bg-dorado text-selva font-medium uppercase tracking-wider text-sm py-3.5 border-2 border-dorado hover:bg-transparent hover:text-selva transition-colors rounded-xl"
          >
            Reservar este paquete
          </Link>
        </div>
      </div>

      {/* Pestañas: Itinerario / Incluye (solo si el paquete tiene datos) */}
      {tabs.length > 0 && (
        <div className="mt-14">
          <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabActivo(tab.id)}
                className={`whitespace-nowrap px-5 py-3 text-sm font-medium uppercase tracking-wider transition-colors border-b-2 ${
                  activo === tab.id
                    ? "border-dorado text-selva"
                    : "border-transparent text-gray-400 hover:text-selva"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activo === "itinerario" && hayItinerario && (
            <div className="space-y-6 max-w-3xl">
              {itinerario
                .slice()
                .sort((a, b) => a.dia - b.dia)
                .map((d) => (
                  <div key={d.dia} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-selva text-white font-titulo text-lg">
                        {d.dia}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-selva mb-1">{d.titulo}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {d.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {activo === "incluye" && hayIncluye && (
            <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl">
              {incluye.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-selva mt-0.5 flex-shrink-0" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}