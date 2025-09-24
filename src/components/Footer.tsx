import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo e nome da empresa */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="https://technar.digital/public_img/LOGO1.png"
              alt="Agência Modelo Marketing Logo"
              className="h-24 w-auto"
            />
          </div>

          {/* Descrição */}
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sistemas, sites e aplicações com inteligência artificial para acelerar seus negócios
          </p>

          {/* Links de redes sociais */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-hot-pink hover:text-white group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </a>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-hot-pink hover:text-white group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-hot-pink hover:text-white group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Agência Modelo Marketing. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;