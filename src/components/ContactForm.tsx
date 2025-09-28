import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { scrollAnimationVariants, useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';
import type { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { ref, isInView } = useScrollAnimation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      reset();
    } catch (error: any) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-support-cream/30 via-secondary-mint/20 to-primary-teal/20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollAnimationVariants.staggerContainer}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={scrollAnimationVariants.fadeInUp}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-teal to-secondary-mint rounded-full mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Entre em <span className="text-primary-teal">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar seu negócio com IA? Fale conosco e descubra 
              como podemos acelerar seus resultados em até 30 dias.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12"
            variants={scrollAnimationVariants.fadeInUp}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Nome */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <User className="w-4 h-4 mr-2 text-primary-teal" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { 
                      required: 'Nome é obrigatório',
                      minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' }
                    })}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-teal/5 to-secondary-mint/5 border-2 border-primary-teal/20 rounded-xl focus:ring-4 focus:ring-primary-teal/20 focus:border-primary-teal transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Digite seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Mail className="w-4 h-4 mr-2 text-secondary-mint" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                    className="w-full px-6 py-4 bg-gradient-to-r from-secondary-mint/5 to-primary-teal/5 border-2 border-secondary-mint/20 rounded-xl focus:ring-4 focus:ring-secondary-mint/20 focus:border-secondary-mint transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <Phone className="w-4 h-4 mr-2 text-accent-pink" />
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { 
                    required: 'Telefone é obrigatório',
                    pattern: {
                      value: /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/,
                      message: 'Formato de telefone inválido'
                    }
                  })}
                  className="w-full px-6 py-4 bg-gradient-to-r from-accent-pink/5 to-support-cream/5 border-2 border-accent-pink/20 rounded-xl focus:ring-4 focus:ring-accent-pink/20 focus:border-accent-pink transition-all duration-300 text-gray-900 placeholder-gray-500"
                  placeholder="(66)99682-3277"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <MessageSquare className="w-4 h-4 mr-2 text-support-cream" />
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { 
                    required: 'Mensagem é obrigatória',
                    minLength: { value: 10, message: 'Mensagem deve ter pelo menos 10 caracteres' }
                  })}
                  className="w-full px-6 py-4 bg-gradient-to-r from-support-cream/5 to-accent-pink/5 border-2 border-support-cream/20 rounded-xl focus:ring-4 focus:ring-support-cream/20 focus:border-support-cream transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-6 bg-gradient-to-r from-green-50 to-secondary-mint/10 border-2 border-green-200 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold text-lg">Mensagem enviada com sucesso!</p>
                      <p className="text-green-600 text-sm mt-1">Nossa equipe entrará em contato em breve.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-6 bg-gradient-to-r from-red-50 to-accent-pink/10 border-2 border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-lg">✕</span>
                    </div>
                    <div>
                      <p className="text-red-800 font-semibold text-lg">Erro ao enviar mensagem</p>
                      <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-primary-teal via-secondary-mint to-accent-pink hover:from-accent-pink hover:via-primary-teal hover:to-secondary-mint disabled:from-gray-300 disabled:to-gray-400 text-white font-bold text-lg rounded-full transition-all duration-500 transform hover:scale-105 disabled:scale-100 shadow-2xl hover:shadow-3xl disabled:shadow-none"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Ou entre em contato diretamente:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:contato@mmt.com.br" 
                className="flex items-center text-primary-teal hover:text-secondary-mint transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                contato@mmt.com.br
              </a>
              <a 
                href="tel:+5566996823277" 
                className="flex items-center text-accent-pink hover:text-primary-teal transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                (66)99682-3277
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;