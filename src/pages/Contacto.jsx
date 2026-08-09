import { FaFacebook, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const canales = [
  {
    id: "facebook",
    icono: "facebook",
    titulo: "Facebook",
    desc: "Sáakiri Tours & Travel",
    link: "https://www.facebook.com/profile.php?id=61572432586523",
    label: "Visitar página",
  },
  {
    id: "whatsapp",
    icono: "whatsapp",
    titulo: "WhatsApp",
    desc: "Reservas y consultas directas",
    link: "https://wa.me/51999999999",
    label: "Escribir ahora",
  },
  {
    id: "ubicacion",
    icono: "ubicacion",
    titulo: "Ubicación",
    desc: "Puerto Maldonado, Madre de Dios, Perú",
    link: null,
    label: null,
  },
];

function IconoCanal({ tipo }) {
  if (tipo === "facebook") return <FaFacebook className="text-3xl text-blue-600" />;
  if (tipo === "whatsapp") return <FaWhatsapp className="text-3xl text-green-500" />;
  return <FaMapMarkerAlt className="text-3xl text-selva" />;
}

export default function Contacto() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section
        className="h-64 flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,40,10,0.65), rgba(20,40,10,0.65)), url('https://saakiriamazonia.wordpress.com/wp-content/uploads/2025/02/img1.png')",
        }}
      >
        <div className="text-white px-5">
          <p className="text-xs uppercase tracking-[0.2em] text-dorado mb-2">
            Estamos para ayudarte
          </p>
          <h1 className="font-titulo text-4xl font-semibold">Contáctanos</h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-3xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <div className="w-14 h-0.5 bg-dorado mx-auto mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros paquetes o quieres armar una
            experiencia personalizada? Escríbenos por cualquiera de nuestros
            canales — te respondemos rápido.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {canales.map((c) => (
            <div
              key={c.id}
              className="text-center p-7 border border-dorado-light hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-3">
                <IconoCanal tipo={c.icono} />
              </div>
              <p className="font-titulo text-xl text-selva mb-1">{c.titulo}</p>
              <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-selva border-b border-dorado hover:text-dorado transition-colors"
                >
                  {c.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}