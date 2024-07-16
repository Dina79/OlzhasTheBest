// 1 ЗАДАЧА 

//const n = 56
//if (n >= 0 && n <= 100) {
//    console.log(n + ' находится в диапазоне чисел от 0 до 100 включительно')
//} else {
//    console.log(n + ' нет в диапазоне чисел от 0 до 100 включительно')
//}

//function checkInterval(num, min, max) {
//    if (num >= min && num <= max) {
//        return true
//    } else {
//        return false
//    }
//}
//
//console.log(checkInterval(50, 0, 100))

// 2 ЗАДАЧА 

//const engineers = {
//    Den: 1000,
//    Matt: 5000,
//    Steve: 2000
//}
//
//for (const key in engineers) {
//    console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`)
//}

// 3 ЗАДАЧА

//const number = [23, 45, 62, 29, 13]
//for (i = 1; i < number.length; i += 2) {
//   console.log(number[i])
//}

// 4 ЗАДАЧА

//const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
//
//for (const index in numbers) {
//    console.log(`Индексу ${index} соответствует число ${numbers[index]}`)
//}

// 5  ЗАДАЧА

//const questions = [
//    {
//        question: "What's the currency of the USA?",
//        choices: ["US dollar", "Ruble", "Horses", "Gold"],
//        corAnswer: 0
//    }, {
//        question: "Where was the American Declaration of Independence signed?",
//        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//        corAnswer: 0
//    }
//];
//
//for (const value of questions) {
//    value.usersAnswer = null
//}
//
//console.log(questions)

// 6 ЗАДАЧА

//const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

//1 задание

//for (const value of numbers) {
//    console.log(value)
//}

//for (i = 0; i < numbers.length; i++) {
//    console.log(numbers[i])
//}

//2 задание

//let sum = 0
//for (i = 0; i < numbers.length; i++) {
//    sum = sum + numbers[i]
//    console.log(sum)
//}


//let sum = 0;
//for (let number of numbers) {
//    sum += number;
//}
//console.log("Сумма элементов массива: " + sum);

//3 задание

//let evenSum = 0;
//for (let number of numbers) {
//    if (number % 2 === 0) {
//        evenSum += number;
//    }
//    console.log(evenSum)
//}
//console.log("Сумма четных элементов массива: " + evenSum);

//4-5 задание

//let maxNumber = Math.max(...numbers);
//console.log("Максимальное число в массиве: " + maxNumber);


//let maxIndices = [];
//for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] === maxNumber) {
//        maxIndices.push(i);
//    }
//}
//console.log("Индексы максимального числа в массиве: " + maxIndices.join(", "));

// 7 ЗАДАЧА

//let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
//let newArr = []
//for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > 0) {
//        newArr.push(arr[i]);
//    }
//}
//
//console.log(newArr);

// 8 ЗАДАЧА

//let nums = [5, 4, 3, 8, 0]
//let limit = 5
//let newArr = []
//for (let i = 0; i < nums.length; i++) {
//    if (nums[i] >= limit) {
//        newArr.push(nums[i]);
//    }
//}
//
//console.log(newArr)

// 9 ЗАДАЧА

//const users = [{ name: 'Vasya', age: 23 }, { name: 'Olya', age: 12 }, { name: 'Anna', age: 22 }, { name: 'Alex', age: 18 }, { name: 'Valery', age: 8 }];
//
//for (let i = 0; i < users.length; i++) {
//    if (users[i].age > 15) {
//        console.log(users[i].name);
//    }
//}

// 10 ЗАДАЧА

//let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
//let vegObjects = []
//for (let i = 0; i < vegetables.length; i++) {
//    let word = vegetables[i];
//    let length = word.length;
//    let obj = { word: word, length: length };
//    vegObjects.push(obj);
//}
//
//console.log(vegObjects);
//
//for (let j = 0; j < vegObjects.length; j++) {
//   console.log(`${vegObjects[j].word} - ${vegObjects[j].length}`);
//}