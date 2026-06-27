// src/components/Estado.jsx
//
// Componentes pequeños para estados de carga y error,
// reutilizados en Catálogo, Detalle y Admin.

export function Loader({ texto = "Cargando..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <div className="w-10 h-10 border-4 border-[var(--color-dorado-light)] border-t-[var(--color-selva)] rounded-full animate-spin" />
      <p className="text-sm text-gray-500">{texto}</p>
    </div>
  );
}

export function ErrorMensaje({ mensaje, onReintentar }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center px-5">
      <p className="text-red-600 font-medium">{mensaje}</p>
      {onReintentar && (
        <button
          onClick={onReintentar}
          className="bg-[var(--color-selva)] text-white text-sm uppercase tracking-wider px-5 py-2 hover:bg-[var(--color-dorado)] hover:text-[var(--color-selva)] transition-colors"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}
