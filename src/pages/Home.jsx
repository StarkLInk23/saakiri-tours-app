import { Link } from "react-router-dom";
import { usePaquetes } from "../context/PaquetesContext";
import PaqueteCard from "../components/PaqueteCard";
import { Loader } from "../components/Estado";
import { FaLeaf, FaShieldAlt, FaStar, FaArrowRight } from "react-icons/fa";
import WhatsAppButton from '../components/WhatsAppButton';

const stats = [
  { valor: "6+", label: "Paquetes turísticos" },
  { valor: "100%", label: "Atención personalizada" },
  { valor: "Local", label: "Equipo de Puerto Maldonado" },
];

const diferenciadores = [
  {
    icono: <FaLeaf className="text-dorado text-2xl" />,
    titulo: "Agencia 100% local",
    desc: "Conocemos cada sendero, cada lago y cada comunidad. No somos intermediarios — somos de aquí.",
  },
  {
    icono: <FaShieldAlt className="text-dorado text-2xl" />,
    titulo: "Reservas online reales",
    desc: "Sistema propio de reservas con confirmación directa. Sin WhatsApp de ida y vuelta.",
  },
  {
    icono: <FaStar className="text-dorado text-2xl" />,
    titulo: "Experiencias exclusivas",
    desc: "Paquetes desde medio día hasta 5 días, adaptados a tu tiempo y presupuesto.",
  },
];
const hotelesAliados = [
  {
    nombre: "Hotel Enai",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmezcGAdX1vzU9yf91ztkLGf8AbQULOVZaPyRUhwv9w&s=10",
  },
  {
    nombre: "Boulevard Hotel",
    foto: "https://hotelboulevardmaldonado.com/wp-content/uploads/2025/11/Hotel-Boulevard-Tambopata.png",
  },
  {
    nombre: "Libélula Hotel",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOb4YfenO9K-3FeOmOe6uIxKiofp5L-7Z2Zl7S4Cv6w&s=10",
  },
  {
    nombre: "Wasai Lodge",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bIZmMuG6p2HeY_LLLJkPl2XHeMzvDr1jCaiDSAS11g&s=10",
  },
  {
    nombre: "Hotel Centenario",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbdcs-2n5VXFBw5ZtrxUUzMQr9lx4O_aoqi-_ZKkYbA&s=10",
  },
  {
    nombre: "Hotel Golden",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeUOZJ9ptfbU2QSb3Eiz5Egy69O7zcRhjRzzbWtS9_w&s=10",
  },
  {
    nombre: "Chonta Hospedaje",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu28ScX5X2SNZlApO-vtsArLije5reumUz3mGFiReOIw&s=10",
  },
];

export default function Home() {
  const { paquetes, cargando } = usePaquetes();
  const destacados = paquetes.filter((p) => p.activo).slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-screen min-h-125 flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(20,40,10,0.6), rgba(20,40,10,0.4)), url('https://saakiriamazonia.wordpress.com/wp-content/uploads/2026/04/mg_3042.jpg')",
        }}
      >
        <div className="relative z-10 max-w-3xl px-6 text-white animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-dorado mb-5 opacity-90">
            Tambopata · Madre de Dios · Perú
          </p>
          <h1 className="font-titulo text-6xl md:text-7xl font-semibold mb-5 leading-tight drop-shadow-lg">
            La Amazonía te está esperando
          </h1>
          <p className="font-titulo italic text-xl text-dorado-light mb-4">
            "Explora sin límites, viaja con el alma."
          </p>
          <p className="text-base font-light opacity-85 mb-10 max-w-xl mx-auto leading-relaxed">
            Somos una agencia local de Puerto Maldonado con paquetes
            personalizados, reservas online reales y guías expertos en
            la Reserva Nacional de Tambopata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/paquetes"
              className="inline-flex items-center gap-2 bg-dorado text-selva text-sm font-medium uppercase tracking-widest px-10 py-4 hover:bg-transparent hover:text-dorado-light border-2 border-dorado transition-all duration-300"
            >
              Ver todos los paquetes <FaArrowRight size={12} />
            </Link>
            <Link
              to="/nosotros"
              className="inline-block text-sm font-medium uppercase tracking-widest px-10 py-4 border-2 border-white/50 text-white hover:border-dorado hover:text-dorado transition-all duration-300"
            >
              Quiénes somos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <span className="text-xs uppercase tracking-widest">Descubrir</span>
          <div className="w-0.5 h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-selva py-10 px-5">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-titulo text-4xl font-semibold text-dorado">
                {s.valor}
              </p>
              <p className="text-xs text-crema/70 uppercase tracking-wider mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUÉ SÁAKIRI */}
      <section className="py-20 px-5 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-dorado mb-2">
            ¿Por qué elegirnos?
          </p>
          <h2 className="font-titulo text-4xl text-selva">
            Lo que nos hace diferentes
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {diferenciadores.map((d) => (
            <div
              key={d.titulo}
              className="text-center p-7 border border-dorado-light hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{d.icono}</div>
              <h3 className="font-titulo text-xl text-selva mb-3">{d.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOTELES ALIADOS */}
      <section className="py-20 px-5 bg-crema dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-dorado mb-2">
              Convenios turísticos
            </p>
            <h2 className="font-titulo text-4xl text-selva dark:text-white mb-4">
              Hoteles aliados en Puerto Maldonado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
              Trabajamos con alojamientos seleccionados para ofrecer experiencias
              cómodas y seguras antes y después de cada aventura amazónica.
            </p>
          </div>

          <div className="overflow-x-auto cursor-grab active:cursor-grabbing pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-dorado/60 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="flex gap-5 w-max pr-2">
              {hotelesAliados.map((hotel) => (
                <div
                  key={hotel.nombre}
                  className="group min-w-65 max-w-65 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-dorado-light dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={hotel.foto}
                      alt={hotel.nombre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-titulo text-lg text-selva dark:text-white">
                      {hotel.nombre}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Hotel aliado · Puerto Maldonado
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            Desliza horizontalmente para ver todos los hoteles aliados.
          </p>
        </div>
      </section>

      {/* PAQUETES DESTACADOS */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-dorado mb-2">
                Lo más elegido
              </p>
              <h2 className="font-titulo text-4xl text-selva">
                Paquetes destacados
              </h2>
            </div>
            <Link
              to="/paquetes"
              className="hidden md:flex items-center gap-2 text-sm uppercase tracking-wider text-selva border-b border-dorado hover:text-dorado transition-colors pb-1"
            >
              Ver todos <FaArrowRight size={11} />
            </Link>
          </div>

          {cargando ? (
            <Loader texto="Cargando paquetes..." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {destacados.map((p, i) => (
                <div
                  key={p.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <PaqueteCard paquete={p} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10 md:hidden">
            <Link
              to="/paquetes"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-selva border-b border-dorado hover:text-dorado transition-colors"
            >
              Ver todos los paquetes <FaArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-selva text-crema py-20 px-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-dorado mb-3">
          Empieza tu aventura
        </p>
        <h2 className="font-titulo text-4xl text-dorado-light mb-4">
          ¿Listo para explorar la Amazonía?
        </h2>
        <p className="opacity-80 max-w-md mx-auto mb-8 text-sm leading-relaxed">
          Elige tu paquete, completa tu reserva en minutos y nosotros
          nos encargamos del resto. Sin intermediarios, sin complicaciones.
        </p>
        <Link
          to="/paquetes"
          className="inline-flex items-center gap-2 bg-dorado text-selva text-sm font-medium uppercase tracking-wider px-8 py-3.5 border-2 border-dorado hover:bg-transparent hover:text-dorado-light transition-all duration-300"
        >
          Ver paquetes <FaArrowRight size={11} />
        </Link>
      </section>
      <WhatsAppButton />
    </div>
  );
}