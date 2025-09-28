import { ArrowRight, CheckCircle, Globe, Instagram, MessageSquare, Zap } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, scrollAnimationVariants } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: "Sites Inteligentes com IA",
      description: "Websites que se adaptam ao comportamento do usuário, otimizam conversões automaticamente e oferecem experiências personalizadas.",
      features: [
        "Personalização automática de conteúdo",
        "Otimização de conversão em tempo real",
        "Chatbots integrados nativamente",
        "Analytics preditivos avançados"
      ],
      color: "primary-teal",
      bgColor: "bg-primary-teal/5",
      borderColor: "border-primary-teal/20"
    },
    {
      icon: MessageSquare,
      title: "Agentes IA Multicanal",
      description: "Assistentes virtuais que atendem seus clientes 24/7 em WhatsApp, Instagram, site e outros canais simultaneamente.",
      features: [
        "Atendimento 24/7 automatizado",
        "Integração com múltiplas plataformas",
        "Qualificação inteligente de leads",
        "Escalação automática para humanos"
      ],
      color: "secondary-mint",
      bgColor: "bg-secondary-mint/5",
      borderColor: "border-secondary-mint/20"
    },
    {
      icon: Instagram,
      title: "Landing Pages para Instagram",
      description: "Páginas de conversão otimizadas especificamente para tráfego do Instagram, com foco em mobile e alta conversão.",
      features: [
        "Design mobile-first otimizado",
        "Integração nativa com Instagram",
        "Formulários inteligentes adaptativos",
        "Pixels de conversão automáticos"
      ],
      color: "accent-pink",
      bgColor: "bg-accent-pink/5",
      borderColor: "border-accent-pink/20"
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Fluxos automatizados que nutrem leads, segmentam audiências e executam campanhas baseadas em comportamento.",
      features: [
        "Nutrição automática de leads",
        "Segmentação comportamental",
        "Campanhas trigger inteligentes",
        "ROI tracking automatizado"
      ],
      color: "support-cream",
      bgColor: "bg-support-cream/5",
      borderColor: "border-support-cream/20"
    }
  ];

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de IA que transformam sua presença digital
            e automatizam seus processos de marketing e vendas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={scrollAnimationVariants.staggerContainer}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className={`group ${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}
                variants={scrollAnimationVariants.staggerItem}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                    service.color === 'primary-teal' ? 'bg-primary-teal/10 group-hover:bg-primary-teal/20' :
                    service.color === 'secondary-mint' ? 'bg-secondary-mint/10 group-hover:bg-secondary-mint/20' :
                    service.color === 'accent-pink' ? 'bg-accent-pink/10 group-hover:bg-accent-pink/20' :
                    'bg-support-cream/10 group-hover:bg-support-cream/20'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      service.color === 'primary-teal' ? 'text-primary-teal' :
                      service.color === 'secondary-mint' ? 'text-secondary-mint' :
                      service.color === 'accent-pink' ? 'text-accent-pink' :
                      'text-support-cream'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-800 mb-6 leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-800">
                          <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${
                            service.color === 'primary-teal' ? 'text-primary-teal' :
                            service.color === 'secondary-mint' ? 'text-secondary-mint' :
                            service.color === 'accent-pink' ? 'text-accent-pink' :
                            'text-support-cream'
                          }`} />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`group/btn inline-flex items-center font-semibold transition-colors ${
                      service.color === 'primary-teal' ? 'text-primary-teal hover:text-primary-teal/80' :
                      service.color === 'secondary-mint' ? 'text-secondary-mint hover:text-secondary-mint/80' :
                      service.color === 'accent-pink' ? 'text-accent-pink hover:text-accent-pink/80' :
                      'text-support-cream hover:text-support-cream/80'
                    }`}>
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
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