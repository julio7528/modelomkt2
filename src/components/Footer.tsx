import { Award, Bot, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Users, Zap } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="">
                <img src="https://technar.digital/public_img/LOGO3.png" alt="MMT" className="w-10 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent-pink">
                  MMT
                </h3>
                <p className="text-sm text-gray-400">Modelo Marketing Top</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transformamos negócios com inteligência artificial de verdade. 
              Soluções personalizadas que geram resultados reais e mensuráveis.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-primary-teal" />
                contato@modelomarketing.top
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-secondary-mint" />
                (66)99682-3277
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-accent-pink" />
                Mato Grosso - Brasil
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-teal transition-colors duration-200 text-sm flex items-center">
                  <Bot className="w-3 h-3 mr-2" />
                  Sites com IA
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary-mint transition-colors duration-200 text-sm flex items-center">
                  <Zap className="w-3 h-3 mr-2" />
                  Agentes Multicanal
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-pink transition-colors duration-200 text-sm flex items-center">
                  <Users className="w-3 h-3 mr-2" />
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-support-peach transition-colors duration-200 text-sm flex items-center">
                  <Award className="w-3 h-3 mr-2" />
                  Automação IA
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-teal transition-colors duration-200 text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-secondary-mint transition-colors duration-200 text-sm">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#segmentation" className="text-gray-300 hover:text-accent-pink transition-colors duration-200 text-sm">
                  Nossos Clientes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-support-peach transition-colors duration-200 text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Social Media & Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://instagram.com/mmt.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-accent-pink to-support-peach rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              
              <a
                href="https://linkedin.com/company/mmt-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-primary-teal to-secondary-mint rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              
              <a
                href="https://facebook.com/mmt.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-secondary-mint to-primary-teal rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              
              <a
                href="https://twitter.com/mmt_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-support-peach to-accent-pink rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © 2025 MMT - Modelo Marketing Top. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs">
                Desenvolvido com ❤️ e muito ☕ pela equipe MMT
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-teal via-secondary-mint via-accent-pink to-support-peach"></div>
    </footer>
  );
};

export default Footer;