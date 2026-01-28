import React, { useState, useEffect } from 'react';
import './SuccessStoryBurger.css';

const SuccessStoryBurger = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const burgerLayers = [
    {
      id: 1,
      number: 1,
      title: "Автомобиль для Time2Win",
      label: "Слой 1 - Автомобиль",
      colorClass: "layer-1",
      description: "Моя задача заключалась в помощи компании Time2Win с приобретением автомобиля для корпоративных нужд. Необходимо было найти оптимальное решение, которое сочеталось бы с имиджем компании и при этом было экономически эффективным.",
      achievement: {
        title: "Достигнутый результат:",
        description: "Успешно подобран и приобретён премиальный автомобиль бизнес-класса с полным пакетом обслуживания на выгодных финансовых условиях. Автомобиль полностью соответствовал требованиям компании и помог укрепить её деловой имидж.",
        points: [
          "Анализ потребностей компании и подбор оптимальной модели",
          "Переговоры с дилерами для получения максимальной скидки",
          "Организация выгодного кредитования через партнёрские банки",
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
      description: "Поставив амбициозную цель — совершить кругосветное путешествие менее чем за год, я разработал стратегию заработка, которая позволила не только финансировать поездку, но и создала устойчивый источник дохода на будущее.",
      achievement: {
        title: "Достигнутый результат:",
        description: "За 11 месяцев удалось заработать сумму, достаточную для комфортного кругосветного путешествия, посетив 24 страны на 4 континентах. При этом был создан пассивный доход, который продолжает приносить прибыль.",
        points: [
          "Разработка и монетизация онлайн-курса по digital-навыкам",
          "Фриланс-проекты в сфере веб-разработки и консалтинга",
          "Партнёрские программы и инвестиции в криптовалюты",
          "Ведение travel-блога с монетизацией контента"
        ]
      }
    },
    {
      id: 3,
      number: 3,
      title: "Сайт Тимирязевской академии с Cup In Box",
      label: "Слой 3 - Сайт",
      colorClass: "layer-3",
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

  // Анимация появления при загрузке
  useEffect(() => {
    const timer = setTimeout(() => {
      // Компонент уже отрендерен с анимацией через CSS
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-story-burger">
      <div className="container">
        {/* Визуализация бургера */}
        <div className="burger-visual">
          <div className="visual-title">Слои успеха</div>
          <div className="burger-bun"></div>
          <div className="burger-patty"></div>
          <div className="burger-cheese"></div>
          <div className="burger-bun-bottom"></div>
        </div>
        
        {/* Бургер из историй */}
        <div className="burger-container">
          {burgerLayers.map((layer, index) => (
            <BurgerLayer 
              key={layer.id}
              layer={layer}
              isActive={activeLayer === index}
              onClick={() => handleLayerClick(index)}
            />
          ))}
        </div>
        
        <div className="conclusion">
          <h2>Секрет успешного "бургера" достижений</h2>
          <p>Как и в хорошем бургере, успех складывается из качественных ингредиентов: целеустремленности (булочка), навыков (котлета) и реализации (сыр). Каждый слой этой истории важен и дополняет другие, создавая целостную картину достижений.</p>
          <p>Эти три проекта демонстрируют, как разные навыки — от переговоров и финансового планирования до технической экспертизы — могут сочетаться для достижения впечатляющих результатов в различных сферах.</p>
        </div>
      </div>
    </div>
  );
};

// Компонент для отдельного слоя бургера
const BurgerLayer = ({ layer, isActive, onClick }) => {
  return (
    <div 
      className={`burger-layer ${layer.colorClass} ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="layer-header">
        <div className="layer-number">{layer.number}</div>
        <h2 className="layer-title">{layer.title}</h2>
      </div>
      <div className="burger-icon">
        <i className={`fas fa-chevron-${isActive ? 'up' : 'down'}`}></i>
      </div>
      <span className="layer-label">{layer.label}</span>
      
      <div className="layer-content">
        <p className="layer-description">{layer.description}</p>
        
        <div className="achievement-box">
          <h3 className="achievement-title">
            <i className="fas fa-trophy"></i> {layer.achievement.title}
          </h3>
          <p>{layer.achievement.description}</p>
          
          <ul className="key-points">
            {layer.achievement.points.map((point, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryBurger;
