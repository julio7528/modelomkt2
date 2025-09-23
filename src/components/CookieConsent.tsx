import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { useCookieConsent } from '../hooks/useCookieConsent';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { hasConsented, acceptCookies, declineCookies, isLoading } = useCookieConsent();

  useEffect(() => {
    if (!isLoading && !hasConsented) {
      // Mostrar o banner após um pequeno delay para melhor UX
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, [isLoading, hasConsented]);

  const handleAccept = () => {
    acceptCookies();
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleDecline = () => {
    declineCookies();
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div
        className={`
          bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700
          max-w-md w-full p-6 pointer-events-auto
          transform transition-all duration-300 ease-out
          ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-hot-pink" />
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">
              Cookies
            </h3>
          </div>
          <button
            onClick={handleDecline}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Utilizamos cookies para melhorar sua experiência em nosso site, 
            personalizar conteúdo e analisar nosso tráfego. Ao continuar navegando, 
            você concorda com nossa{' '}
            <a 
              href="#" 
              className="text-hot-pink hover:text-hot-pink/80 underline font-medium"
            >
              Política de Privacidade
            </a>.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="
              flex-1 bg-hot-pink text-white font-display font-semibold py-3 px-4 rounded-lg
              hover:bg-hot-pink/90 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-hot-pink focus:ring-offset-2
            "
          >
            Aceitar Cookies
          </button>
          <button
            onClick={handleDecline}
            className="
              flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
              font-display font-semibold py-3 px-4 rounded-lg
              hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
            "
          >
            Recusar
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Você pode alterar suas preferências a qualquer momento nas configurações do navegador.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;