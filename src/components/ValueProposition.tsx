import { AnimatePresence, motion } from 'framer-motion';
import { Award, Bot, ChevronRight, Cpu, FileBarChart, Headset, Phone, Rocket, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { scrollAnimationVariants, useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedPrice: React.FC = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 relative overflow-hidden min-w-[120px]">
      <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.span
            key="price1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 font-bold text-2xl text-gray-900"
          >
            R$ 00.000,00
          </motion.span>
        ) : (
          <motion.span
            key="price2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 font-bold text-2xl text-gray-900"
          >
            R$ 99.000,00
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

interface InteractiveCardProps {
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  image: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  icon: IconComponent,
  title,
  subtitle,
  description,
  features,
  color,
  gradient,
  image
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
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center w-16 h-16 bg-white/50 backdrop-blur-sm rounded-full mb-4 mx-auto shadow-lg">
            <IconComponent className="w-8 h-8 text-white drop-shadow-sm" />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{title}</h3>
          <p className="text-sm text-center text-white/95 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{subtitle}</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <p className="text-gray-900 text-center leading-relaxed mb-6 font-medium text-base h-[8.2rem] overflow-hidden">
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

  const featuresList = [
    { icon: Headset, text: "Agente de Suporte 24/7" },
    { icon: Cpu, text: "Equipe Técnica Exclusiva MMT" },
    { icon: Bot, text: "Agentes de IA Personalizados" },
    { icon: Rocket, text: "Automação de processos" },
    { icon: FileBarChart, text: "Relatórios Personalizados" },
    { icon: Phone, text: "Seu CRM ou SAAS com Controle Total" }
  ];

  return (
    <>
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
          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">Democratizamos IA de verdade para revolucionar negócios e tornar automação inteligente acessível a quem quer transformar presença digital em crescimento real.</p>
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
            image="/conheca3.png"
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
            image="/conheca2.png"
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
            image="/conheca1.png"
          />
        </motion.div>
      </div>
    </motion.section>

        {/* Performance Section - New Dark Mode Layout */}
        <motion.section 
          className="bg-black w-full overflow-hidden py-12 lg:py-20 px-6 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimationVariants.fadeInUp}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Mockup */}
            <div className="relative flex justify-center items-center">
              {/* Phone Mockup Container */}
              <div className="relative z-10 w-64 sm:w-72 md:w-80 h-[550px] bg-gray-900 rounded-[2rem] border-8 border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Screen Content */}
                <div className="w-full h-full relative flex flex-col items-center">
                   <video 
                      src="/DIF.mp4" 
                      className="absolute inset-0 w-full h-full object-cover"
                      muted 
                      autoPlay 
                      loop 
                      playsInline
                   />
                   {/* Status Bar Overlay */}
                   <div className="w-full flex justify-between px-4 pt-4 mb-4 relative z-10">
                      <div className="text-xs text-white font-medium">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              
              {/* Card 1: Top Left - Price */}
              <motion.div 
                className="absolute top-10 -left-4 sm:left-0 md:-left-8 bg-white rounded-2xl shadow-2xl p-4 z-20 max-w-[160px] sm:max-w-[180px]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">📈</span>
                  <span className="text-xs text-gray-500 font-medium">Total</span>
                </div>
                <AnimatedPrice />
              </motion.div>
              
              {/* Card 2: Middle Right - Graph */}
              <motion.div 
                className="absolute top-1/3 -right-4 sm:right-0 md:-right-8 bg-white rounded-2xl shadow-2xl p-4 z-20 max-w-[180px]"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
                <p className="font-semibold text-gray-900 text-sm mb-2">Aumente suas vendas</p>
                <div className="h-16 w-full bg-blue-50 rounded-lg p-2 relative overflow-hidden">
                   <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                     <path d="M0 35 L20 25 L40 30 L60 15 L80 20 L100 5" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M0 35 L20 25 L40 30 L60 15 L80 20 L100 5 L100 40 L0 40 Z" fill="url(#gradient)" opacity="0.2" />
                     <defs>
                       <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" stopColor="#3B82F6" />
                         <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                       </linearGradient>
                     </defs>
                   </svg>
                </div>
              </motion.div>
              
              {/* Card 3: Bottom Left - Coupon */}
              <motion.div 
                className="absolute bottom-20 -left-2 sm:left-4 md:-left-4 bg-white rounded-2xl shadow-2xl p-4 z-20"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
              >
                <p className="text-xs text-gray-500 mb-1">Gere seus cupons</p>
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100 border-dashed">
                  <span className="text-lg">🎫</span>
                  <span className="font-bold text-blue-600 text-sm">PRIMEIRACOMPRA</span>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Content */}
            <div>
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
                variants={scrollAnimationVariants.fadeInUp}
              >
                Nossos Diferenciais
              </motion.h2>
              <motion.p 
                className="text-gray-400 text-lg lg:text-xl mb-8 font-normal"
                variants={scrollAnimationVariants.fadeInUp}
              >
                Entregamos automação inteligente que funciona 24/7 e sites que convertem, com resultados reais que você pode medir.
              </motion.p>
              
              <motion.ul 
                className="space-y-5 mb-10"
                variants={scrollAnimationVariants.staggerContainer}
              >
                {featuresList.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    variants={scrollAnimationVariants.staggerItem}
                  >
                    <div className="bg-white/70 p-1 rounded-full mt-0.5 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-[#5d2f77] flex-shrink-0" strokeWidth={3} />
                    </div>
                    <span className="text-white text-lg font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.button 
                className="bg-primary-teal hover:bg-primary-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                variants={scrollAnimationVariants.fadeInUp}
                whileHover={{ scale: 1.05, backgroundColor: "#00b8a9", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                whileTap={{ scale: 0.98 }}
              >
                conheça mais
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.section>
    </>
  );
};

export default ValueProposition;
