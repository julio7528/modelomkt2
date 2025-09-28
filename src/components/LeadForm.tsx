import { AlertCircle, Brain, CheckCircle, Loader, TrendingUp, Users, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  role?: string;
  segment: 'empresa' | 'empreendedor' | 'influenciador';
  budget?: string;
  timeline?: string;
  challenges: string[];
  goals: string[];
  current_solution?: string;
  team_size?: string;
  monthly_revenue?: string;
  followers_count?: string;
  priority_service?: string;
}

const LeadForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSegment, setSelectedSegment] = useState<string>('');
  const [leadScore, setLeadScore] = useState(0);
  const [qualification, setQualification] = useState<'cold' | 'warm' | 'hot'>('cold');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<LeadFormData>();

  const watchedValues = watch();

  // Calcular score do lead automaticamente
  useEffect(() => {
    let score = 0;
    
    // Pontuação por segmento
    if (watchedValues.segment === 'empresa') score += 30;
    else if (watchedValues.segment === 'empreendedor') score += 20;
    else if (watchedValues.segment === 'influenciador') score += 15;

    // Pontuação por orçamento
    if (watchedValues.budget === 'acima-50k') score += 40;
    else if (watchedValues.budget === '20k-50k') score += 30;
    else if (watchedValues.budget === '5k-20k') score += 20;
    else if (watchedValues.budget === 'ate-5k') score += 10;

    // Pontuação por urgência
    if (watchedValues.timeline === 'imediato') score += 25;
    else if (watchedValues.timeline === '1-mes') score += 20;
    else if (watchedValues.timeline === '3-meses') score += 15;
    else if (watchedValues.timeline === '6-meses') score += 10;

    // Pontuação por desafios múltiplos
    if (watchedValues.challenges?.length >= 3) score += 15;
    else if (watchedValues.challenges?.length >= 2) score += 10;
    else if (watchedValues.challenges?.length >= 1) score += 5;

    setLeadScore(score);

    // Qualificação baseada no score
    if (score >= 80) setQualification('hot');
    else if (score >= 50) setQualification('warm');
    else setQualification('cold');
  }, [watchedValues]);

  const segments = [
    {
      id: 'empresa',
      title: 'Empresa',
      icon: Users,
      description: 'Soluções corporativas e escaláveis',
      color: 'from-primary-teal to-secondary-mint'
    },
    {
      id: 'empreendedor',
      title: 'Empreendedor',
      icon: TrendingUp,
      description: 'Automação para crescimento acelerado',
      color: 'from-accent-pink to-support-peach'
    },
    {
      id: 'influenciador',
      title: 'Influenciador',
      icon: Zap,
      description: 'Monetização e engajamento inteligente',
      color: 'from-support-peach to-accent-pink'
    }
  ];

  const challenges = {
    empresa: [
      'Baixa conversão de leads',
      'Atendimento manual demorado',
      'Falta de automação de marketing',
      'Dificuldade em escalar vendas',
      'Análise de dados limitada'
    ],
    empreendedor: [
      'Falta de tempo para marketing',
      'Orçamento limitado para equipe',
      'Dificuldade em gerar leads qualificados',
      'Processo de vendas desorganizado',
      'Competição acirrada no mercado'
    ],
    influenciador: [
      'Baixa conversão de seguidores em clientes',
      'Dificuldade em criar funis de venda',
      'Gestão manual de DMs e comentários',
      'Falta de estratégia de monetização',
      'Análise de performance limitada'
    ]
  };

  const goals = {
    empresa: [
      'Aumentar conversão em 200%+',
      'Automatizar 80% do atendimento',
      'Reduzir custo de aquisição',
      'Melhorar experiência do cliente',
      'Escalar operação sem aumentar equipe'
    ],
    empreendedor: [
      'Dobrar faturamento em 6 meses',
      'Automatizar processo de vendas',
      'Gerar leads qualificados 24/7',
      'Reduzir tempo gasto em tarefas manuais',
      'Competir com grandes players'
    ],
    influenciador: [
      'Monetizar audiência efetivamente',
      'Criar múltiplas fontes de renda',
      'Automatizar vendas de produtos/cursos',
      'Aumentar engajamento e conversão',
      'Profissionalizar operação'
    ]
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const leadData = {
        ...data,
        lead_score: leadScore,
        qualification: qualification,
        created_at: new Date().toISOString(),
        status: 'new'
      };

      const { error } = await supabase
        .from('leads')
        .insert([leadData]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      reset();
      setCurrentStep(1);
      setSelectedSegment('');
    } catch (error: any) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Erro ao enviar informações. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const selectSegment = (segment: string) => {
    setSelectedSegment(segment);
    setValue('segment', segment as any);
    nextStep();
  };

  const getQualificationColor = () => {
    switch (qualification) {
      case 'hot': return 'text-red-600 bg-red-50';
      case 'warm': return 'text-yellow-600 bg-yellow-50';
      case 'cold': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getQualificationLabel = () => {
    switch (qualification) {
      case 'hot': return 'Lead Quente 🔥';
      case 'warm': return 'Lead Morno ⚡';
      case 'cold': return 'Lead Frio ❄️';
      default: return 'Não Qualificado';
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-primary-teal mr-4" />
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Formulário <span className="text-primary-teal">Inteligente</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa IA analisa seu perfil e necessidades para criar a solução perfeita para você.
              Processo 100% personalizado e qualificação automática.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">Progresso</span>
              <span className="text-sm font-medium text-primary-teal">{currentStep}/3</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-teal to-secondary-mint h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Step 1: Segment Selection */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Qual é o seu perfil?
                  </h3>
                  <p className="text-gray-600">
                    Selecione a opção que melhor descreve você ou sua empresa
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {segments.map((segment) => {
                    const IconComponent = segment.icon;
                    return (
                      <button
                        key={segment.id}
                        type="button"
                        onClick={() => selectSegment(segment.id)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                          selectedSegment === segment.id
                            ? 'border-primary-teal bg-primary-teal/5'
                            : 'border-gray-200 hover:border-primary-teal/50'
                        }`}
                      >
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{segment.title}</h4>
                        <p className="text-gray-600 text-sm">{segment.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Detailed Information */}
            {currentStep === 2 && selectedSegment && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Conte-nos mais sobre você
                  </h3>
                  <p className="text-gray-600">
                    Essas informações nos ajudam a personalizar nossa proposta
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Nome é obrigatório' })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: 'E-mail é obrigatório' })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Telefone é obrigatório' })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                      placeholder="(66)99682-3277"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>

                  {/* Empresa/Canal */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {selectedSegment === 'influenciador' ? 'Canal/Perfil' : 'Empresa'}
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                      placeholder={selectedSegment === 'influenciador' ? '@seucanal' : 'Nome da empresa'}
                    />
                  </div>
                </div>

                {/* Orçamento */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Qual seu orçamento para investir em soluções de IA?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['ate-5k', '5k-20k', '20k-50k', 'acima-50k'].map((budget) => (
                      <label key={budget} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-teal transition-colors">
                        <input
                          type="radio"
                          value={budget}
                          {...register('budget')}
                          className="mr-2 text-primary-teal"
                        />
                        <span className="text-sm">
                          {budget === 'ate-5k' && 'Até R$ 5k'}
                          {budget === '5k-20k' && 'R$ 5k - 20k'}
                          {budget === '20k-50k' && 'R$ 20k - 50k'}
                          {budget === 'acima-50k' && 'Acima R$ 50k'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quando gostaria de implementar?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['imediato', '1-mes', '3-meses', '6-meses'].map((timeline) => (
                      <label key={timeline} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-teal transition-colors">
                        <input
                          type="radio"
                          value={timeline}
                          {...register('timeline')}
                          className="mr-2 text-primary-teal"
                        />
                        <span className="text-sm">
                          {timeline === 'imediato' && 'Imediato'}
                          {timeline === '1-mes' && 'Em 1 mês'}
                          {timeline === '3-meses' && 'Em 3 meses'}
                          {timeline === '6-meses' && 'Em 6 meses'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-primary-teal text-white rounded-lg hover:bg-primary-teal/90 transition-colors"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Challenges and Goals */}
            {currentStep === 3 && selectedSegment && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Seus desafios e objetivos
                  </h3>
                  <p className="text-gray-600">
                    Selecione os itens que mais se aplicam ao seu caso
                  </p>
                </div>

                {/* Challenges */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quais são seus principais desafios? (Selecione até 3)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {challenges[selectedSegment as keyof typeof challenges]?.map((challenge, index) => (
                      <label key={index} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-teal transition-colors">
                        <input
                          type="checkbox"
                          value={challenge}
                          {...register('challenges')}
                          className="mr-3 text-primary-teal"
                        />
                        <span className="text-sm">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quais são seus principais objetivos? (Selecione até 3)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {goals[selectedSegment as keyof typeof goals]?.map((goal, index) => (
                      <label key={index} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-teal transition-colors">
                        <input
                          type="checkbox"
                          value={goal}
                          {...register('goals')}
                          className="mr-3 text-primary-teal"
                        />
                        <span className="text-sm">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Lead Score Display */}
                {leadScore > 0 && (
                  <div className="bg-gradient-to-r from-primary-teal/10 to-secondary-mint/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">Análise Inteligente</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getQualificationColor()}`}>
                        {getQualificationLabel()}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-600 mr-2">Score do Lead:</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-gradient-to-r from-primary-teal to-secondary-mint h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(leadScore, 100)}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-primary-teal">{leadScore}/100</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Nossa IA analisou seu perfil e identificou alta compatibilidade com nossas soluções!
                    </p>
                  </div>
                )}

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-green-800 font-medium">Informações enviadas com sucesso!</p>
                      <p className="text-green-600 text-sm">Nossa equipe entrará em contato em breve com uma proposta personalizada.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <div>
                      <p className="text-red-800 font-medium">Erro ao enviar informações</p>
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-primary-teal to-secondary-mint text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Receber Proposta Personalizada'
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;