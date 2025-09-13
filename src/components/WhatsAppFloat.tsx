import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://contate.me/5579988801082', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float animate-bounce-gentle"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  );
};

export default WhatsAppFloat;