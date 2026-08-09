import { useState } from "react";
import { usePaquetes } from "../context/PaquetesContext";
import PaqueteCard from "../components/PaqueteCard";
import { Loader, ErrorMensaje } from "../components/Estado";

const filtros = [
  { label: "Todos", valor: "todos" },
  { label: "Medio día", valor: "horas" },
  { label: "Día completo", valor: "full" },
  { label: "2-3 días", valor: "2d" },
  { label: "4-5 días", valor: "4d" },
];

function coincideFiltro(paquete, filtro) {
  if (filtro === "todos") return true;
  const dur = paquete.duracion.toLowerCase();
  if (filtro === "horas") return dur.includes("hora");
  if (filtro === "full") return dur.includes("9:") || dur.includes("full");
  if (filtro === "2d") return dur.includes("2d") || dur.includes("3d");
  if (filtro === "4d") return dur.includes("4d") || dur.includes("5d");
  return true;
}

export default function Paquetes() {
  const { paquetes, cargando, error, recargar } = usePaquetes();
  const [filtroActivo, setFiltroActivo] = useState("todos");

  const activos = paquetes.filter((p) => p.activo);
  const filtrados = activos.filter((p) => coincideFiltro(p, filtroActivo));

  return (
    <div className="pt-18">
      {/* Hero pequeño */}
      <section
        className="h-56 flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,40,10,0.65), rgba(20,40,10,0.65)), url('https://saakiriamazonia.wordpress.com/wp-content/uploads/2026/04/mg_5180.jpg')",
        }}
      >
        <div className="text-white px-5">
          <p className="text-xs uppercase tracking-[0.2em] text-dorado mb-2">
            Experiencias en la Amazonía
          </p>
          <h1 className="font-titulo text-4xl font-semibold">
            Nuestros paquetes turísticos
          </h1>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-5 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {filtros.map((f) => (
            <button
              key={f.valor}
              onClick={() => setFiltroActivo(f.valor)}
              className={`text-xs font-medium uppercase tracking-wider px-5 py-2 border transition-all duration-200 ${
                filtroActivo === f.valor
                  ? "bg-selva text-white border-selva"
                  : "border-dorado-light text-selva hover:bg-selva hover:text-white hover:border-selva"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-5 max-w-6xl mx-auto">
        {cargando && <Loader texto="Cargando paquetes turísticos..." />}
        {error && <ErrorMensaje mensaje={error} onReintentar={recargar} />}

        {!cargando && !error && filtrados.length === 0 && (
          <p className="text-center text-gray-400 py-16">
            No hay paquetes para este filtro.
          </p>
        )}

        {!cargando && !error && filtrados.length > 0 && (
          <>
            <p className="text-sm text-gray-400 mb-8 text-center">
              {filtrados.length} paquete{filtrados.length !== 1 && "s"} disponible
              {filtrados.length !== 1 && "s"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtrados.map((p, i) => (
                <div
                  key={p.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <PaqueteCard paquete={p} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}