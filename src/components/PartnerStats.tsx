import React from 'react';
import { Users, DollarSign, Award, TrendingUp } from 'lucide-react';
const stats = [{
  id: 1,
  name: 'Активных партнёров',
  value: '2,847',
  icon: Users,
  gradient: 'from-blue-500 to-cyan-500',
  bgGradient: 'from-blue-50 to-cyan-50'
}, {
  id: 2,
  name: 'Средний доход в месяц',
  value: '$2,340',
  icon: DollarSign,
  gradient: 'from-green-500 to-emerald-500',
  bgGradient: 'from-green-50 to-emerald-50'
}, {
  id: 3,
  name: 'Всего выплачено',
  value: '$12.4M',
  icon: TrendingUp,
  gradient: 'from-purple-500 to-pink-500',
  bgGradient: 'from-purple-50 to-pink-50'
}, {
  id: 4,
  name: 'Рейтинг партнёров',
  value: '4.9/5',
  icon: Award,
  gradient: 'from-yellow-500 to-orange-500',
  bgGradient: 'from-yellow-50 to-orange-50'
}];
export function PartnerStats() {
  return <div className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(item => <div key={item.id} className={`group relative bg-gradient-to-br ${item.bgGradient} p-6 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {item.name}
                </p>
                <p className="text-3xl font-extrabold text-gray-900">
                  {item.value}
                </p>
              </div>

              {/* Decorative gradient blob */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
            </div>)}
        </div>
      </div>
    </div>;
}