// src/pages/AdminPaquetes.jsx
//
// Panel administrativo: tabla con todos los paquetes (activos e inactivos)
// y acciones de editar / eliminar. El "activo" se puede togglear directo
// desde la tabla para simular publicar/despublicar un paquete.

import { Link } from "react-router-dom";
import { usePaquetes } from "../context/PaquetesContext";
import { Loader, ErrorMensaje } from "../components/Estado";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function AdminPaquetes() {
  const { paquetes, cargando, error, recargar, borrarPaquete, editarPaquete } =
    usePaquetes();

  if (cargando) return <Loader texto="Cargando panel administrativo..." />;
  if (error) return <ErrorMensaje mensaje={error} onReintentar={recargar} />;

  async function toggleActivo(paquete) {
    await editarPaquete(paquete.id, { ...paquete, activo: !paquete.activo });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-titulo text-3xl text-selva">
            Gestión de Paquetes
          </h1>
          <p className="text-sm text-gray-500">
            {paquetes.length} paquete{paquetes.length !== 1 && "s"} registrado
            {paquetes.length !== 1 && "s"}
          </p>
        </div>
        <Link
          to="/admin/nuevo"
          className="flex items-center gap-2 bg-selva text-white text-sm font-medium uppercase tracking-wider px-5 py-2.5 hover:bg-dorado hover:text-selva transition-colors"
        >
          <FaPlus size={12} /> Nuevo paquete
        </Link>
      </div>

      <div className="bg-white shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-selva text-white text-left">
              <th className="px-4 py-3">Paquete</th>
              <th className="px-4 py-3">Duración</th>
              <th className="px-4 py-3 text-center">Básico</th>
              <th className="px-4 py-3 text-center">Premium</th>
              <th className="px-4 py-3 text-center">Min. pax</th>
              <th className="px-4 py-3 text-center">Estado</th>
              <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paquetes.map((p, i) => (
              <tr
                key={p.id}
                className={`border-b border-gray-100 ${
                  i % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3 font-medium text-selva">
                  {p.nombre}
                </td>
                <td className="px-4 py-3 text-gray-500">{p.duracion}</td>
                <td className="px-4 py-3 text-center">${p.precioBasico}</td>
                <td className="px-4 py-3 text-center">${p.precioPremium}</td>
                <td className="px-4 py-3 text-center">{p.minPax}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => toggleActivo(p)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      p.activo
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {p.activo ? "Activo" : "Inactivo"}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      to={`/admin/editar/${p.id}`}
                      className="text-selva hover:text-dorado transition-colors"
                      title="Editar"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => borrarPaquete(p.id, p.nombre)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Eliminar"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {paquetes.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No hay paquetes registrados todavía.
          </p>
        )}
      </div>
    </div>
  );
}
