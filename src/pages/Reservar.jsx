// Formulario de reserva controlado con React Hook Form.
// Valida los campos antes de enviar, y hace POST al recurso /reservas
// de MockAPI. Usa SweetAlert2 para confirmar el envío.

import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { usePaquetes } from "../context/PaquetesContext";
import { crearReserva } from "../services/api";
import { Loader } from "../components/Estado";
import { FaArrowLeft } from "react-icons/fa";
import { toPng } from "html-to-image";
import { useRef } from "react";

export default function Reservar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { paquetes, cargando } = usePaquetes();

  const [tipo, setTipo] = useState("basico");
  const boletaRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  if (cargando) return <Loader texto="Cargando..." />;

  const paquete = paquetes.find((p) => String(p.id) === String(id));

  const precioSeleccionado =
    tipo === "basico"
      ? paquete?.precioBasico
      : paquete?.precioPremium;

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

  async function descargarBoletaPNG() {
    if (!boletaRef.current) return;

    const dataUrl = await toPng(boletaRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = `boleta-saakiri-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
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

      const resultado = await Swal.fire({
        icon: "success",
        title: "¡Reserva registrada!",
        html: `
          <p>Gracias <b>${datos.nombreCliente}</b>.</p>
          <p>Tu reserva para <b>${paquete.nombre}</b> fue registrada correctamente.</p>
          <p>Puedes descargar tu boleta de reserva.</p>
        `,
        confirmButtonColor: "#2d5016",
        confirmButtonText: "Ir al inicio",
        showDenyButton: true,
        denyButtonText: "Descargar boleta",
        denyButtonColor: "#c89b3c",
      });

      if (resultado.isDenied) {
        await descargarBoletaPNG(datos, paquete, tipo, precioSeleccionado);
      }

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
        {paquete.duracion} · Desde ${paquete.precioBasico} USD por persona
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
            className="w-full rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-selva placeholder:text-green-700/60 shadow-sm transition-all duration-200 focus:border-dorado focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:outline-none"
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
            className="w-full rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-selva placeholder:text-green-700/60 shadow-sm transition-all duration-200 focus:border-dorado focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:outline-none"
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
            className="w-full rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-selva placeholder:text-green-700/60 shadow-sm transition-all duration-200 focus:border-dorado focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:outline-none"
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
              Fecha inicio del tour
            </label>
            <input
              type="date"
              {...register("fechaTour", {
                required: "Selecciona una fecha",
              })}
              className="w-full rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-selva shadow-sm focus:border-dorado focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
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
              className="w-full rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-selva shadow-sm focus:border-dorado focus:bg-white focus:ring-4 focus:ring-yellow-100 transition-all duration-200"
            />
            {errors.numPersonas && (
              <p className="text-red-600 text-xs mt-1">
                {errors.numPersonas.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-selva">
            Elige tu experiencia
          </p>

          <button
            type="button"
            onClick={() => setTipo("basico")}
            className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
              tipo === "basico"
                ? "border-green-500 bg-green-50 ring-2 ring-green-200"
                : "border-gray-200 bg-white hover:border-green-400"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-selva">Básico</p>
                <p className="text-sm text-gray-500">
                  Ideal para viajeros aventureros.
                </p>
              </div>
              <p className="font-titulo text-2xl text-selva">
                ${paquete.precioBasico}
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setTipo("premium")}
            className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
              tipo === "premium"
                ? "border-yellow-500 bg-yellow-50 ring-2 ring-yellow-200"
                : "border-gray-200 bg-white hover:border-yellow-400"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-titulo text-2xl text-yellow-700">Premium</p>
                <p className="text-sm text-gray-500">
                  Mayor comodidad y atención personalizada.
                </p>
              </div>
              <p className="font-titulo text-2xl text-selva">
                ${paquete.precioPremium}
              </p>
            </div>
          </button>
        </div>

        {/* Mensaje opcional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Mensaje (opcional)
          </label>
          <textarea
            {...register("mensaje")}
            rows={3}
            className="w-full rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-selva placeholder:text-green-700/60 shadow-sm transition-all duration-200 focus:border-dorado focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:outline-none resize-none min-h-120px"
            placeholder="Cuéntanos algo más sobre tu viaje..."
          />
        </div>

        <div ref={boletaRef} className="rounded-2xl border-2 border-green-200 bg-green-50 p-5 shadow-lg">
          <div className="mb-3 flex items-center justify-between border-b border-green-200 pb-2">
            <h3 className="font-titulo text-xl text-selva">Resumen de tu reserva</h3>
            <span className="rounded-full bg-dorado px-3 py-1 text-xs font-semibold uppercase text-selva">
              Pre-boleta
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Paquete</span>
              <span className="font-medium text-selva">{paquete.nombre}</span>
            </div>

            <div className="flex justify-between">
              <span>Plan</span>
              <span className="font-medium capitalize text-selva">{tipo}</span>
            </div>

            <div className="flex justify-between">
              <span>Personas</span>
              <span className="font-medium text-selva">{watch("numPersonas") || paquete.minPax}</span>
            </div>

            <div className="flex justify-between">
              <span>Precio por persona</span>
              <span className="font-medium text-selva">${precioSeleccionado} USD</span>
            </div>

            <div className="flex justify-between">
              <span>Fecha</span>
              <span className="font-medium text-selva">{watch("fechaTour") || "Sin seleccionar"}</span>
            </div>
          </div>

          <div className="mt-4 border-t border-green-200 pt-3 flex items-center justify-between">
            <span className="font-semibold text-selva">Total estimado</span>
            <span className="font-titulo text-3xl text-selva">
              $
              {precioSeleccionado *
                Number(watch("numPersonas") || paquete.minPax)}
              USD
            </span>
          </div>

        </div>
        
        <p className="mt-3 text-xs text-gray-500">
          Este resumen aparecerá en la boleta descargable de tu reserva.
        </p>

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