import { Code, Gamepad2, Bot, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const advantageItems = [
  {
    title: "Разработка игр",
    description: "Создаем увлекательные игры любой сложности для всех платформ от мобильных устройств до ПК и консолей",
    icon: <Gamepad2 className="h-10 w-10 text-bitix-primary" />
  },
  {
    title: "Разработка приложений",
    description: "Проектируем и разрабатываем высокопроизводительные приложения для iOS и Android с интуитивным интерфейсом",
    icon: <Code className="h-10 w-10 text-bitix-primary" />
  },
  {
    title: "Telegram боты",
    description: "Создаем функциональных ботов для автоматизации бизнес-процессов и улучшения пользовательского опыта",
    icon: <Bot className="h-10 w-10 text-bitix-primary" />
  },
  {
    title: "Разработка сайтов",
    description: "Проектируем и создаем современные, адаптивные веб-сайты и веб-приложения с полной оптимизацией",
    icon: <Globe className="h-10 w-10 text-bitix-primary" />
  },
  {
    title: "Создаём вирусы",
    description: "Вирусы для не злоумышленных целей",
    icon: <Shield className="h-10 w-10 text-bitix-primary" />
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Почему именно мы?</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Профессиональная команда разработчиков bitiX предлагает полный спектр услуг по созданию цифровых продуктов
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantageItems.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-bitix-primary text-white rounded-full font-medium hover:bg-bitix-secondary transition-colors"
          >
            Наши тарифы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;