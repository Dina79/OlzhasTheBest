// Задание 1

let num1 = 5.4;
let num2 = 5.5;
let num3 = 5.6;

// Math.round(x) - округляет до ближайшего целого числа
console.log(Math.round(num1)); // 5.4 -> 5 (округляет вниз)
console.log(Math.round(num2)); // 5.5 -> 6 (округляет вверх, если .5)
console.log(Math.round(num3)); // 5.6 -> 6 (округляет вверх)

// Math.ceil(x) - округляет число вверх до ближайшего целого
console.log(Math.ceil(num1)); // 5.4 -> 6 (округляет вверх)
console.log(Math.ceil(num2)); // 5.5 -> 6 (округляет вверх)
console.log(Math.ceil(num3)); // 5.6 -> 6 (округляет вверх)

// Math.floor(x) - округляет число вниз до ближайшего целого
console.log(Math.floor(num1)); // 5.4 -> 5 (округляет вниз)
console.log(Math.floor(num2)); // 5.5 -> 5 (округляет вниз)
console.log(Math.floor(num3)); // 5.6 -> 5 (округляет вниз)

// Задание 2

// Получение текущей даты и времени
const now = new Date();

// Опции для форматирования даты
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = now.toLocaleDateString('ru-RU', options);

// Получение часов и минут
const hours = now.getHours();
const minutes = now.getMinutes();

// Вывод в консоль
console.log(`Сегодня ${formattedDate}`);
console.log(`${hours} часов ${minutes} минут`);
