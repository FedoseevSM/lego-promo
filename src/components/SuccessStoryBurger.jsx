// SuccessStoryBurger.jsx (Tailwind версия)
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaTrophy, FaCheckCircle } from 'react-icons/fa';

const SuccessStoryBurger = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const burgerLayers = [
    {
      id: 1,
      number: 1,
      title: "Автомобиль для Time2Win",
      label: "Слой 1 - Автомобиль",
      colorClass: "layer-1",
      gradient: "from-[#ff7e5f]/15 to-[#feb47b]/10",
      borderColor: "border-l-[#ff7e5f]",
      numberColor: "bg-[#ff7e5f]/30 text-[#ff7e5f]",
      iconColor: "text-[#ff7e5f]",
      description: "В бизнес-задаче для time2win прибыль владельца значительно выросла, что позволило ему приобрести автомобиль. Я добился этого через консультирование бизнес-процессов, создание сайтов и настройку рекламы — результаты создали не только быстрый эффект, но и устойчивый источник дохода.",
      achievement: {
        title: "Достигнутый результат:",
        description: "Успешно подобран и приобретён премиальный автомобиль бизнес-класса с полным пакетом обслуживания на выгодных финансовых условиях. Автомобиль полностью соответствовал требованиям компании и помог укрепить её деловой имидж.",
        points: [
          "Анализ потребностей компании и подбор оптимальной модели",
          "Переговоры с дилерами для получения максимальной скидки",
          "Полный комплект дополнительного оборудования и сервисного пакета"
        ]
      }
    },
    {
      id: 2,
      number: 2,
      title: "Кругосветное путешествие за год",
      label: "Слой 2 - Путешествие",
      colorClass: "layer-2",
      gradient: "from-[#7b4397]/15 to-[#dc2430]/10",
      borderColor: "border-l-[#7b4397]",
      numberColor: "bg-[#7b4397]/30 text-[#7b4397]",
      iconColor: "text-[#7b4397]",
      description: "Поставив амбициозную цель — совершить кругосветное путешествие менее чем за год, я разработал стратегию заработка, которая позволила не только финансировать поездку, но и создала устойчивый источник дохода на будущее.",
      achievement: {
        title: "Достигнутый результат:",
        description: "За 11 месяцев удалось заработать сумму, достаточную для комфортного кругосветного путешествия, посетив 7 стран. При этом был создан пассивный доход, который продолжает эффективно наращивать аудиторию.",
        points: [
          "Разработка и монетизация онлайн-курса по digital-навыкам",
          "Фриланс-проекты в сфере веб-разработки и консалтинга",
          "Ведение блога с монетизацией контента"
        ]
      }
    },
    {
      id: 3,
      number: 3,
      title: "Сайт Тимирязевской академии с Cup In Box",
      label: "Слой 3 - Сайт",
      colorClass: "layer-3",
      gradient: "from-[#2193b0]/15 to-[#6dd5ed]/10",
      borderColor: "border-l-[#2193b0]",
      numberColor: "bg-[#2193b0]/30 text-[#2193b0]",
      iconColor: "text-[#2193b0]",
      description: "В сотрудничестве с компанией Cup In Box я участвовал в создании официального сайта Тимирязевской академии. Проект требовал глубокого понимания потребностей образовательного учреждения и реализации современного цифрового решения.",
      achievement: {
        title: "Достигнутый результат:",
        description: "Разработан и запущен современный, функциональный сайт академии с интуитивным интерфейсом, системой управления контентом и интеграцией с внутренними сервисами учебного заведения.",
        points: [
          "Анализ потребностей академии и создание технического задания",
          "Разработка адаптивного дизайна, отражающего статус учреждения",
          "Интеграция с системой расписания и электронным журналом",
          "Обучение сотрудников работе с системой управления контентом"
        ]
      }
    }
  ];

  const handleLayerClick = (index) => {
    setActiveLayer(activeLayer === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-x-hidden font-['Segoe_UI',sans-serif]">
      <div className="container mx-auto px-5 py-8 max-w-7xl">
        {/* Визуализация бургера */}
        <div className="flex flex-col items-center my-10 md:my-16 max-w-xs mx-auto">
          <div className="text-xl mb-6 text-[#b0c4de] text-center">Слои успеха</div>
          <div className="w-64 h-6 bg-gradient-to-r from-[#d9a465] to-[#f7c873] rounded-t-[50px] mb-1 shadow-lg"></div>
          <div className="w-72 h-10 bg-gradient-to-r from-[#8b4513] to-[#a0522d] rounded-lg mb-1 shadow-lg"></div>
          <div className="w-80 h-4 bg-gradient-to-r from-[#ffd700] to-[#ffec8b] rounded mb-1 shadow-md"></div>
          <div className="w-64 h-5 bg-gradient-to-r from-[#d9a465] to-[#f7c873] rounded-b-[50px] shadow-lg"></div>
        </div>
        
        {/* Бургер из историй */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          {burgerLayers.map((layer, index) => (
            <div
              key={layer.id}
              className={`
                bg-white/8 rounded-2xl mb-1 p-6 md:p-8 relative cursor-pointer
                transition-all duration-400 ease-in-out border border-white/10
                hover:bg-white/12 hover:translate-x-3 md:hover:translate-x-4
                ${layer.borderColor} border-l-6
                bg-gradient-to-r ${layer.gradient}
                ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                ${activeLayer === index ? 'bg-white/15 translate-x-4 md:translate-x-5 shadow-xl' : ''}
              `}
              onClick={() => handleLayerClick(index)}
              style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            >
              <div className="flex items-center mb-4">
                <div className={`${layer.numberColor} w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-5 flex-shrink-0`}>
                  {layer.number}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">{layer.title}</h2>
              </div>
              
              <div className={`absolute right-6 md:right-8 top-6 md:top-8 text-2xl opacity-50 transition-all duration-300 ${layer.iconColor} ${activeLayer === index ? 'rotate-180 opacity-80' : ''}`}>
                {activeLayer === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              
              <span className="hidden lg:block absolute top-1/2 -right-20 -translate-y-1/2 rotate-90 text-sm opacity-70 tracking-wider whitespace-nowrap">
                {layer.label}
              </span>
              
              <div className={`
                pl-0 md:pl-16 overflow-hidden transition-all duration-500
                ${activeLayer === index ? 'max-h-[800px] mt-4' : 'max-h-0'}
              `}>
                <p className="mb-6 text-base md:text-lg leading-relaxed text-[#e6f2ff]">
                  {layer.description}
                </p>
                
                <div className="bg-black/20 rounded-xl p-5 md:p-6 mt-5 border border-white/5">
                  <h3 className="flex items-center mb-4 text-white text-lg md:text-xl">
                    <FaTrophy className="mr-3" /> {layer.achievement.title}
                  </h3>
                  <p className="mb-5">{layer.achievement.description}</p>
                  
                  <ul className="list-none">
                    {layer.achievement.points.map((point, idx) => (
                      <li key={idx} className="py-3 pl-9 relative border-b border-white/5 last:border-b-0">
                        <FaCheckCircle className="absolute left-0 top-4 text-[#4cd964]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    </div>
  );
};

export default SuccessStoryBurger;
