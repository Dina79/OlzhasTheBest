//Задание 1

function sum(a, b) {
    // Проверка, что оба аргумента переданы
    if (arguments.length < 2) {
        console.log("Введите два параметра");
        return;
    }

    // Проверка, что оба аргумента являются числами
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log("Введенные данные не являются числами");
        return;
    }

    // Возвращение суммы двух чисел
    return a + b;
}

// Примеры вызова функции
console.log(sum(2, 4));       // 6
console.log(sum('d', 4));     // Введенные данные не являются числами
console.log(sum(1, [2]));     // Введенные данные не являются числами
console.log(sum(1));          // Введите два параметра
console.log(sum());           // Введите два параметра

//Задание 2

function square(a) {
    if (a === undefined) {
        console.error('Uncaught Error: Функция "square" не может быть вызвана без аргумента');
        return;
    }
    console.log(a * a);
}

// Примеры вызова функции
square(10); // 100

square();
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

//Задание 3

const guessNumber = (userNumber) => {
    if (userNumber < 1 || userNumber > 10) {
        return "Число должно быть в диапазоне от 1 до 10";
    }

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (userNumber === randomNumber) {
        return "Вы выиграли";
    } else {
        return `Вы не угадали, ваше число - ${userNumber}, а выпало число - ${randomNumber}`;
    }
};

// Примеры вызова функции
console.log(guessNumber(5));
console.log(guessNumber(12)); // Число должно быть в диапазоне от 1 до 10
console.log(guessNumber(0));  // Число должно быть в диапазоне от 1 до 10

// Задание 4

const copyArr = (arr) => arr.map(element => element);

// Примеры вызова функции
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = copyArr(originalArray);

console.log(copiedArray); // [1, 2, 3, 4, 5]
console.log(originalArray === copiedArray); // false, массивы разные

// Задание 5

const copyArr1 = (arr) => {
    const newArray = [];
    arr.forEach(element => {
        newArray.push(element);
    });
    return newArray;
};

// Примеры вызова функции
const originalArray1 = [1, 2, 3, 4, 5];
const copiedArray1 = copyArr1(originalArray1);

console.log(copiedArray1); // [1, 2, 3, 4, 5]
console.log(originalArray1 === copiedArray1); // false, массивы разные

// Задание 6

const addGreeting = (names) => names.map(name => `Hello, ${name}`);

// Примеры вызова функции
const namesArray = ["Alice", "Bob", "Charlie"];
const greetedNames = addGreeting(namesArray);

console.log(greetedNames); // ["Hello, Alice", "Hello, Bob", "Hello, Charlie"]

// Задание 7 

const getUserNames = (users) => users.map(user => user.name);

// Примеры вызова функции
const usersArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const userNames = getUserNames(usersArray);

console.log(userNames); // ["Alice", "Bob", "Charlie"]

// Задание 8

const sumObjectValues = (obj) => {
    let sum = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
};

// Примеры вызова функции
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
};

const sum = sumObjectValues(objectWithNumbers);
console.log(sum); // 42

// Задание 9

const ucFirst = (str) => {
    if (!str) return str; // Проверка на пустую строку
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Примеры вызова функции
console.log(ucFirst("hello")); // "Hello"
console.log(ucFirst("world")); // "World"
console.log(ucFirst("")); // ""

// Задание 10

const checkSpam = (str) => {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('badword') || lowerStr.includes('xxx');
};

// Примеры вызова функции
console.log(checkSpam("This is a badWord example")); // true
console.log(checkSpam("This is a XXX example")); // true
console.log(checkSpam("This is a clean example")); // false
console.log(checkSpam("This is a BADWORD example")); // true
console.log(checkSpam("This is a xxx example")); // true

// Задание 11

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

// Примеры вызова функции
console.log(reverseString("привет, Женя")); // "янеЖ ,тевирп"
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("12345")); // "54321"

// Задание 12

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

stations.forEach(station => {
    // Извлечение кода станции
    let stationCode = station.slice(0, 3);

    // Нахождение индекса точки с запятой
    let semicolonIndex = station.indexOf(';');

    // Извлечение названия станции
    let stationName = station.slice(semicolonIndex + 1);

    // Объединение кода станции и названия
    let result = `${stationCode}: ${stationName}`;

    // Вывод результата в консоль
    console.log(result);
});

// Задание 13

const unique = (arr) => {
    const uniqueArr = [];
    arr.forEach(item => {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    });
    return uniqueArr;
};

// Примеры вызова функции
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
console.log(unique(strings)); // ["кришна", "харе", ":-O"]

// Задание 14

const verifyCats = (catsJane, catsJulia) => {
    // Удаление первой и последней кошки из массива Жени
    const correctedCatsJane = catsJane.slice(1, -1);

    // Создание общего массива с данными Жени и Юли
    const allCats = correctedCatsJane.concat(catsJulia);

    // Проверка возраста каждой кошки и вывод результата в консоль
    allCats.forEach((age, index) => {
        if (age >= 2) {
            console.log(`Кошка № ${index + 1} взрослая, ей ${age} лет`);
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`);
        }
    });
};

// Тестовые данные
const dataJane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const dataJulia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

const dataJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const dataJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

// Вызов функции для тестовых данных
verifyCats(dataJane1, dataJulia1);
verifyCats(dataJane2, dataJulia2);

// Задание 15

const filterFor = (arr, a) => {
    return arr.filter(item => item >= a);
};

// Примеры вызова функции
let arr = [5, 4, 3, 8, 0];

console.log(filterFor(arr, 5)); // [5, 8]
console.log(filterFor(arr, 10)); // []
console.log(filterFor(arr, 3.11)); // [4, 5, 8]

// Задание 16

const filterLongStrings = (arr) => {
    return arr.filter(str => str.length > 3);
};

// Примеры вызова функции
const strings = ['yes', 'hello', 'no', 'easycode', 'what'];

const longStrings = filterLongStrings(strings);

console.log(longStrings); // ["hello", "easycode", "what"]

// Задание 17

let arr = [[14, 45], [1], ['a', 'c', 'd']];

arr.sort((a, b) => a.length - b.length);

console.log(arr); // [ [1], [14, 45], ['a', 'c', 'd'] ]

// Задание 18 

const getAverageHumanAge = (catAges) => {
    // 1. Рассчитываем человеческий возраст для каждой кошки
    const humanAges = catAges.map(age => age <= 2 ? age * 10 : age * 7);

    // 2. Исключаем всех кошек младше 18 человеческих лет
    const adultCats = humanAges.filter(age => age >= 18);

    // 3. Возвращаем средний человеческий возраст для всех взрослых кошек
    const averageHumanAge = adultCats.reduce((sum, age) => sum + age, 0) / adultCats.length;

    return averageHumanAge;
};

// Тестовые данные
const testData1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const testData2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

console.log(getAverageHumanAge(testData1)); // Результат для первого набора данных
console.log(getAverageHumanAge(testData2)); // Результат для второго набора данных