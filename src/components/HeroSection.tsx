import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20workspace%20with%20computers%20and%20technology%20equipment%2C%20professional%20business%20environment%2C%20clean%20and%20minimalist%20design%2C%20soft%20lighting%2C%20teal%20and%20pink%20color%20accents&image_size=landscape_16_9')`
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Estamos trabalhando para entregar o{' '}
          <span className="text-tiffany-blue">melhor</span> para você, e em{' '}
          <span className="text-mint">breve</span>, mais novidades.
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Uma nova agência focada em sistemas, sites e aplicações com{' '}
          <span className="text-yellow font-semibold">inteligência artificial</span>{' '}
          para acelerar seus negócios
        </p>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;