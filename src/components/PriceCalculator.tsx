import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface CalculatorResult {
  basePrice: number;
  additionalServices: number;
  total: number;
  distance: number;
  vehicleType: string;
}

const PriceCalculator = () => {
  const [formData, setFormData] = useState({
    fromCity: '',
    toCity: '',
    weight: '',
    volume: '',
    vehicleType: '',
    isFragile: false,
    isUrgent: false,
    needsPackaging: false,
    needsLoading: false
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const vehicleTypes = [
    { value: 'gazelle', label: 'Газель (до 1.5т)', baseRate: 25 },
    { value: 'medium', label: 'Средний грузовик (до 5т)', baseRate: 35 },
    { value: 'large', label: 'Большой грузовик (до 10т)', baseRate: 45 },
    { value: 'truck', label: 'Фура (до 20т)', baseRate: 55 }
  ];

  const cityDistances: { [key: string]: number } = {
    'москва-спб': 635,
    'москва-нн': 400,
    'москва-казань': 720,
    'москва-екб': 1416,
    'москва-самара': 840,
    'москва-ростов': 1070,
    'москва-краснодар': 1350,
    'москва-воронеж': 515,
    'москва-тула': 180,
    'москва-рязань': 196
  };

  const calculatePrice = () => {
    if (!formData.fromCity || !formData.toCity || !formData.weight || !formData.vehicleType) {
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const selectedVehicle = vehicleTypes.find(v => v.value === formData.vehicleType);
      if (!selectedVehicle) return;

      const routeKey = `${formData.fromCity.toLowerCase()}-${formData.toCity.toLowerCase()}`;
      const reverseRouteKey = `${formData.toCity.toLowerCase()}-${formData.fromCity.toLowerCase()}`;
      
      let distance = cityDistances[routeKey] || cityDistances[reverseRouteKey];
      
      if (!distance) {
        distance = Math.floor(Math.random() * 800 + 200);
      }

      const weight = parseFloat(formData.weight);
      const basePrice = distance * selectedVehicle.baseRate;
      
      let additionalServices = 0;
      
      if (formData.isFragile) additionalServices += basePrice * 0.15;
      if (formData.isUrgent) additionalServices += basePrice * 0.25;
      if (formData.needsPackaging) additionalServices += 2000;
      if (formData.needsLoading) additionalServices += 1500;
      
      if (weight > 1) {
        additionalServices += (weight - 1) * 500;
      }

      const total = basePrice + additionalServices;

      setResult({
        basePrice,
        additionalServices,
        total,
        distance,
        vehicleType: selectedVehicle.label
      });

      setIsCalculating(false);
    }, 1500);
  };

  const resetCalculator = () => {
    setFormData({
      fromCity: '',
      toCity: '',
      weight: '',
      volume: '',
      vehicleType: '',
      isFragile: false,
      isUrgent: false,
      needsPackaging: false,
      needsLoading: false
    });
    setResult(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Калькулятор стоимости перевозки</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Рассчитайте примерную стоимость доставки вашего груза за несколько минут
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Форма калькулятора */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Calculator" size={24} className="mr-2 text-orange-500" />
              Параметры перевозки
            </CardTitle>
            <CardDescription>
              Заполните данные для расчета стоимости доставки
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Маршрут */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fromCity">Откуда</Label>
                <Select value={formData.fromCity} onValueChange={(value) => setFormData({...formData, fromCity: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="москва">Москва</SelectItem>
                    <SelectItem value="спб">Санкт-Петербург</SelectItem>
                    <SelectItem value="нн">Нижний Новгород</SelectItem>
                    <SelectItem value="казань">Казань</SelectItem>
                    <SelectItem value="екб">Екатеринбург</SelectItem>
                    <SelectItem value="самара">Самара</SelectItem>
                    <SelectItem value="ростов">Ростов-на-Дону</SelectItem>
                    <SelectItem value="краснодар">Краснодар</SelectItem>
                    <SelectItem value="воронеж">Воронеж</SelectItem>
                    <SelectItem value="тула">Тула</SelectItem>
                    <SelectItem value="рязань">Рязань</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="toCity">Куда</Label>
                <Select value={formData.toCity} onValueChange={(value) => setFormData({...formData, toCity: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="москва">Москва</SelectItem>
                    <SelectItem value="спб">Санкт-Петербург</SelectItem>
                    <SelectItem value="нн">Нижний Новгород</SelectItem>
                    <SelectItem value="казань">Казань</SelectItem>
                    <SelectItem value="екб">Екатеринбург</SelectItem>
                    <SelectItem value="самара">Самара</SelectItem>
                    <SelectItem value="ростов">Ростов-на-Дону</SelectItem>
                    <SelectItem value="краснодар">Краснодар</SelectItem>
                    <SelectItem value="воронеж">Воронеж</SelectItem>
                    <SelectItem value="тула">Тула</SelectItem>
                    <SelectItem value="рязань">Рязань</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Параметры груза */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weight">Вес (кг)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Например: 100"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="volume">Объем (м³)</Label>
                <Input
                  id="volume"
                  type="number"
                  step="0.1"
                  placeholder="Например: 2.5"
                  value={formData.volume}
                  onChange={(e) => setFormData({...formData, volume: e.target.value})}
                />
              </div>
            </div>

            {/* Тип транспорта */}
            <div>
              <Label htmlFor="vehicleType">Тип транспорта</Label>
              <Select value={formData.vehicleType} onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите транспорт" />
                </SelectTrigger>
                <SelectContent>
                  {vehicleTypes.map((vehicle) => (
                    <SelectItem key={vehicle.value} value={vehicle.value}>
                      {vehicle.label} - от {vehicle.baseRate} ₽/км
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Дополнительные услуги */}
            <div>
              <Label className="text-base font-semibold">Дополнительные услуги</Label>
              <div className="space-y-3 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="fragile"
                    checked={formData.isFragile}
                    onCheckedChange={(checked) => setFormData({...formData, isFragile: checked as boolean})}
                  />
                  <Label htmlFor="fragile" className="text-sm font-normal">
                    Хрупкий груз (+15% к стоимости)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgent"
                    checked={formData.isUrgent}
                    onCheckedChange={(checked) => setFormData({...formData, isUrgent: checked as boolean})}
                  />
                  <Label htmlFor="urgent" className="text-sm font-normal">
                    Срочная доставка (+25% к стоимости)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="packaging"
                    checked={formData.needsPackaging}
                    onCheckedChange={(checked) => setFormData({...formData, needsPackaging: checked as boolean})}
                  />
                  <Label htmlFor="packaging" className="text-sm font-normal">
                    Упаковка (+2000 ₽)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="loading"
                    checked={formData.needsLoading}
                    onCheckedChange={(checked) => setFormData({...formData, needsLoading: checked as boolean})}
                  />
                  <Label htmlFor="loading" className="text-sm font-normal">
                    Погрузка/выгрузка (+1500 ₽)
                  </Label>
                </div>
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex gap-3">
              <Button 
                onClick={calculatePrice} 
                className="flex-1 bg-orange-500 hover:bg-orange-600"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Рассчитываем...
                  </>
                ) : (
                  <>
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Рассчитать
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={resetCalculator}>
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Результат расчета */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Receipt" size={24} className="mr-2 text-blue-600" />
              Результат расчета
            </CardTitle>
            <CardDescription>
              {result ? 'Примерная стоимость вашей перевозки' : 'Заполните форму для получения расчета'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                {/* Детали маршрута */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Маршрут:</span>
                      <p className="font-semibold">{formData.fromCity} → {formData.toCity}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Расстояние:</span>
                      <p className="font-semibold">{result.distance} км</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Транспорт:</span>
                      <p className="font-semibold">{result.vehicleType}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Вес груза:</span>
                      <p className="font-semibold">{formData.weight} кг</p>
                    </div>
                  </div>
                </div>

                {/* Расчет стоимости */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Базовая стоимость:</span>
                    <span className="font-semibold">{result.basePrice.toLocaleString()} ₽</span>
                  </div>
                  {result.additionalServices > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Дополнительные услуги:</span>
                      <span className="font-semibold">+{result.additionalServices.toLocaleString()} ₽</span>
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Итого:</span>
                      <span className="text-2xl font-bold text-orange-500">
                        {result.total.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </div>

                {/* Действия */}
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать по этому расчету
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать коммерческое предложение
                  </Button>
                </div>

                {/* Уведомление */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Icon name="Info" size={16} className="text-blue-600 mr-2 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold">Обратите внимание:</p>
                      <p>Это предварительный расчет. Финальная стоимость может отличаться в зависимости от особенностей груза и маршрута.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calculator" size={32} className="text-gray-400" />
                </div>
                <p className="text-gray-500 mb-4">Заполните параметры груза и маршрута</p>
                <p className="text-sm text-gray-400">
                  Расчет займет всего несколько секунд
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PriceCalculator;