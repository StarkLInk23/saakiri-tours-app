import { usePaquetes } from "../context/PaquetesContext";
import PaqueteCard from "../components/PaqueteCard";
import { Loader, ErrorMensaje } from "../components/Estado";

export default function Catalogo() {
  const { paquetes, cargando, error, recargar } = usePaquetes();
  const paquetesActivos = paquetes.filter((p) => p.activo);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[90vh] min-h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(20,40,10,0.6), rgba(20,40,10,0.35)), url('https://saakiriamazonia.wordpress.com/wp-content/uploads/2026/04/mg_3042.jpg')",
        }}
      >
        <div className="relative z-10 max-w-2xl px-6 text-white animate-fade-in">
          <p className="text-xs uppercase tracking-[0.25em] text-dorado mb-4 opacity-90">
            Tambopata · Madre de Dios · Perú
          </p>

          <h1 className="font-titulo text-5xl md:text-6xl font-semibold mb-5 leading-tight drop-shadow-lg">
            Disfruta tu estadía en Tambopata
          </h1>

          <p className="font-titulo italic text-xl text-dorado-light mb-5">
            "Explora sin límites, viaja con el alma."
          </p>

          <p className="text-base font-light opacity-90 mb-8 max-w-lg mx-auto">
            Experiencias únicas de viaje, paquetes personalizados y atención
            exclusiva en la Amazonía peruana.
          </p>

          <a
            href="#paquetes"
            className="inline-block bg-dorado text-selva text-sm font-medium uppercase tracking-widest px-10 py-4 border-2 border-dorado hover:bg-transparent hover:text-dorado-light transition-all duration-300"
          >
            Descubrir paquetes
          </a>
        </div>
      </section>

      {/* NOSOTROS */}
      <section
        id="nosotros"
        className="py-20 px-5 max-w-4xl mx-auto text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-dorado mb-3">
          Quiénes somos
        </p>

        <h2 className="font-titulo text-4xl text-selva mb-5">
          Experiencias únicas en la selva
        </h2>

        <div className="w-14 h-0.5 bg-dorado mx-auto mb-6" />

        <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
          Sáakiri Tours &amp; Travel es una agencia de turismo especializada en
          experiencias de naturaleza y aventura en la Reserva Nacional de
          Tambopata. Ofrecemos paquetes personalizados para que vivas la
          Amazonía con atención exclusiva y respeto al medio ambiente.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Desde salidas cortas de medio día hasta expediciones de cinco días,
          diseñamos cada experiencia para conectarte con la biodiversidad más
          rica del planeta.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto">
          {[
            { valor: "6+", label: "Paquetes turísticos" },
            { valor: "100%", label: "Atención personalizada" },
            { valor: "∞", label: "Experiencias únicas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-titulo text-4xl text-selva font-semibold">
                {stat.valor}
              </p>

              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PAQUETES */}
      <section id="paquetes" className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-dorado mb-2">
              Nuestros programas
            </p>

            <h2 className="font-titulo text-4xl text-selva mb-2">
              Elige tu aventura
            </h2>

            <p className="text-gray-500">
              Desde salidas cortas hasta expediciones de varios días en la
              Amazonía
            </p>
          </div>

          {cargando && <Loader texto="Cargando paquetes turísticos..." />}

          {error && (
            <ErrorMensaje mensaje={error} onReintentar={recargar} />
          )}

          {!cargando && !error && paquetesActivos.length === 0 && (
            <p className="text-center text-gray-500 py-16">
              No hay paquetes disponibles por el momento.
            </p>
          )}

          {!cargando && !error && paquetesActivos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {paquetesActivos.map((paquete, i) => (
                <div
                  key={paquete.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <PaqueteCard paquete={paquete} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="bg-selva text-crema py-20 px-5 text-center"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-dorado mb-2">
          Empieza tu aventura
        </p>

        <h2 className="font-titulo text-4xl text-dorado-light mb-4">
          ¿Listo para explorar la Amazonía?
        </h2>

        <p className="opacity-85 max-w-md mx-auto mb-8">
          Elige un paquete y completa el formulario de reserva. Te
          contactaremos para confirmar tu aventura.
        </p>

        <a
          href="#paquetes"
          className="inline-block bg-dorado text-selva text-sm font-medium uppercase tracking-wider px-8 py-3.5 border-2 border-dorado hover:bg-transparent hover:text-dorado-light transition-all duration-300"
        >
          Ver paquetes disponibles
        </a>
      </section>
    </div>
  );
}