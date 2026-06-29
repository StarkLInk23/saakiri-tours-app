export default function WhatsAppButton() {
  const phone = "51987041617";
  const message = "Hola, quisiera información sobre sus tours.";

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full p-4 shadow-xl transition-transform duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
      >
        <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.737 5.57 2.136 7.995L0 32l7.82-2.09a15.93 15.93 0 008.18 2.29C24.836 32.2 32 25.036 32 16.2 32 7.364 24.836.396 16 .396zm0 29.09a13.1 13.1 0 01-6.67-1.82l-.48-.29-4.64 1.24 1.24-4.53-.31-.47a13.1 13.1 0 1110.86 5.87zm7.2-9.85c-.39-.2-2.31-1.14-2.67-1.27-.36-.13-.63-.2-.89.2-.26.39-1.02 1.27-1.25 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.14-1.95-1.16-1.04-1.95-2.33-2.18-2.72-.23-.39-.02-.6.17-.79.17-.17.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.89-2.14-1.22-2.93-.32-.77-.64-.67-.89-.68h-.76c-.26 0-.69.1-1.05.49-.36.39-1.38 1.35-1.38 3.3s1.41 3.84 1.61 4.1c.2.26 2.77 4.23 6.71 5.93.94.41 1.67.66 2.24.84.94.3 1.8.26 2.47.16.75-.11 2.31-.94 2.64-1.84.33-.91.33-1.69.23-1.84-.1-.16-.36-.26-.75-.46z"/>
      </svg>
    </a>
  );
}