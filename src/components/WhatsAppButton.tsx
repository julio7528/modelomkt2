import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Agência Modelo Marketing.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-mint hover:bg-mint/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-mint animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppButton;