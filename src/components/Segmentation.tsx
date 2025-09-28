import { ArrowRight, Building2, CheckCircle, Star, TrendingUp, User } from 'lucide-react';
import React, { useState } from 'react';
import { useCountAnimation } from '../hooks/useCountAnimation';

const Segmentation: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  // Hooks para animação de contagem
  const sitesCount = useCountAnimation({ end: 15, duration: 2000 });
  const botsCount = useCountAnimation({ end: 10, duration: 2000 });
  const automationsCount = useCountAnimation({ end: 250, duration: 2500 });

  const segments = [
    {
      id: 'empresa',
      icon: Building2,
      title: 'Empresas',
      subtitle: 'Corporações e PMEs',
      description: 'Soluções escaláveis para empresas que buscam automatizar processos e aumentar a eficiência operacional.',
      color: 'primary-teal',
      bgGradient: 'from-primary-teal to-primary-teal/80',
      needs: [
        'Automatização de processos internos',
        'Sistemas de CRM inteligentes',
        'Dashboards analíticos avançados',
        'Integração com ferramentas existentes'
      ],
      solutions: [
        'Plataformas corporativas com IA',
        'Automação de workflows',
        'Business Intelligence personalizado',
        'Suporte técnico especializado'
      ],
      cta: 'Agendar Demonstração Corporativa'
    },
    {
      id: 'empreendedor',
      icon: User,
      title: 'Empreendedores',
      subtitle: 'Startups e Negócios Digitais',
      description: 'Ferramentas inteligentes para empreendedores que querem escalar rapidamente com recursos otimizados.',
      color: 'secondary-mint',
      bgGradient: 'from-secondary-mint to-secondary-mint/80',
      needs: [
        'Validação rápida de ideias',
        'Automação de marketing',
        'Gestão eficiente de leads',
        'Crescimento com baixo custo'
      ],
      solutions: [
        'MVPs com IA integrada',
        'Funis de conversão automatizados',
        'Chatbots para atendimento',
        'Analytics de crescimento'
      ],
      cta: 'Começar Meu Projeto'
    },
    {
      id: 'influenciador',
      icon: Star,
      title: 'Influenciadores',
      subtitle: 'Criadores de Conteúdo',
      description: 'Soluções personalizadas para influenciadores monetizarem sua audiência e automatizarem vendas.',
      color: 'accent-pink',
      bgGradient: 'from-accent-pink to-accent-pink/80',
      needs: [
        'Monetização da audiência',
        'Gestão de múltiplas plataformas',
        'Automação de vendas',
        'Análise de engajamento'
      ],
      solutions: [
        'Landing pages de conversão',
        'Sistemas de afiliados',
        'Automação para redes sociais',
        'Dashboards de performance'
      ],
      cta: 'Potencializar Minha Marca'
    }
  ];

  const currentSegment = segments[activeSegment];
  const IconComponent = currentSegment.icon;

  return (
    <section id="publicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Soluções para <span className="text-primary-teal">Cada Perfil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entendemos que cada negócio tem necessidades únicas.
            Nossas soluções são personalizadas para seu perfil específico.
          </p>
        </div>

        {/* Segment Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-8 space-y-4 lg:space-y-0 lg:space-x-4">
          {segments.map((segment, index) => {
            const TabIcon = segment.icon;
            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(index)}
                className={`group flex items-center justify-center lg:justify-start px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeSegment === index
                    ? `text-white shadow-lg ${
                        segment.color === 'primary-teal' ? 'bg-primary-teal' :
                        segment.color === 'secondary-mint' ? 'bg-secondary-mint' :
                        'bg-accent-pink'
                      }`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <TabIcon className={`w-6 h-6 mr-3 ${
                  activeSegment === index ? 'text-white' : 
                    segment.color === 'primary-teal' ? 'text-primary-teal' :
                    segment.color === 'secondary-mint' ? 'text-secondary-mint' :
                    'text-accent-pink'
                }`} />
                <div className="text-left">
                  <div className="font-bold">{segment.title}</div>
                  <div className={`text-sm ${
                    activeSegment === index ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {segment.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Segment Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className={`bg-gradient-to-r ${currentSegment.bgGradient} p-8 lg:p-12 text-white`}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                  {currentSegment.title}
                </h3>
                <p className="text-xl opacity-90">
                  {currentSegment.subtitle}
                </p>
              </div>
            </div>
            <p className="text-xl leading-relaxed opacity-95">
              {currentSegment.description}
            </p>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Necessidades */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className={`w-6 h-6 mr-3 ${
                    currentSegment.color === 'primary-teal' ? 'text-primary-teal' :
                    currentSegment.color === 'secondary-mint' ? 'text-secondary-mint' :
                    'text-accent-pink'
                  }`} />
                  Suas Necessidades
                </h4>
                <ul className="space-y-4">
                  {currentSegment.needs.map((need, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        currentSegment.color === 'primary-teal' ? 'text-primary-teal' :
                        currentSegment.color === 'secondary-mint' ? 'text-secondary-mint' :
                        'text-accent-pink'
                      }`} />
                      <span className="text-gray-700">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Soluções */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <IconComponent className={`w-6 h-6 mr-3 ${
                    currentSegment.color === 'primary-teal' ? 'text-primary-teal' :
                    currentSegment.color === 'secondary-mint' ? 'text-secondary-mint' :
                    'text-accent-pink'
                  }`} />
                  Nossas Soluções
                </h4>
                <ul className="space-y-4">
                  {currentSegment.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        currentSegment.color === 'primary-teal' ? 'text-primary-teal' :
                        currentSegment.color === 'secondary-mint' ? 'text-secondary-mint' :
                        'text-accent-pink'
                      }`} />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <button className={`group text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto shadow-lg hover:shadow-xl ${
                currentSegment.color === 'primary-teal' ? 'bg-primary-teal hover:bg-primary-teal/90' :
                currentSegment.color === 'secondary-mint' ? 'bg-secondary-mint hover:bg-secondary-mint/90' :
                'bg-accent-pink hover:bg-accent-pink/90'
              }`}>
                {currentSegment.cta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center" ref={sitesCount.ref}>
            <div className="text-4xl font-bold text-primary-teal mb-2">{sitesCount.count}+</div>
            <div className="text-gray-600">Sites Construidos</div>
          </div>
          <div className="text-center" ref={botsCount.ref}>
            <div className="text-4xl font-bold text-secondary-mint mb-2">{botsCount.count}+</div>
            <div className="text-gray-600">Agentes de Bot</div>
          </div>
          <div className="text-center" ref={automationsCount.ref}>
            <div className="text-4xl font-bold text-accent-pink mb-2">{automationsCount.count}+</div>
            <div className="text-gray-600">Automações de Processos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segmentation;