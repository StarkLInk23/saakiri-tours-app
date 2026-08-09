import { Link } from "react-router-dom";
import { FaLeaf, FaUsers, FaStar, FaMapMarkerAlt } from "react-icons/fa";

export default function Nosotros() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section
        className="h-64 flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,40,10,0.65), rgba(20,40,10,0.65)), url('https://saakiriamazonia.wordpress.com/wp-content/uploads/2026/04/mg_5180.jpg')",
        }}
      >
        <div className="text-white px-5">
          <p className="text-xs uppercase tracking-[0.2em] text-dorado mb-2">Quiénes somos</p>
          <h1 className="font-titulo text-4xl font-semibold">Sobre Sáakiri</h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-14 h-0.5 bg-dorado mb-6" />
            <h2 className="font-titulo text-3xl text-selva mb-4">
              Nacimos en la Amazonía
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sáakiri Tours &amp; Travel es una agencia de turismo local nacida en
              Puerto Maldonado, Madre de Dios. Nos especializamos en experiencias
              de naturaleza, aventura y cultura en la Reserva Nacional de Tambopata,
              uno de los ecosistemas más biodiversos del planeta.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A diferencia de las grandes operadoras nacionales, somos un equipo
              local que conoce cada sendero, cada lago y cada comunidad de la selva.
              Eso nos permite ofrecer experiencias auténticas, personalizadas y con
              impacto positivo en la comunidad.
            </p>
          </div>
          <img
            src="https://saakiriamazonia.wordpress.com/wp-content/uploads/2026/04/mg_3042.jpg"
            alt="Selva de Tambopata"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Valores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icono: <FaLeaf />, titulo: "Ecoturismo", desc: "Turismo responsable con la naturaleza" },
            { icono: <FaUsers />, titulo: "Local", desc: "Equipo 100% de Puerto Maldonado" },
            { icono: <FaStar />, titulo: "Exclusivo", desc: "Atención personalizada en cada tour" },
            { icono: <FaMapMarkerAlt />, titulo: "Tambopata", desc: "Expertos en la Reserva Nacional" },
          ].map((v) => (
            <div key={v.titulo} className="text-center p-5 border border-dorado-light">
              <div className="text-dorado text-2xl mb-3 flex justify-center">{v.icono}</div>
              <p className="font-titulo text-lg text-selva mb-1">{v.titulo}</p>
              <p className="text-xs text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-selva text-white text-sm font-medium uppercase tracking-wider px-8 py-3.5 hover:bg-dorado hover:text-selva transition-all duration-300"
          >
            Ver nuestros paquetes
          </Link>
        </div>
      </section>
    </div>
  );
}