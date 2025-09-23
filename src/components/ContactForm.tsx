import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';
import type { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow/20 to-yellow/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-gray-600">
            Entre em contato e descubra como podemos acelerar seu negócio com IA
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { 
                  required: 'Nome é obrigatório',
                  minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' }
                })}
                className="w-full px-4 py-3 bg-tiffany-blue/10 border border-tiffany-blue/30 rounded-lg focus:ring-2 focus:ring-tiffany-blue focus:border-transparent transition-colors"
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full px-4 py-3 bg-tiffany-blue/10 border border-tiffany-blue/30 rounded-lg focus:ring-2 focus:ring-tiffany-blue focus:border-transparent transition-colors"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-4 py-3 bg-tiffany-blue/10 border border-tiffany-blue/30 rounded-lg focus:ring-2 focus:ring-tiffany-blue focus:border-transparent transition-colors"
              placeholder="(11) 99999-9999"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensagem *
            </label>
            <textarea
              id="message"
              rows={5}
              {...register('message', { 
                required: 'Mensagem é obrigatória',
                minLength: { value: 10, message: 'Mensagem deve ter pelo menos 10 caracteres' }
              })}
              className="w-full px-4 py-3 bg-tiffany-blue/10 border border-tiffany-blue/30 rounded-lg focus:ring-2 focus:ring-tiffany-blue focus:border-transparent transition-colors resize-none"
              placeholder="Digite sua mensagem aqui..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✅ Mensagem enviada com sucesso!</p>
              <p className="text-green-600 text-sm mt-1">Entraremos em contato em breve.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">❌ Erro ao enviar mensagem</p>
              <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-hot-pink hover:bg-hot-pink/90 disabled:bg-hot-pink/50 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02] disabled:scale-100"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;