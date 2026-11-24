/**
 * Территория отдыха «Голубое Озеро» — единый файл цен.
 * Для изменения тарифа поменяй только число справа от названия.
 * Все суммы указаны в рублях, БЕЗ пробелов и символа ₽.
 */
const PRICES = {
  gazebos: {
    large: 15000,       // Большая беседка
    medium: 8000,       // Средняя беседка
    mediumPlus: 8000,   // Средняя плюс
    standard: 4000,     // Стандартная беседка
    veranda: 2500,      // Веранда
  },
  cabins: {
    base: 4800,         // Домик за сутки, 2 взрослых
    extraAdult: 1000,   // Дополнительный взрослый за сутки
    child: 500,         // Ребёнок за сутки
  },
  hotTub: {
    evening: 5000,      // Банный чан за вечер
    extras: 500,        // Грейпфрут + хвоя
  },
  camping: {
    tentWithCar: 2200,  // Палатка + авто за сутки
    campervan: 1800,    // Автодом за сутки
    extraAdult: 500,    // Дополнительный взрослый за сутки
    extraTent: 1000,    // Дополнительная палатка за сутки
  },
  rentals: {
    catamaran: 1500,    // Катамаран за час
    sup: 1000,          // Сап-борд за час
    sunbed: 300,        // Шезлонг за день (до 22:00)
  },
};

// Ниже менять ничего не требуется.
const priceFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
});

function getPrice(key) {
  return key.split(".").reduce((value, part) => value?.[part], PRICES);
}

for (const element of document.querySelectorAll("[data-price]")) {
  const price = getPrice(element.dataset.price);
  if (typeof price !== "number" || !Number.isFinite(price)) {
    console.warn(`Не найдена цена: ${element.dataset.price}`);
    element.textContent = "Уточняйте цену";
    continue;
  }
  const prefix = element.dataset.pricePrefix ?? "";
  const suffix = element.dataset.priceSuffix ?? "";
  element.textContent = `${prefix}${priceFormatter.format(price)} ₽${suffix}`;
}
