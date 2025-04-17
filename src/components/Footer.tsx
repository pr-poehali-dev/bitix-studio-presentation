import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">bitiX</h3>
            <p className="text-gray-400 mb-4">
              Ваши проблемы, наше решение! Разработка игр, приложений, Telegram ботов, сайтов и специализированного ПО.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-bitix-accent" />
                <a href="tel:+79001234567" className="hover:text-bitix-accent transition-colors">+7 (900) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-bitix-accent" />
                <a href="mailto:info@bitix.ru" className="hover:text-bitix-accent transition-colors">info@bitix.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-bitix-accent shrink-0 mt-1" />
                <span>г. Москва, ул. Примерная, д. 123, офис 456</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-bitix-accent transition-colors">Разработка игр</a></li>
              <li><a href="#" className="hover:text-bitix-accent transition-colors">Разработка приложений</a></li>
              <li><a href="#" className="hover:text-bitix-accent transition-colors">Telegram боты</a></li>
              <li><a href="#" className="hover:text-bitix-accent transition-colors">Разработка сайтов</a></li>
              <li><a href="#" className="hover:text-bitix-accent transition-colors">Специализированное ПО</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a 
                href="https://t.me/bitix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bitix-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/bitix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bitix-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/bitix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bitix-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 bg-bitix-primary rounded-lg hover:bg-bitix-secondary transition-colors">
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} bitiX. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
