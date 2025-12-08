import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import React from 'react';
import { scrollAnimationVariants, useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vídeo de fundo com overlay */}
      <div className="absolute inset-0 bg-[url('/conheca3.png')] bg-cover bg-center bg-no-repeat">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          aria-label="Vídeo de fundo mostrando tecnologia e inovação"
        >
          <source src="public\videohero.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        {/* Overlay escuro mais forte para melhor contraste */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Conteúdo */}
      <motion.div 
        ref={elementRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={scrollAnimationVariants.staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={scrollAnimationVariants.fadeInUp}
        >
          Transformamos <span className="text-[#FFACAC]">IA</span> em crescimento real
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={scrollAnimationVariants.fadeInUp}
        >
          Automação 24/7, presença digital que converte e decisões estratégicas sem complexidade
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={scrollAnimationVariants.fadeInUp}
        >
          <button 
            className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-xl"
            aria-label="Solicitar orçamento personalizado"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Faça seu Orçamento
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            aria-label="Veja nossos produtos e serviços"
            onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Produtos e Serviços
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8"
          variants={scrollAnimationVariants.fadeInUp}
        >
          <motion.div 
            className="text-center"
            variants={scrollAnimationVariants.staggerItem}
          >
            <div className="text-3xl font-bold mb-1" style={{color: '#E45A92'}}>20</div>
            <div className="text-white text-sm">Produtos e Serviços</div>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={scrollAnimationVariants.staggerItem}
          >
            <div className="text-3xl font-bold mb-1" style={{color: '#E45A92'}}>30</div>
            <div className="text-white text-sm">Projetos Entregues</div>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={scrollAnimationVariants.staggerItem}
          >
            <div className="text-3xl font-bold mb-1" style={{color: '#E45A92'}}>24h</div>
            <div className="text-white text-sm">Suporte Ativo</div>
          </motion.div>
        </motion.div>
 
        {/* Indicador de scroll */}
        <motion.div 
          className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce"
          variants={scrollAnimationVariants.fadeInUp}
        >
          <div className="w-6 h-10 border-2 border-white/90 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
