import React from 'react';
import { ExternalLink, ShoppingBag, Target, Pizza } from 'lucide-react';
interface Goal {
  id: string;
  name: string;
  price: number;
  image: string;
  link: string;
  gradient: string;
}
const goals: Goal[] = [{
  id: 'iphone',
  name: 'iPhone 15 Pro',
  price: 999,
  image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80',
  link: 'https://www.apple.com/iphone',
  gradient: 'from-blue-500 to-cyan-500'
}, {
  id: 'macbook',
  name: 'MacBook Pro M3',
  price: 1599,
  image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=500&q=80',
  link: 'https://www.apple.com/macbook-pro',
  gradient: 'from-purple-500 to-pink-500'
}, {
  id: 'keyboard',
  name: 'Механическая клавиатура',
  price: 150,
  image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=80',
  link: 'https://mechanicalkeyboards.com',
  gradient: 'from-yellow-500 to-orange-500'
}, {
  id: 'chair',
  name: 'Эргономичное кресло',
  price: 500,
  image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=500&q=80',
  link: 'https://www.hermanmiller.com',
  gradient: 'from-red-500 to-pink-500'
}, {
  id: 'headphones',
  name: 'Наушники с шумоподавлением',
  price: 350,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80',
  link: 'https://www.sony.com/headphones',
  gradient: 'from-green-500 to-emerald-500'
}, {
  id: 'monitor',
  name: 'Монитор 4K Ultra',
  price: 400,
  image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80',
  link: 'https://www.dell.com/monitors',
  gradient: 'from-indigo-500 to-purple-500'
}, {
  id: 'camera',
  name: 'Беззеркальная камера',
  price: 1200,
  image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80',
  link: 'https://www.sony.com/cameras',
  gradient: 'from-pink-500 to-rose-500'
}, {
  id: 'watch',
  name: 'Умные часы Ultra',
  price: 799,
  image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80',
  link: 'https://www.apple.com/watch',
  gradient: 'from-orange-500 to-red-500'
}];
export function GoalSelector() {
  const avgCommissionPerClient = 20;
  return <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6 shadow-lg">
            <Target className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Выберите свою цель
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            К чему вы стремитесь? Выберите цель и узнайте, сколько клиентов
            нужно для её достижения.
          </p>
        </div>

        {/* Pizza Bonus Banner */}
        <div className="mb-12 relative overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 shadow-2xl relative">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <Pizza className="w-12 h-12 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                    🎉 Бонус при достижении цели!
                  </h3>
                  <p className="text-lg text-white/90 font-medium">
                    Большая пицца в подарок от нашего сервиса с доставкой на
                    любой адрес
                  </p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-white/30 shadow-lg">
                <p className="text-white font-bold text-lg text-center">
                  При покупке
                  <br />
                  любой цели
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map(goal => {
          const clientsNeeded = Math.ceil(goal.price / avgCommissionPerClient);
          return <div key={goal.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>

                <div className="relative">
                  <div className="h-48 overflow-hidden bg-gray-100 relative">
                    <img src={goal.image} alt={goal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className={`absolute hidden top-4 right-4 bg-gradient-to-br ${goal.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      ${goal.price}
                    </div>
                    {/* Pizza bonus badge */}
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center animate-bounce">
                      <Pizza className="w-3 h-3 mr-1" />
                      +🍕
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {goal.name}
                    </h3>

                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span className="font-medium">Потребуется:</span>
                        <span className={`font-bold bg-gradient-to-r ${goal.gradient} bg-clip-text text-transparent`}>
                          {clientsNeeded} клиентов
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div className={`bg-gradient-to-r ${goal.gradient} h-2.5 rounded-full transition-all duration-1000 animate-pulse`} style={{
                      width: '40%'
                    }}></div>
                      </div>
                    </div>

                    <a href={goal.link} target="_blank" rel="noopener noreferrer" className={`group/btn w-full hidden flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${goal.gradient} hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Купить
                      <ExternalLink className="w-3 h-3 ml-2 opacity-70 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Additional Pizza Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Pizza className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">
              Пицца доставляется в течение 24 часов после подтверждения покупки
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>;
}