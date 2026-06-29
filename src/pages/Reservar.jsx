// Formulario de reserva controlado con React Hook Form.
// Valida los campos antes de enviar, y hace POST al recurso /reservas
// de MockAPI. Usa SweetAlert2 para confirmar el envío.

import { useParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { usePaquetes } from "../context/PaquetesContext";
import { crearReserva } from "../services/api";
import { Loader } from "../components/Estado";
import { FaArrowLeft } from "react-icons/fa";

export default function Reservar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { paquetes, cargando } = usePaquetes();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  if (cargando) return <Loader texto="Cargando..." />;

  const paquete = paquetes.find((p) => p.id === id);

  if (!paquete) {
    return (
      <div className="text-center py-24 px-5">
        <p className="text-gray-500 mb-4">No encontramos ese paquete.</p>
        <Link to="/" className="text-selva underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  async function onSubmit(datos) {
    try {
      await crearReserva({
        paqueteId: paquete.id,
        paqueteNombre: paquete.nombre,
        nombreCliente: datos.nombreCliente,
        telefono: datos.telefono,
        email: datos.email,
        fechaTour: datos.fechaTour,
        numPersonas: Number(datos.numPersonas),
        mensaje: datos.mensaje || "",
        createdAt: new Date().toISOString(),
      });

      await Swal.fire({
        icon: "success",
        title: "¡Reserva enviada!",
        text: `Gracias ${datos.nombreCliente}, te contactaremos pronto para confirmar tu reserva de "${paquete.nombre}".`,
        confirmButtonColor: "#2d5016",
        confirmButtonText: "Entendido",
      });

      reset();
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: "No se pudo registrar tu reserva. Inténtalo de nuevo.",
        confirmButtonColor: "#2d5016",
      });
    }
  }

  return (
    <div className="max-w-lg mx-auto px-5 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-selva mb-6 hover:text-dorado transition-colors"
      >
        <FaArrowLeft size={12} /> Volver
      </button>

      <p className="text-xs uppercase tracking-widest text-dorado mb-1">
        Reserva tu aventura
      </p>
      <h1 className="font-titulo text-3xl text-selva mb-1">
        {paquete.nombre}
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        {paquete.duracion} · desde ${paquete.precioBasico} USD por persona
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nombre completo
          </label>
          <input
            type="text"
            {...register("nombreCliente", {
              required: "El nombre es obligatorio",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
            })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva transition-colors"
            placeholder="Ej. María García"
          />
          {errors.nombreCliente && (
            <p className="text-red-600 text-xs mt-1">
              {errors.nombreCliente.message}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Teléfono / WhatsApp
          </label>
          <input
            type="tel"
            {...register("telefono", {
              required: "El teléfono es obligatorio",
              pattern: {
                value: /^[0-9+\s-]{6,15}$/,
                message: "Ingresa un teléfono válido",
              },
            })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva transition-colors"
            placeholder="Ej. +51 982 123 456"
          />
          {errors.telefono && (
            <p className="text-red-600 text-xs mt-1">{errors.telefono.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Correo electrónico
          </label>
          <input
            type="email"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresa un correo válido",
              },
            })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva transition-colors"
            placeholder="Ej. correo@ejemplo.com"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Fecha y número de personas */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Fecha del tour
            </label>
            <input
              type="date"
              {...register("fechaTour", {
                required: "Selecciona una fecha",
              })}
              className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva transition-colors"
            />
            {errors.fechaTour && (
              <p className="text-red-600 text-xs mt-1">
                {errors.fechaTour.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              N° de personas
            </label>
            <input
              type="number"
              {...register("numPersonas", {
                required: "Indica cuántas personas",
                min: { value: paquete.minPax, message: `Mínimo ${paquete.minPax}` },
              })}
              defaultValue={paquete.minPax}
              className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva transition-colors"
            />
            {errors.numPersonas && (
              <p className="text-red-600 text-xs mt-1">
                {errors.numPersonas.message}
              </p>
            )}
          </div>
        </div>

        {/* Mensaje opcional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Mensaje (opcional)
          </label>
          <textarea
            {...register("mensaje")}
            rows={3}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva transition-colors resize-none"
            placeholder="Cuéntanos algo más sobre tu viaje..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-selva text-white font-medium uppercase tracking-wider text-sm py-3.5 hover:bg-dorado hover:text-selva transition-colors disabled:opacity-60"
        >
          {isSubmitting ? "Enviando..." : "Confirmar reserva"}
        </button>
      </form>
    </div>
  );
}
