import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre o evento ACAMP\'S';
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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