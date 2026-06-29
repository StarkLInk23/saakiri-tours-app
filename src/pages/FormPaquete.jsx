// Formulario único para CREAR y EDITAR paquetes (CRUD).
// Detecta si hay un :id en la URL: si existe, precarga los datos
// y llama a editarPaquete; si no, llama a agregarPaquete.

import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePaquetes } from "../context/PaquetesContext";
import { Loader } from "../components/Estado";
import { FaArrowLeft } from "react-icons/fa";

export default function FormPaquete() {
  const { id } = useParams(); // si existe, estamos editando
  const navigate = useNavigate();
  const { paquetes, cargando, agregarPaquete, editarPaquete } = usePaquetes();
  const esEdicion = Boolean(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      nombre: "",
      duracion: "",
      descripcion: "",
      precioBasico: "",
      precioPremium: "",
      minPax: 2,
      imagen: "",
      activo: true,
    },
  });

  // Si estamos editando, precargamos los datos del paquete una vez cargado el contexto
  useEffect(() => {
    if (esEdicion && !cargando) {
      const paquete = paquetes.find((p) => p.id === id);
      if (paquete) {
        reset({
          nombre: paquete.nombre,
          duracion: paquete.duracion,
          descripcion: paquete.descripcion,
          precioBasico: paquete.precioBasico,
          precioPremium: paquete.precioPremium,
          minPax: paquete.minPax,
          imagen: paquete.imagen,
          activo: paquete.activo,
        });
      }
    }
  }, [esEdicion, cargando, paquetes, id, reset]);

  if (cargando) return <Loader texto="Cargando datos..." />;

  async function onSubmit(datos) {
    const payload = {
      ...datos,
      precioBasico: Number(datos.precioBasico),
      precioPremium: Number(datos.precioPremium),
      minPax: Number(datos.minPax),
    };

    try {
      if (esEdicion) {
        await editarPaquete(id, payload);
      } else {
        await agregarPaquete(payload);
      }
      navigate("/admin");
    } catch {
      // El contexto ya muestra el SweetAlert de error
    }
  }

  return (
    <div className="max-w-xl">
      <Link
        to="/admin"
        className="flex items-center gap-2 text-sm text-selva mb-6 hover:text-dorado transition-colors"
      >
        <FaArrowLeft size={12} /> Volver al panel
      </Link>

      <h1 className="font-titulo text-3xl text-selva mb-6">
        {esEdicion ? "Editar paquete" : "Nuevo paquete"}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 shadow-sm space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nombre del paquete
          </label>
          <input
            type="text"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva"
            placeholder="Ej. Tour Aventura Extrema"
          />
          {errors.nombre && (
            <p className="text-red-600 text-xs mt-1">{errors.nombre.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Duración
          </label>
          <input
            type="text"
            {...register("duracion", { required: "La duración es obligatoria" })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva"
            placeholder="Ej. 2D / 1N"
          />
          {errors.duracion && (
            <p className="text-red-600 text-xs mt-1">{errors.duracion.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Descripción
          </label>
          <textarea
            rows={3}
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
            })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva resize-none"
            placeholder="Describe brevemente el tour..."
          />
          {errors.descripcion && (
            <p className="text-red-600 text-xs mt-1">
              {errors.descripcion.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Precio básico (USD)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("precioBasico", {
                required: "Obligatorio",
                min: { value: 0, message: "Debe ser positivo" },
              })}
              className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva"
            />
            {errors.precioBasico && (
              <p className="text-red-600 text-xs mt-1">
                {errors.precioBasico.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Precio premium (USD)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("precioPremium", {
                required: "Obligatorio",
                min: { value: 0, message: "Debe ser positivo" },
              })}
              className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva"
            />
            {errors.precioPremium && (
              <p className="text-red-600 text-xs mt-1">
                {errors.precioPremium.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Mínimo de personas
          </label>
          <input
            type="number"
            {...register("minPax", {
              required: "Obligatorio",
              min: { value: 1, message: "Mínimo 1" },
            })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva"
          />
          {errors.minPax && (
            <p className="text-red-600 text-xs mt-1">{errors.minPax.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            URL de la imagen
          </label>
          <input
            type="text"
            {...register("imagen", { required: "La imagen es obligatoria" })}
            className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva"
            placeholder="https://..."
          />
          {errors.imagen && (
            <p className="text-red-600 text-xs mt-1">{errors.imagen.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="activo"
            {...register("activo")}
            className="w-4 h-4"
          />
          <label htmlFor="activo" className="text-sm text-gray-700">
            Paquete visible en el catálogo público
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-selva text-white font-medium uppercase tracking-wider text-sm py-3.5 hover:bg-dorado hover:text-selva transition-colors disabled:opacity-60"
        >
          {isSubmitting
            ? "Guardando..."
            : esEdicion
            ? "Guardar cambios"
            : "Crear paquete"}
        </button>
      </form>
    </div>
  );
}
