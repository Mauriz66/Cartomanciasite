import { whatsappLinks } from "@/data/whatsapp-links";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLinks.contatoGeral}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}
