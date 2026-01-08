import React, { useMemo, useState } from 'react';
import { MessageSquare, ShoppingCart, BarChart3, Shield, Globe, Zap, Mail, Calendar, Search, Castle, Cloud, Sparkles, Star } from 'lucide-react';
import { LegoWidget, LegoColor } from './LegoWidget';
import { ApiKeyCard } from './ApiKeyCard';
interface Widget {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: LegoColor;
  apiKey: string;
  cdnUrl: string;
}
const AVAILABLE_WIDGETS: Widget[] = [{
  id: 'chat',
  name: 'Онлайн-чат',
  description: 'Мгновенная поддержка клиентов с возможностями ИИ.',
  icon: MessageSquare,
  color: 'red',
  apiKey: 'pk_live_chat_8x92m3',
  cdnUrl: 'https://cdn.legowidgets.com/v2/chat.min.js'
}, {
  id: 'analytics',
  name: 'Аналитика',
  description: 'Отслеживание посетителей в реальном времени и тепловые карты.',
  icon: BarChart3,
  color: 'blue',
  apiKey: 'pk_anly_992ks2',
  cdnUrl: 'https://cdn.legowidgets.com/v2/analytics.js'
}, {
  id: 'cart',
  name: 'Умная корзина',
  description: 'Выдвижная корзина с восстановлением брошенных покупок.',
  icon: ShoppingCart,
  color: 'yellow',
  apiKey: 'pk_cart_m2938x',
  cdnUrl: 'https://cdn.legowidgets.com/v2/cart-loader.js'
}, {
  id: 'security',
  name: 'Защита от ботов',
  description: 'Невидимая капча и защита от DDoS атак.',
  icon: Shield,
  color: 'green',
  apiKey: 'pk_sec_773js9',
  cdnUrl: 'https://cdn.legowidgets.com/v2/shield.min.js'
}, {
  id: 'translation',
  name: 'Автоперевод',
  description: 'Система локализации с поддержкой 50+ языков.',
  icon: Globe,
  color: 'purple',
  apiKey: 'pk_trns_382ls0',
  cdnUrl: 'https://cdn.legowidgets.com/v2/i18n.js'
}, {
  id: 'performance',
  name: 'Ускоритель',
  description: 'Оптимизация изображений и ленивая загрузка.',
  icon: Zap,
  color: 'orange',
  apiKey: 'pk_perf_112ks8',
  cdnUrl: 'https://cdn.legowidgets.com/v2/boost.js'
}, {
  id: 'newsletter',
  name: 'Сбор email',
  description: 'Всплывающие окна при выходе и формы подписки.',
  icon: Mail,
  color: 'red',
  apiKey: 'pk_mail_554ks2',
  cdnUrl: 'https://cdn.legowidgets.com/v2/capture.js'
}, {
  id: 'booking',
  name: 'Запись на приём',
  description: 'Интеграция календаря для записи на услуги.',
  icon: Calendar,
  color: 'blue',
  apiKey: 'pk_book_993ms1',
  cdnUrl: 'https://cdn.legowidgets.com/v2/booking.min.js'
}, {
  id: 'search',
  name: 'Умный поиск',
  description: 'Поиск по сайту с ИИ и автодополнением.',
  icon: Search,
  color: 'yellow',
  apiKey: 'pk_srch_221ls9',
  cdnUrl: 'https://cdn.legowidgets.com/v2/search.js'
}];
export function WidgetBuilder() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const toggleWidget = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };
  const selectedWidgets = useMemo(() => AVAILABLE_WIDGETS.filter(w => selectedIds.has(w.id)), [selectedIds]);
  return <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Catalog Section */}
      <div className="lg:col-span-7 xl:col-span-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="mr-3">🧱</span>
            Доступные кирпичики
          </h2>
          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
            {AVAILABLE_WIDGETS.length} модулей
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {AVAILABLE_WIDGETS.map(widget => <LegoWidget key={widget.id} {...widget} isSelected={selectedIds.has(widget.id)} onToggle={toggleWidget} />)}
        </div>
      </div>

      {/* Sky Castle Section */}
      <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[700px]">
          {/* Sky background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-purple-200">
            {/* Animated clouds */}
            <div className="absolute top-10 left-10 animate-float">
              <Cloud className="w-16 h-16 text-white/60 fill-white/60" />
            </div>
            <div className="absolute top-32 right-16 animate-float animation-delay-2000">
              <Cloud className="w-20 h-20 text-white/50 fill-white/50" />
            </div>
            <div className="absolute top-56 left-20 animate-float animation-delay-4000">
              <Cloud className="w-12 h-12 text-white/70 fill-white/70" />
            </div>

            {/* Sparkles */}
            <div className="absolute top-20 right-10 animate-pulse">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="absolute top-48 left-12 animate-pulse animation-delay-1000">
              <Star className="w-5 h-5 text-yellow-200 fill-yellow-200" />
            </div>
            <div className="absolute top-72 right-24 animate-pulse animation-delay-3000">
              <Sparkles className="w-4 h-4 text-pink-300" />
            </div>
          </div>

          {/* Castle content */}
          <div className="relative z-10 p-8">
            {/* Castle header with towers */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border-2 border-white/30 shadow-lg">
                  <Castle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                  Ваш воздушный замок
                </h2>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border-2 border-white">
                <span className="text-sm font-bold text-purple-600">
                  {selectedIds.size} 🧱
                </span>
              </div>
            </div>

            {selectedIds.size === 0 ? <div className="flex flex-col items-center justify-center h-96 text-center">
                <div className="relative mb-8">
                  {/* Empty castle illustration */}
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl border-4 border-dashed border-white/40 flex items-center justify-center shadow-xl">
                    <Castle className="w-16 h-16 text-white/60" />
                  </div>
                  {/* Floating sparkles around */}
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
                  <Star className="absolute -bottom-2 -left-2 w-5 h-5 text-pink-300 fill-pink-300 animate-pulse animation-delay-1000" />
                </div>
                <p className="text-xl font-bold text-white drop-shadow-lg mb-2">
                  Постройте свой замок мечты!
                </p>
                <p className="text-white/90 drop-shadow-md">
                  Выберите кирпичики слева,
                  <br />
                  чтобы начать строительство
                </p>
              </div> : <div className="space-y-6">
                {/* Castle tower visualization */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/30 shadow-2xl min-h-[200px]">
                  {/* Tower top decoration */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-t-full shadow-lg"></div>
                      <Star className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
                    </div>
                  </div>

                  {/* Brick stack with realistic LEGO appearance */}
                  <div className="flex flex-col-reverse gap-2 mt-4">
                    {selectedWidgets.map((widget, index) => {
                  const colorClasses = {
                    red: 'from-red-500 to-red-600',
                    blue: 'from-blue-500 to-blue-600',
                    yellow: 'from-yellow-400 to-yellow-500',
                    green: 'from-green-500 to-green-600',
                    purple: 'from-purple-500 to-purple-600',
                    orange: 'from-orange-500 to-orange-600'
                  };
                  return <div key={widget.id} className="relative animate-slide-in-up" style={{
                    animationDelay: `${index * 100}ms`
                  }}>
                          {/* LEGO brick with studs */}
                          <div className={`
                            relative h-12 w-full rounded-xl bg-gradient-to-r ${colorClasses[widget.color]}
                            shadow-[0_4px_0_0_rgba(0,0,0,0.2)] border-2 border-black/20
                            transform hover:scale-105 transition-transform cursor-pointer
                            group
                          `}>
                            {/* Studs on top */}
                            <div className="absolute -top-2 left-0 right-0 flex justify-center gap-3 px-4">
                              {[...Array(6)].map((_, i) => <div key={i} className={`w-6 h-4 rounded-t-lg bg-gradient-to-b ${colorClasses[widget.color]} opacity-80 shadow-sm`}></div>)}
                            </div>

                            {/* Brick content */}
                            <div className="flex items-center justify-between h-full px-4 relative z-10">
                              <span className="text-white font-bold text-sm drop-shadow-md truncate">
                                {widget.name}
                              </span>
                              <Sparkles className="w-4 h-4 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl pointer-events-none"></div>
                          </div>
                        </div>;
                })}
                  </div>

                  {/* Castle foundation */}
                  <div className="mt-4 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-xl shadow-inner border-t-2 border-gray-600"></div>
                </div>

                {/* Integration details */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 border-white">
                  <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-4 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                    Детали интеграции
                  </h3>
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    {selectedWidgets.map(widget => <ApiKeyCard key={widget.id} widgetName={widget.name} apiKey={widget.apiKey} cdnUrl={widget.cdnUrl} />)}
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>;
}
