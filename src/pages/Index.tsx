import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Truck',
      title: 'Грузоперевозки',
      description: 'Доставка грузов любой сложности по России и странам СНГ'
    },
    {
      icon: 'Package',
      title: 'Складские услуги',
      description: 'Современные складские комплексы с системой контроля'
    },
    {
      icon: 'MapPin',
      title: 'Логистические решения',
      description: 'Комплексные решения для оптимизации цепочки поставок'
    },
    {
      icon: 'Clock',
      title: 'Срочная доставка',
      description: 'Доставка в течение 24 часов по городу и области'
    }
  ];

  const tariffs = [
    {
      title: 'Стандарт',
      price: 'от 25 ₽/км',
      features: ['До 3 тонн', 'Страхование груза', 'Упаковка включена', 'Городская доставка'],
      popular: false
    },
    {
      title: 'Премиум',
      price: 'от 45 ₽/км',
      features: ['До 10 тонн', 'VIP сервис', 'Экспедирование', 'Междугородние перевозки', 'Трекинг груза'],
      popular: true
    },
    {
      title: 'Корпоративный',
      price: 'Договорная',
      features: ['Любой тоннаж', 'Персональный менеджер', 'Отсрочка платежа', 'Льготные тарифы', 'Приоритет'],
      popular: false
    }
  ];

  const fleet = [
    {
      type: 'Газель',
      capacity: '1.5 тонны',
      dimensions: '3×2×1.8 м',
      count: 15
    },
    {
      type: 'МАЗ',
      capacity: '10 тонн',
      dimensions: '6×2.4×2.4 м',
      count: 8
    },
    {
      type: 'Фура',
      capacity: '20 тонн',
      dimensions: '13.6×2.4×2.7 м',
      count: 12
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Truck" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ТрансЛогистик</h1>
              <p className="text-sm text-gray-600">Надежные перевозки</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
            <a href="#tariffs" className="text-gray-700 hover:text-orange-500 transition-colors">Тарифы</a>
            <a href="#fleet" className="text-gray-700 hover:text-orange-500 transition-colors">Автопарк</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">О компании</a>
            <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ваш груз в надежных руках
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Профессиональные грузоперевозки и логистические решения по всей России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                О компании
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img 
            src="/img/d7de33f0-1269-4580-bd05-32f06b4fe351.jpg" 
            alt="Транспорт компании" 
            className="w-full h-32 object-cover opacity-30"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">35</div>
              <div className="text-gray-600">Единиц техники</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-600">Работаем круглосуточно</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5 лет</div>
              <div className="text-gray-600">На рынке</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр транспортных и логистических услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Тарифные планы</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф для ваших потребностей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative ${tariff.popular ? 'ring-2 ring-orange-500 shadow-xl' : 'shadow-md'} hover:shadow-lg transition-shadow duration-300`}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tariff.title}</CardTitle>
                  <div className="text-3xl font-bold text-orange-500 mt-2">{tariff.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${tariff.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-700 hover:bg-gray-800'}`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наш автопарк</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современная техника для перевозки грузов любого размера
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{vehicle.type}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {vehicle.count} единиц
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Грузоподъёмность:</span>
                      <span className="font-semibold">{vehicle.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Габариты:</span>
                      <span className="font-semibold">{vehicle.dimensions}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">О компании ТрансЛогистик</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Мы работаем на рынке транспортных услуг уже более 5 лет и за это время 
                заслужили доверие сотен клиентов. Наша команда профессионалов обеспечивает 
                надежную и своевременную доставку грузов любой сложности.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Icon name="Shield" size={24} className="text-orange-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Гарантия безопасности</h4>
                    <p className="text-gray-600 text-sm">Полное страхование и ответственность за груз</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Zap" size={24} className="text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Быстрая доставка</h4>
                    <p className="text-gray-600 text-sm">Соблюдение сроков и оперативность</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/45703fdd-4088-4490-b3cf-705795e068c5.jpg" 
                alt="Складской комплекс" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-600">
              Готовы ответить на ваши вопросы и рассчитать стоимость доставки
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">+7 (495) 123-45-67</p>
                <p className="text-gray-600">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-gray-900 mb-2">info@translogistic.ru</p>
                <p className="text-gray-600">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-gray-900 mb-2">г. Москва, ул. Логистическая, 15</p>
                <p className="text-gray-600">Офис и склад</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Готовы начать сотрудничество?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Получите бесплатную консультацию и расчет стоимости перевозки вашего груза
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">ТрансЛогистик</h4>
                  <p className="text-sm text-gray-400">Надежные перевозки</p>
                </div>
              </div>
              <p className="text-gray-400">
                Профессиональные транспортные услуги с гарантией качества и надежности.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Грузоперевозки</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Складские услуги</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Логистика</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Срочная доставка</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Наш автопарк</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@translogistic.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Логистическая, 15
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТрансЛогистик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;