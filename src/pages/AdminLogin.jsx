// src/pages/AdminLogin.jsx
//
// Página de inicio de sesión para el panel administrativo.
// Usa React Hook Form para validar campos, y el AuthContext
// para verificar las credenciales (simuladas).

import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";
import { FaLeaf, FaArrowLeft } from "react-icons/fa";

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Si el usuario venía de una ruta protegida (ej. /admin/nuevo),
  // lo regresamos ahí después de loguearse. Si no, va a /admin.
  const destino = location.state?.from || "/admin";

  async function onSubmit(datos) {
    const exito = login(datos.usuario, datos.password);

    if (exito) {
      navigate(destino, { replace: true });
    } else {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "El usuario o la contraseña no son válidos.",
        confirmButtonColor: "#2d5016",
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-crema px-5">
      <div className="w-full max-w-sm">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-selva mb-8 hover:text-dorado transition-colors"
        >
          <FaArrowLeft size={12} /> Volver al sitio público
        </Link>

        <div className="bg-white p-8 shadow-sm border border-dorado-light">
          <div className="flex items-center gap-2 justify-center mb-6">
            <FaLeaf className="text-dorado" />
            <span className="font-titulo text-xl text-selva">
              Acceso administrativo
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Usuario
              </label>
              <input
                type="text"
                autoComplete="username"
                {...register("usuario", { required: "Ingresa tu usuario" })}
                className="w-full border border-gray-300 px-4 py-2.5 focus:outline-none focus:border-selva transition-colors"
                placeholder="admin"
              />
              {errors.usuario && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.usuario.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={mostrarPassword ? "text" : "password"}
                  autoComplete="current-password"
                  {...register("password", { required: "Ingresa tu contraseña" })}
                  className="w-full border border-gray-300 px-4 py-2.5 pr-16 focus:outline-none focus:border-selva transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setMostrarPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-selva"
                >
                  {mostrarPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-selva text-white font-medium uppercase tracking-wider text-sm py-3 hover:bg-dorado hover:text-selva transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Verificando..." : "Iniciar sesión"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Acceso exclusivo para el personal de Sáakiri Tours &amp; Travel.
        </p>
      </div>
    </div>
  );
}
