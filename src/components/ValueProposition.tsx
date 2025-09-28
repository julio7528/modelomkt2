import { motion } from 'framer-motion';
import { Award, ChevronRight, Rocket, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { scrollAnimationVariants, useScrollAnimation } from '../hooks/useScrollAnimation';

interface InteractiveCardProps {
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  icon: IconComponent,
  title,
  subtitle,
  description,
  features,
  color,
  gradient
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
      variants={scrollAnimationVariants.staggerItem}
    >
      {/* Header com overlay mais escuro para melhor contraste */}
      <div className={`bg-gradient-to-br ${gradient} p-6 text-white relative overflow-hidden`}>
        {/* Overlay escuro para melhor contraste do texto */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20technology%20pattern%2C%20neural%20network%2C%20digital%20connections%2C%20minimalist%20design&image_size=square')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full mb-4 mx-auto shadow-lg">
            <IconComponent className="w-8 h-8 text-white drop-shadow-sm" />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-white drop-shadow-sm">{title}</h3>
          <p className="text-sm text-center text-white/95 font-medium drop-shadow-sm">{subtitle}</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <p className="text-gray-900 text-center leading-relaxed mb-6 font-medium text-base">
          {description}
        </p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r ${gradient} text-white hover:shadow-lg transform hover:scale-105 shadow-md relative overflow-hidden`}
        >
          {/* Overlay para melhor contraste do botão */}
          <div className="absolute inset-0 bg-black/10"></div>
          <span className="relative z-10 drop-shadow-sm">{isExpanded ? 'Ver Menos' : 'Saiba Mais'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 relative z-10 drop-shadow-sm ${isExpanded ? 'rotate-90' : ''}`} />
        </button>

        {/* Conteúdo expandido */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-6' : 'max-h-0'}`}>
          <div className="space-y-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-900 font-medium">
                  <div className={`w-2 h-2 bg-primary-teal rounded-full flex-shrink-0`}></div>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const ValueProposition: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section 
      id="sobre" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
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
            Conheça a <span className="text-brand-pink">MMT</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
            Somos especialistas em transformação digital com inteligência artificial,
            criando soluções que realmente fazem a diferença no seu negócio.
          </p>
        </motion.div>

        {/* Cards Interativos */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          variants={scrollAnimationVariants.staggerContainer}
        >
          <InteractiveCard
            icon={Rocket}
            title="O que fazemos"
            subtitle="Soluções Inteligentes"
            description="Criamos experiências digitais únicas com IA que automatizam processos, qualificam leads e aumentam conversões de forma inteligente."
            features={[
              "Automação de Marketing com IA",
              "Chatbots Inteligentes",
              "Análise Preditiva de Dados",
              "Personalização em Tempo Real"
            ]}
            color="primary-teal"
            gradient="from-brand-pink to-brand-purple"
          />
          
          <InteractiveCard
            icon={Sparkles}
            title="Como impressionamos"
            subtitle="Resultados Excepcionais"
            description="Entregamos resultados que superam expectativas através de estratégias data-driven e tecnologia de ponta."
            features={[
              "Aumente seu ROI",
              "Redução no tempo de resposta",
              "Aumento de em leads qualificados",
              "Automação dos processos"
            ]}
            color="secondary-mint"
            gradient="from-brand-purple to-brand-purple-dark"
          />
          
          <InteractiveCard
            icon={Award}
            title="O que valorizamos"
            subtitle="Nossos Princípios"
            description="Nossos valores guiam cada decisão e garantem que sempre entreguemos o melhor para nossos clientes."
            features={[
              "Transparência Total",
              "Inovação Constante",
              "Foco em Resultados",
              "Parceria Verdadeira"
            ]}
            color="accent-pink"
            gradient="from-brand-purple-dark to-brand-pink"
          />
        </motion.div>

        {/* Diferenciais */}
        <motion.div 
          className="bg-gradient-to-r from-brand-purple-dark via-brand-purple to-brand-purple-dark rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          variants={scrollAnimationVariants.fadeInUp}
        >
          {/* Overlay para melhor contraste */}
          <div className="absolute inset-0 bg-black/15"></div>
          
          <div className="relative z-10">
            <motion.div 
              className="text-center mb-12"
              variants={scrollAnimationVariants.fadeInUp}
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-pink-light drop-shadow-sm">
                Por que escolher a MMT?
              </h3>
              <p className="text-xl text-white/95 max-w-2xl mx-auto font-medium drop-shadow-sm">
                Nossos diferenciais fazem toda a diferença nos seus resultados
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={scrollAnimationVariants.staggerContainer}
            >
              <motion.div 
                className="text-center"
                variants={scrollAnimationVariants.staggerItem}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/25 backdrop-blur-sm rounded-full mb-4 mx-auto shadow-lg">
                  <Zap className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-brand-pink-light drop-shadow-sm">IA Avançada</h4>
                <p className="text-white/95 font-medium drop-shadow-sm">
                  Utilizamos as mais recentes tecnologias de inteligência artificial
                  para criar soluções verdadeiramente inteligentes.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                variants={scrollAnimationVariants.staggerItem}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/25 backdrop-blur-sm rounded-full mb-4 mx-auto shadow-lg">
                  <Users className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-brand-pink-light drop-shadow-sm">Atendimento 24/7</h4>
                <p className="text-white/95 font-medium drop-shadow-sm">
                  Suporte contínuo com agentes IA e especialistas humanos
                  sempre disponíveis para ajudar.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                variants={scrollAnimationVariants.staggerItem}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/25 backdrop-blur-sm rounded-full mb-4 mx-auto shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-brand-pink-light drop-shadow-sm">Resultados Garantidos</h4>
                <p className="text-white/95 font-medium drop-shadow-sm">
                  Compromisso com métricas reais e ROI comprovado
                  em todos os nossos projetos.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ValueProposition;