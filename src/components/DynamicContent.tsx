import { ArrowRight, Bot, Brain, Calendar, Clock, Target, TrendingUp, User } from 'lucide-react';
import React, { useState } from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
}

const DynamicContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "Como a IA está Revolucionando o Marketing Digital em 2025",
      excerpt: "Descubra as principais tendências de inteligência artificial que estão transformando a forma como empresas se conectam com seus clientes.",
      content: "A inteligência artificial não é mais uma tecnologia do futuro - ela é o presente do marketing digital. Em 2025, vemos uma revolução completa na forma como as empresas se relacionam com seus clientes. Desde chatbots inteligentes até análise preditiva de comportamento, a IA está redefinindo as regras do jogo. As empresas que adotam essas tecnologias estão vendo aumentos de até 300% na conversão e 85% na satisfação do cliente.",
      author: "Equipe MMT",
      date: "15 Jan 2025",
      readTime: "5 min",
      category: "tendencias",
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-primary-teal to-secondary-mint"
    },
    {
      id: 2,
      title: "Agentes IA Multicanal: O Futuro do Atendimento ao Cliente",
      excerpt: "Entenda como os agentes de IA podem atender seus clientes 24/7 em múltiplas plataformas com eficiência superior ao atendimento humano.",
      content: "Os agentes IA multicanal representam a evolução natural do atendimento ao cliente. Capazes de operar simultaneamente no WhatsApp, Instagram, Facebook, site e telefone, esses agentes oferecem consistência e disponibilidade que o atendimento tradicional não consegue igualar. Nossa tecnologia permite que um único agente IA gerencie até 1000 conversas simultâneas, mantendo o contexto e a personalização em cada interação.",
      author: "Dr. IA MMT",
      date: "12 Jan 2025",
      readTime: "7 min",
      category: "tecnologia",
      icon: <Bot className="w-5 h-5" />,
      gradient: "from-accent-pink to-support-peach"
    },
    {
      id: 3,
      title: "ROI Comprovado: Cases de Sucesso com IA no Marketing",
      excerpt: "Análise detalhada de como nossos clientes alcançaram resultados extraordinários implementando soluções de IA em suas estratégias.",
      content: "Os números não mentem: empresas que implementam IA em suas estratégias de marketing veem resultados impressionantes. Um de nossos clientes do setor e-commerce aumentou suas vendas em 450% em apenas 6 meses. Outro cliente, uma startup de serviços, reduziu o custo de aquisição de clientes em 70% enquanto triplicou a taxa de conversão. Esses resultados são possíveis através da personalização em massa e automação inteligente.",
      author: "Analista MMT",
      date: "10 Jan 2025",
      readTime: "6 min",
      category: "casos",
      icon: <Target className="w-5 h-5" />,
      gradient: "from-secondary-mint to-primary-teal"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Artigos', count: articles.length },
    { id: 'tendencias', name: 'Tendências', count: articles.filter(a => a.category === 'tendencias').length },
    { id: 'tecnologia', name: 'Tecnologia', count: articles.filter(a => a.category === 'tecnologia').length },
    { id: 'casos', name: 'Cases de Sucesso', count: articles.filter(a => a.category === 'casos').length },
    { id: 'estrategia', name: 'Estratégia', count: articles.filter(a => a.category === 'estrategia').length }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-teal to-secondary-mint rounded-xl flex items-center justify-center mr-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary-teal to-secondary-mint bg-clip-text text-transparent">
                IA Insights
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conteúdo exclusivo sobre inteligência artificial, tendências de mercado e estratégias que realmente funcionam
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-teal to-secondary-mint text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-primary-teal/30'
              }`}
            >
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Article Header */}
              <div className={`h-2 bg-gradient-to-r ${article.gradient}`}></div>
              
              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${article.gradient} bg-opacity-10`}>
                    <div className={`text-transparent bg-gradient-to-r ${article.gradient} bg-clip-text`}>
                      {article.icon}
                    </div>
                    <span className={`text-xs font-semibold text-transparent bg-gradient-to-r ${article.gradient} bg-clip-text uppercase tracking-wide`}>
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-teal transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => handleReadMore(article)}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r ${article.gradient} text-white hover:shadow-lg transform hover:scale-105`}
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-teal to-secondary-mint rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quer implementar IA no seu negócio?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa equipe de especialistas está pronta para transformar sua empresa com soluções de IA personalizadas
            </p>
            <button className="bg-white text-primary-teal px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <Bot className="w-5 h-5" />
              <span>Falar com Especialista</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className={`h-2 bg-gradient-to-r ${selectedArticle.gradient}`}></div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${selectedArticle.gradient} bg-opacity-10`}>
                  <div className={`text-transparent bg-gradient-to-r ${selectedArticle.gradient} bg-clip-text`}>
                    {selectedArticle.icon}
                  </div>
                  <span className={`text-xs font-semibold text-transparent bg-gradient-to-r ${selectedArticle.gradient} bg-clip-text uppercase tracking-wide`}>
                    {categories.find(c => c.id === selectedArticle.category)?.name}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{selectedArticle.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedArticle.readTime} de leitura</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedArticle.content}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r ${selectedArticle.gradient} text-white hover:shadow-lg`}
                >
                  Fechar Artigo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DynamicContent;