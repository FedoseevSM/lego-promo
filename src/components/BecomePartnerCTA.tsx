import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react';
const benefits = ['20% комиссия с каждой продажи', 'Еженедельные выплаты через PayPal или Stripe', 'Персональный менеджер успеха', 'Маркетинговые материалы под вашим брендом', 'Доступ к закрытому сообществу партнёров'];
export function BecomePartnerCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  return <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 lg:py-28 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="mb-12 lg:mb-0 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">
                Эксклюзивное предложение
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Присоединяйтесь к партнёрской программе WidgetBlocks сегодня и
              превратите сайты ваших клиентов в источники дохода.
            </p>

            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, index) => <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </li>)}
            </ul>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-3">
                {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64'].map((src, i) => <img key={i} className="w-10 h-10 rounded-full border-4 border-white/20" src={src} alt="" />)}
              </div>
              <span className="font-medium">
                Присоединяйтесь к 2,800+ партнёрам, которые уже зарабатывают
              </span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 backdrop-blur-lg">
            {isSuccess ? <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Заявка получена!
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Спасибо за заявку. Наша команда рассмотрит её и свяжется с
                  вами в течение 24 часов.
                </p>
                <button onClick={() => setIsSuccess(false)} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Отправить ещё одну заявку
                </button>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Полное имя
                  </label>
                  <input type="text" id="name" required className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-lg" placeholder="Иван Иванов" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Рабочий email
                  </label>
                  <input type="email" id="email" required className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-lg" placeholder="ivan@company.com" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                    Компания / Сайт{' '}
                    <span className="text-gray-400 font-normal">
                      (необязательно)
                    </span>
                  </label>
                  <input type="text" id="company" className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-lg" placeholder="www.youragency.com" />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-6 mt-1">
                    <input id="terms" name="terms" type="checkbox" required className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      Я согласен с{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-500 font-semibold">
                        Условиями партнёрства
                      </a>{' '}
                      и{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-500 font-semibold">
                        Политикой конфиденциальности
                      </a>
                    </label>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed text-lg">
                  {isSubmitting ? <>
                      <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                      Обработка...
                    </> : <>
                      Стать партнёром
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </>}
                </button>
              </form>}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>;
}