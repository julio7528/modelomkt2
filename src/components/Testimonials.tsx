import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, DollarSign, Quote, Star, TrendingUp, Users } from 'lucide-react';
import React, { useState } from 'react';
import { scrollAnimationVariants, useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  const testimonials = [
    {
      name: "Julio Gomes",
      role: "Desenvolvedor",
      company: "Technar Digital Solutions",
      image: "https://technar.digital/public_img/Short%20Logo.png?prompt=professional%20businessman%20CEO%20portrait%2C%20confident%20smile%2C%20modern%20office%20background%2C%20business%20suit%2C%20corporate%20headshot&image_size=square",
      testimonial: "A MMT transformou nossa operação! O agente IA que desenvolvemos aumentou nossa conversão em e reduziu o tempo de resposta para segundos. Simplesmente transformador!",
      results: {
        metric1: { label: "Aumento em Conversões", value: "20%", icon: TrendingUp },
        metric2: { label: "Redução no Tempo de Resposta", value: "100%", icon: Users },
        metric3: { label: "ROI em 10 meses", value: "100%", icon: DollarSign }
      },
      category: "Empresa"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <motion.section 
      id="depoimentos" 
      className="py-20 bg-white"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollAnimationVariants.staggerContainer}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={scrollAnimationVariants.fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Casos de <span className="text-primary-teal">Sucesso Reais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos clientes transformaram seus negócios com nossas soluções de IA.
            Resultados comprovados, histórias inspiradoras.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={scrollAnimationVariants.fadeInUp}
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Content */}
              <motion.div 
                className="p-8 lg:p-12"
                variants={scrollAnimationVariants.fadeInLeft}
              >
                <div className="flex items-center mb-6">
                  <span className="bg-primary-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {current.category}
                  </span>
                  <div className="flex ml-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="w-12 h-12 text-primary-teal/20 mb-6" />
                
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{current.testimonial}"
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                    <p className="text-gray-600">{current.role}</p>
                    <p className="text-primary-teal font-semibold">{current.company}</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Results */}
              <motion.div 
                className="bg-gradient-to-br from-primary-teal to-secondary-mint p-8 lg:p-12 text-white"
                variants={scrollAnimationVariants.fadeInRight}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
                  Resultados Alcançados
                </h3>

                <div className="space-y-6">
                  {Object.values(current.results).map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={index} className="flex items-center bg-white/10 rounded-2xl p-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold mb-1">{result.value}</div>
                          <div className="text-white/80 text-sm">{result.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-white text-primary-teal hover:bg-gray-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Ver Case Completo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <motion.div 
            className="flex justify-center items-center mt-8 space-x-4"
            variants={scrollAnimationVariants.fadeInUp}
          >
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-primary-teal hover:bg-primary-teal/90 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary-teal scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-primary-teal hover:bg-primary-teal/90 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
      </div>
    </motion.section>
  );
};

export default Testimonials;