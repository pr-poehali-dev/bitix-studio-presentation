import { useState, useEffect } from 'react';

const BitixIntro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показать приветственное сообщение после загрузки страницы
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-bitix-dark to-bitix-primary text-white">
      <div 
        className={`text-center px-4 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        } transition-all duration-1000 ease-in-out`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="typing-container">
            bitiX
          </span>
        </h1>
        <p className="text-2xl md:text-3xl font-light">
          ваши проблемы, наше решение!
        </p>
        <div className="mt-12">
          <button 
            onClick={() => {
              const advantagesSection = document.getElementById('advantages');
              advantagesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-white text-bitix-primary rounded-full font-medium hover:bg-bitix-light transition-colors"
          >
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default BitixIntro;
