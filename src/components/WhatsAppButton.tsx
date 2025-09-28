import { Bot, MessageCircle, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5566996823277';
  
  const messages = {
    general: 'Olá! Gostaria de falar com o Agente IA da MMT sobre soluções inteligentes para meu negócio.',
    enterprise: 'Olá! Sou de uma empresa e gostaria de conhecer as soluções corporativas de IA da MMT.',
    entrepreneur: 'Olá! Sou empreendedor e quero saber como a MMT pode me ajudar a escalar meu negócio com IA.',
    influencer: 'Olá! Sou influenciador e gostaria de conhecer as soluções da MMT para monetizar minha audiência.'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = (messageType: keyof typeof messages) => {
    const message = encodeURIComponent(messages[messageType]);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setShowPulse(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-80 transform transition-all duration-300 animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Bot className="w-6 h-6 text-primary-teal mr-2" />
              <h3 className="font-bold text-gray-900">Agente IA MMT</h3>
            </div>
            <button
              onClick={toggleExpanded}
              className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar menu do WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Escolha a opção que melhor descreve você:
          </p>
          
          <div className="space-y-2">
            <button
              onClick={() => handleWhatsApp('general')}
              className="w-full flex items-center p-3 text-left bg-gradient-to-r from-primary-teal/10 to-secondary-mint/10 hover:from-primary-teal/20 hover:to-secondary-mint/20 rounded-xl transition-all duration-200 group"
              aria-label="Iniciar conversa geral sobre soluções de IA"
            >
              <MessageCircle className="w-5 h-5 text-primary-teal mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Conversa Geral</div>
                <div className="text-xs text-gray-600">Falar sobre soluções de IA</div>
              </div>
            </button>
            
            <button
              onClick={() => handleWhatsApp('enterprise')}
              className="w-full flex items-center p-3 text-left bg-gradient-to-r from-accent-pink/10 to-support-peach/10 hover:from-accent-pink/20 hover:to-support-peach/20 rounded-xl transition-all duration-200 group"
              aria-label="Falar sobre soluções corporativas para empresas"
            >
              <Bot className="w-5 h-5 text-accent-pink mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Sou Empresa</div>
                <div className="text-xs text-gray-600">Soluções corporativas</div>
              </div>
            </button>
            
            <button
              onClick={() => handleWhatsApp('entrepreneur')}
              className="w-full flex items-center p-3 text-left bg-gradient-to-r from-secondary-mint/10 to-primary-teal/10 hover:from-secondary-mint/20 hover:to-primary-teal/20 rounded-xl transition-all duration-200 group"
              aria-label="Conversar sobre soluções para empreendedores"
            >
              <Zap className="w-5 h-5 text-secondary-mint mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Sou Empreendedor</div>
                <div className="text-xs text-gray-600">Escalar meu negócio</div>
              </div>
            </button>
            
            <button
              onClick={() => handleWhatsApp('influencer')}
              className="w-full flex items-center p-3 text-left bg-gradient-to-r from-support-peach/10 to-accent-pink/10 hover:from-support-peach/20 hover:to-accent-pink/20 rounded-xl transition-all duration-200 group"
              aria-label="Falar sobre monetização para influenciadores"
            >
              <MessageCircle className="w-5 h-5 text-support-peach mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Sou Influenciador</div>
                <div className="text-xs text-gray-600">Monetizar audiência</div>
              </div>
            </button>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Agente IA online • Resposta em segundos
            </div>
          </div>
        </div>
      )}
      
      {/* Main Button */}
      <button
        onClick={toggleExpanded}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Falar com Agente IA"
      >
        {isExpanded ? (
          <X className="w-7 h-7 transition-transform duration-200" />
        ) : (
          <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
        )}
        
        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Fale com nosso Agente IA
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
        
        {/* Pulse animation */}
        {showPulse && !isExpanded && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        )}
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
          !
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;