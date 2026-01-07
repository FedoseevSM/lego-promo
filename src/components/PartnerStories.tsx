import React from 'react';
import { Star, TrendingUp, Quote } from 'lucide-react';
const stories = [{
  id: 1,
  name: 'Анна Петрова',
  company: 'WebStudio Pro',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  quote: 'Клиенты сами добавляют формы и чаты через конструктор. Экономлю 10+ часов в неделю на доработках сайтов.',
  metric: '-10ч/неделя',
  rating: 5,
  gradient: 'from-blue-500 to-cyan-500'
}, {
  id: 2,
  name: 'Иван Сидоров',
  company: 'TechSolutions',
  image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  quote: 'Подключил 25 партнёров за месяц. Они собирают виджеты сами — продаю в 3 раза быстрее кастомной разработки.',
  metric: '25 партнёров/мес',
  rating: 5,
  gradient: 'from-purple-500 to-pink-500'
}, {
  id: 3,
  name: 'Мария Козлова',
  company: 'DigitalAgency',
  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  quote: 'Конверсия лендингов выросла на 25% после добавления интерактивных калькуляторов. Клиенты видят результат сразу.',
  metric: '+25% конверсия',
  rating: 5,
  gradient: 'from-green-500 to-emerald-500'
}];

export function PartnerStories() {
  return <div className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Истории успеха
          </h2>
          <p className="text-xl text-gray-600">
            Присоединяйтесь к тысячам агентств и фрилансеров, растущих вместе с
            нами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map(story => <div key={story.id} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl"></div>

              <div className="relative z-10">
                {/* Quote icon */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${story.gradient} rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity`}>
                  <Quote className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img className="h-14 w-14 rounded-full border-4 border-white shadow-lg" src={story.image} alt={story.name} />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br ${story.gradient} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-500">{story.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(story.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
                  <span className="text-4xl text-gray-200 absolute -top-2 -left-2">
                    "
                  </span>
                  <span className="relative z-10">{story.quote}</span>
                </blockquote>

                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${story.gradient} text-white text-sm font-bold shadow-lg`}>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {story.metric}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}