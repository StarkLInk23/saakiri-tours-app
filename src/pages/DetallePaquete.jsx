// Página de detalle de un paquete específico. Lee el :id de la URL
// con useParams y busca el paquete dentro del contexto global.

import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { usePaquetes } from "../context/PaquetesContext";
import { Loader, ErrorMensaje } from "../components/Estado";
import { FaArrowLeft, FaUsers, FaClock } from "react-icons/fa";

export default function DetallePaquete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { paquetes, cargando, error } = usePaquetes();

  const [tipo, setTipo] = useState("basico");
  const [personas, setPersonas] = useState(2);

  if (cargando) return <Loader texto="Cargando detalle del paquete..." />;
  if (error) return <ErrorMensaje mensaje={error} />;

  const paquete = paquetes.find((p) => String(p.id) === String(id));

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

  const personasValidas = Math.max(personas, minPax);

  const precioSeleccionado =
    tipo === "basico" ? precioBasico : precioPremium;

  const total = precioSeleccionado * personasValidas;

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

          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <FaUsers size={14} />
              <span>
                Mínimo {minPax} {minPax === 1 ? "persona" : "personas"}
              </span>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad de personas
            </label>

            <input
              type="number"
              min={minPax}
              value={personas}
              onChange={(e) => setPersonas(Number(e.target.value))}
              className="w-32 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-dorado"
            />

            {personas < minPax && (
              <p className="text-red-500 text-sm mt-2">
                Debes reservar al menos {minPax} personas.
              </p>
            )}
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Selecciona el tipo de paquete
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setTipo("basico")}
                className={`border p-4 text-center transition-all ${
                  tipo === "basico"
                    ? "border-dorado bg-dorado-light/20 ring-2 ring-dorado"
                    : "border-gray-300 hover:border-dorado"
                }`}
              >
                <p className="text-xs uppercase text-gray-400 mb-1">Básico</p>
                <p className="font-titulo text-2xl text-selva">
                  ${precioBasico}
                </p>
                <p className="text-xs text-gray-400">USD / persona</p>
              </button>

              <button
                onClick={() => setTipo("premium")}
                className={`border p-4 text-center transition-all ${
                  tipo === "premium"
                    ? "border-dorado bg-dorado-light/20 ring-2 ring-dorado"
                    : "border-gray-300 hover:border-dorado"
                }`}
              >
                <p className="text-xs uppercase text-gray-400 mb-1">Premium</p>
                <p className="font-titulo text-2xl text-selva">
                  ${precioPremium}
                </p>
                <p className="text-xs text-gray-400">USD / persona</p>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Paquete seleccionado</span>
              <span className="font-medium capitalize">{tipo}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Personas</span>
              <span className="font-medium">{personas}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Precio por persona</span>
              <span className="font-medium">${precioSeleccionado}</span>
            </div>

            <div className="border-t pt-2 flex justify-between text-lg font-semibold text-selva">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <Link
            to={`/reservar/${paquete.id}?tipo=${tipo}&personas=${personas}`}
            className={`block text-center font-medium uppercase tracking-wider text-sm py-3.5 border-2 transition-colors ${
              personas >= minPax
                ? "bg-dorado text-selva border-dorado hover:bg-transparent hover:text-selva"
                : "bg-gray-300 text-gray-500 border-gray-300 pointer-events-none cursor-not-allowed"
            }`}
          >
            Reservar este paquete
          </Link>
        </div>
      </div>
    </div>
  );
}