// src/pages/Catalogo.jsx
//
// Página pública principal: hero + grid de paquetes turísticos.
// Consume el contexto global de paquetes y filtra solo los "activo: true".

import { usePaquetes } from "../context/PaquetesContext";
import PaqueteCard from "../components/PaqueteCard";
import { Loader, ErrorMensaje } from "../components/Estado";

export default function Catalogo() {
  const { paquetes, cargando, error, recargar } = usePaquetes();

  // Solo mostramos al público los paquetes marcados como activos
  const paquetesActivos = paquetes.filter((p) => p.activo);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[80vh] min-h-[480px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(20,40,10,0.55), rgba(20,40,10,0.3)), url('https://saakiriamazonia.wordpress.com/wp-content/uploads/2026/04/mg_3042.jpg')",
        }}
      >
        <div className="relative z-10 max-w-2xl px-6 text-white">
          <h1 className="font-titulo text-5xl font-semibold mb-4 leading-tight drop-shadow-lg">
            Disfruta tu estadía en Tambopata
          </h1>
          <p className="font-titulo italic text-xl text-[var(--color-dorado-light)] mb-6">
            "Explora sin límites, viaja con el alma."
          </p>
          <p className="text-base font-light opacity-90 mb-8">
            Experiencias únicas de viaje, paquetes personalizados y atención
            exclusiva para hacer realidad tus vacaciones soñadas en la Amazonía.
          </p>
          <a
            href="#paquetes"
            className="inline-block bg-[var(--color-dorado)] text-[var(--color-selva)] text-sm font-medium uppercase tracking-widest px-9 py-3.5 border-2 border-[var(--color-dorado)] hover:bg-transparent hover:text-[var(--color-dorado-light)] transition-colors"
          >
            Ver paquetes
          </a>
        </div>
      </section>

      {/* PAQUETES */}
      <section id="paquetes" className="py-20 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-dorado)] mb-2">
            Nuestros programas
          </p>
          <h2 className="font-titulo text-4xl text-[var(--color-selva)] mb-2">
            Elige tu aventura
          </h2>
          <p className="text-gray-500">
            Desde salidas cortas hasta expediciones de varios días en la Amazonía
          </p>
        </div>

        {cargando && <Loader texto="Cargando paquetes turísticos..." />}

        {error && <ErrorMensaje mensaje={error} onReintentar={recargar} />}

        {!cargando && !error && paquetesActivos.length === 0 && (
          <p className="text-center text-gray-500 py-16">
            No hay paquetes disponibles por el momento.
          </p>
        )}

        {!cargando && !error && paquetesActivos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {paquetesActivos.map((paquete) => (
              <PaqueteCard key={paquete.id} paquete={paquete} />
            ))}
          </div>
        )}
      </section>

      {/* CONTACTO RÁPIDO */}
      <section className="bg-[var(--color-selva)] text-[var(--color-crema)] py-16 px-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-dorado)] mb-2">
          Empieza tu aventura
        </p>
        <h2 className="font-titulo text-3xl text-[var(--color-dorado-light)] mb-4">
          ¿Listo para explorar la Amazonía?
        </h2>
        <p className="opacity-85 max-w-md mx-auto mb-8">
          Elige un paquete y completa el formulario de reserva. Te
          contactaremos para confirmar tu aventura.
        </p>
        <a
          href="#paquetes"
          className="inline-block bg-[var(--color-dorado)] text-[var(--color-selva)] text-sm font-medium uppercase tracking-wider px-8 py-3 border-2 border-[var(--color-dorado)] hover:bg-transparent hover:text-[var(--color-dorado-light)] transition-colors"
        >
          Ver paquetes disponibles
        </a>
      </section>
    </div>
  );
}
