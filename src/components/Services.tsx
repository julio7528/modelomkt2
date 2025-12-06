import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, Pause, Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { scrollAnimationVariants, useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const desktopImages = [
    "/prod1.png",
    "/prod2.png",
    "/prod3.png",
    "/prod4.png"
  ];

  const mobileImages = [
    "/serv1.png",
    "/serv2.png",
    "/serv3.png",
    "/serv4.png"
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.section 
      id="services" 
      className="py-20 bg-white"
      ref={elementRef}
      variants={scrollAnimationVariants.staggerContainer}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={scrollAnimationVariants.fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-brand-pink">Serviços Inteligentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transformamos o potencial da Inteligência Artificial em crescimento real, entregando automação que funciona 24/7, presença digital que converte e insights que guiam decisões estratégicas para empresas que querem evoluir sem complexidade.</p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div 
          className={`relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-16 group bg-gray-100 ${
            isMobile ? 'aspect-[9/16] max-h-[80vh]' : 'aspect-video'
          }`}
          variants={scrollAnimationVariants.fadeInUp}
        >
           <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover bg-white"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300 focus:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300 focus:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Controls & Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-4 z-10 bg-gradient-to-t from-black/50 to-transparent p-4">
            <button 
              onClick={togglePlay}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            
            <div className="flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-brand-pink w-6' : 'bg-white/50 hover:bg-white/80 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-brand-purple to-brand-purple-dark rounded-3xl p-8 lg:p-12 text-center text-white"
          variants={scrollAnimationVariants.fadeInUp}
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para revolucionar seu negócio?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como a IA pode
            transformar seus resultados em até 30 dias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-brand-purple hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white hover:bg-white hover:text-brand-purple px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              Ver Portfólio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;


