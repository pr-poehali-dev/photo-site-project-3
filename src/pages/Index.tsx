import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const portfolioCategories = [
    { id: "all", name: "Все работы" },
    { id: "wedding", name: "Свадьба" },
    { id: "portrait", name: "Портрет" },
    { id: "event", name: "Событие" }
  ];

  const portfolioItems = [
    { id: 1, category: "wedding", title: "Свадебная съемка", image: "/img/4928aac0-0d17-4aa1-a8e5-31b35acebb53.jpg" },
    { id: 2, category: "portrait", title: "Портретная фотосессия", image: "/img/ed9407e2-eaee-4b12-a727-75435af0d7f7.jpg" },
    { id: 3, category: "event", title: "Корпоративное событие", image: "/img/9b4ff438-48fa-4526-a2a2-686ba8db190a.jpg" },
    { id: 4, category: "wedding", title: "Выездная церемония", image: "/img/4928aac0-0d17-4aa1-a8e5-31b35acebb53.jpg" },
    { id: 5, category: "portrait", title: "Семейный портрет", image: "/img/ed9407e2-eaee-4b12-a727-75435af0d7f7.jpg" },
    { id: 6, category: "event", title: "День рождения", image: "/img/9b4ff438-48fa-4526-a2a2-686ba8db190a.jpg" }
  ];

  const services = [
    { title: "Свадебная фотография", price: "от 50 000 ₽", description: "Полный день съемки, обработка 100+ фото" },
    { title: "Портретная съемка", price: "от 15 000 ₽", description: "Индивидуальная или семейная фотосессия" },
    { title: "Событийная фотография", price: "от 25 000 ₽", description: "Корпоративы, дни рождения, праздники" }
  ];

  const reviews = [
    { name: "Анна и Дмитрий", text: "Потрясающие кадры! Фотограф поймал каждую эмоцию нашего особенного дня.", rating: 5 },
    { name: "Мария К.", text: "Профессиональный подход и невероятно красивые фотографии. Рекомендую!", rating: 5 },
    { name: "Алексей С.", text: "Отличная работа на корпоративном мероприятии. Все гости остались довольны.", rating: 5 }
  ];

  const filteredPortfolio = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">PHOTOGRAPHER</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#portfolio" className="text-gray-700 hover:text-black transition-colors">Портфолио</a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors">Услуги</a>
              <a href="#prices" className="text-gray-700 hover:text-black transition-colors">Цены</a>
              <a href="#reviews" className="text-gray-700 hover:text-black transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-black transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-6">Ловлю моменты</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональная фотография для особенных моментов вашей жизни
          </p>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Посмотреть работы
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light text-center mb-12">Портфолио</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-square bg-gray-200 overflow-hidden cursor-pointer relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <Icon 
                          name="Eye" 
                          size={32} 
                          className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                        />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl font-medium mb-2">{item.title}</h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {portfolioCategories.find(cat => cat.id === item.category)?.name}
                        </Badge>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4">
                  <h4 className="font-medium">{item.title}</h4>
                  <Badge variant="secondary" className="mt-2">
                    {portfolioCategories.find(cat => cat.id === item.category)?.name}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light text-center mb-12">Услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardContent className="p-8">
                  <Icon name="Camera" size={48} className="mx-auto mb-4 text-gray-600" />
                  <h4 className="text-xl font-medium mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-light">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light text-center mb-12">Цены</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b">
                    <div>
                      <h4 className="font-medium">Свадебная съемка (полный день)</h4>
                      <p className="text-gray-600 text-sm">Церемония + банкет, 100+ обработанных фото</p>
                    </div>
                    <span className="text-xl font-light">50 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b">
                    <div>
                      <h4 className="font-medium">Портретная фотосессия</h4>
                      <p className="text-gray-600 text-sm">2 часа съемки, 30+ обработанных фото</p>
                    </div>
                    <span className="text-xl font-light">15 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <div>
                      <h4 className="font-medium">Событийная фотография</h4>
                      <p className="text-gray-600 text-sm">4 часа съемки, 50+ обработанных фото</p>
                    </div>
                    <span className="text-xl font-light">25 000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light text-center mb-12">Отзывы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <p className="font-medium">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-light text-center mb-12">Контакты</h3>
          <div className="max-w-md mx-auto text-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Mail" size={20} />
                <span>hello@photographer.ru</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Instagram" size={20} />
                <span>@photographer_official</span>
              </div>
            </div>
            <Button className="mt-8 w-full" size="lg">
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Photographer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;