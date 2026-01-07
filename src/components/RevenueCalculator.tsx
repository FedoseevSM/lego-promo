import React, { useState } from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { Rub } from 'lucide-react'; // Импортируем иконку рубля

export function RevenueCalculator() {
  const [clients, setClients] = useState(50);
  const [avgCheck, setAvgCheck] = useState(10000); // Средний чек в рублях
  const commissionRate = 0.2;
  const monthlyIncome = Math.round(clients * avgCheck * commissionRate);
  const yearlyIncome = monthlyIncome * 12;
  
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Рассчитайте свой потенциальный доход
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Узнайте, сколько вы можете заработать, став партнёром WidgetBlocks.
            Наши партнёры получают щедрую комиссию до 100% с каждой продажи.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 md:flex">
          {/* Controls Section */}
          <div className="p-8 md:w-1/2 md:p-12 space-y-10">
            <div>
              <label htmlFor="clients" className="flex items-center justify-between text-white font-bold mb-4">
                <span className="flex items-center text-lg">
                  <Users className="w-6 h-6 mr-3" />
                  Активных клиентов
                </span>
                <span className="text-2xl font-extrabold bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  {clients}
                </span>
              </label>
              <input
                type="range"
                id="clients"
                min="0"
                max="500"
                step="5"
                value={clients}
                onChange={e => setClients(parseInt(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, white 0%, white ${clients / 500 * 100}%, rgba(255,255,255,0.2) ${clients / 500 * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-blue-100 mt-2">
                <span>0</span>
                <span>500+</span>
              </div>
            </div>

            <div>
              <label htmlFor="avgCheck" className="flex items-center justify-between text-white font-bold mb-4">
                <span className="flex items-center text-lg">
                  <Rub className="w-6 h-6 mr-3" /> {/* Заменяем DollarSign на Rub */}
                  Средний чек на клиента
                </span>
                <span className="text-2xl font-extrabold bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  {avgCheck.toLocaleString('ru-RU')} ₽
                </span>
              </label>
              <input
                type="range"
                id="avgCheck"
                min="1000"
                max="100000"
                step="1000"
                value={avgCheck}
                onChange={e => setAvgCheck(parseInt(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, white 0%, white ${(avgCheck - 1000) / 99000 * 100}%, rgba(255,255,255,0.2) ${(avgCheck - 1000) / 99000 * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-blue-100 mt-2">
                <span>1 000 ₽</span>
                <span>100 000 ₽</span>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl border border-white/30">
              <p className="text-sm text-white font-medium leading-relaxed">
                💡 <span className="font-bold">Подсказка:</span> Средний партнёр
                начинает с 15 клиентов и вырастает до 50+ за 6 месяцев.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white p-8 md:w-1/2 md:p-12 flex flex-col justify-center">
            <div className="text-center space-y-8">
              <div className="relative">
                <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm mb-3">
                  Месячный доход
                </p>
                <div className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight flex items-center justify-center">
                  {monthlyIncome.toLocaleString('ru-RU')} ₽
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl -z-10 opacity-50"></div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

              <div>
                <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm mb-3">
                  Годовой потенциал
                </p>
                <div className="text-4xl font-bold text-gray-800 tracking-tight flex items-center justify-center">
                  {yearlyIncome.toLocaleString('ru-RU')} ₽
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200">
                Начать зарабатывать сейчас
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}