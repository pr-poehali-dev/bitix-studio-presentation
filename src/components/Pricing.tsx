import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Стандарт",
    price: "от 50 000 ₽",
    description: "Базовые решения для небольших проектов",
    features: [
      "Базовый функционал",
      "Стандартный дизайн",
      "Техническая поддержка 8/5",
      "Срок разработки от 2 недель",
      "Одна платформа"
    ],
    isPopular: false
  },
  {
    name: "Бизнес",
    price: "от 150 000 ₽",
    description: "Оптимальный вариант для большинства компаний",
    features: [
      "Расширенный функционал",
      "Уникальный дизайн",
      "Техническая поддержка 12/7",
      "Срок разработки от 4 недель",
      "Кроссплатформенность",
      "Интеграция с CRM/ERP",
      "SEO-оптимизация"
    ],
    isPopular: true
  },
  {
    name: "Корпоративный",
    price: "от 500 000 ₽",
    description: "Полный спектр услуг для крупного бизнеса",
    features: [
      "Полный custom-функционал",
      "Премиум дизайн",
      "Круглосуточная поддержка 24/7",
      "Индивидуальный срок разработки",
      "Мультиплатформенность",
      "Полная бизнес-интеграция",
      "Аналитика и мониторинг",
      "Повышенная безопасность",
      "Долгосрочное сопровождение"
    ],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши тарифы</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Выберите подходящий вариант сотрудничества для реализации вашего проекта
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden ${
                plan.isPopular ? 'border-2 border-bitix-primary shadow-xl' : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-bitix-primary text-white py-2 text-center font-medium">
                  Самый популярный
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-bitix-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.isPopular 
                    ? 'bg-bitix-primary text-white hover:bg-bitix-secondary' 
                    : 'bg-white text-bitix-primary border border-bitix-primary hover:bg-bitix-light'
                }`}>
                  Выбрать тариф
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
