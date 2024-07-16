// Задание 1

const inputTask1 = document.querySelector('#task1-input')
const listTask1 = document.querySelector('#task1-list')

inputTask1.addEventListener('keyup', (event) => {
    newLi = document.createElement('li')
    newLi.innerText = event.key
    listTask1.append(newLi)
})

// Задание 2
console.log('---------------------TASK_2--------------------------')

const inputTask2 = document.querySelector('#task2-input')

inputTask2.addEventListener('keyup', () => {
    console.log(inputTask2.value)
})

// Задание 3

const formTask3 = document.querySelector('#task3-form')
const inputTask3 = document.querySelector('#task3-input')
const listTask3 = document.querySelector('#task3-list')

formTask3.addEventListener('submit', (event) => {
    event.preventDefault()
    newLi = document.createElement('li')
    newLi.innerText = inputTask3.value
    listTask3.append(newLi)
    inputTask3.value = ''
})


// Задание 4

const formTask4 = document.querySelector('#task4-form')
const input1Task4 = document.querySelector('#task4-input1')
const input2Task4 = document.querySelector('#task4-input2')
const selectTask4 = document.querySelector('#task4-select')
const divResult = document.querySelector('#task4-result')


formTask4.addEventListener('submit', (event) => {
    event.preventDefault()
    if (isNaN(input1Task4.value)) {
        alert('Input 1 is not a number')
        input1Task4.value = ''
        input2Task4.value = ''
        return
    }
    if (isNaN(input2Task4.value)) {
        alert('Input 2 is not a number')
        input1Task4.value = ''
        input2Task4.value = ''
        return
    }

    const num1 = Number(input1Task4.value)
    const num2 = Number(input2Task4.value)
    const operator = selectTask4.value
    var result = 0

    if (operator === '+') {
        result = num1 + num2
    }

    if (operator === '-') {
        result = num1 - num2
    }

    if (operator === '*') {
        result = num1 * num2
    }

    if (operator === '/') {
        if (num2 !== 0) {
            result = num1 / num2
        } else {
            result = "can't divide by 0"
        }
    }

    divResult.innerText = result
    input1Task4.value = ''
    input2Task4.value = ''

})

// 4.2

const formTask4V2 = document.querySelector('#task4-form-ver2')
const input1Task4V2 = document.querySelector('#task4-input1-ver2')
const input2Task4V2 = document.querySelector('#task4-input2-ver2')
const selectTask4V2 = document.querySelector('#task4-select-ver2')
const divResultV2 = document.querySelector('#task4-result-ver2')


formTask4V2.addEventListener('submit', (event) => {
    event.preventDefault()
    if (isNaN(input1Task4V2.value)) {
        alert('Input 1 is not a number')
        input1Task4V2.value = ''
        input2Task4V2.value = ''
        return
    }
    if (isNaN(input2Task4V2.value)) {
        alert('Input 2 is not a number')
        input1Task4V2.value = ''
        input2Task4V2.value = ''
        return
    }

    const num1 = Number(input1Task4V2.value)
    const num2 = Number(input2Task4V2.value)
    const operator = selectTask4V2.value
    var result = ''

    if (num2 === 0 && operator === '/') {
        result = "can't divide by 0"
    } else {
        result = eval(`${num1} ${operator} ${num2}`)
    }

    divResultV2.innerText = result
    input1Task4V2.value = ''
    input2Task4V2.value = ''

})


// Задание 5

const crazyButton = document.querySelector('#task5-button')

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    const r = getRandomInteger(0, 255)
    const g = getRandomInteger(0, 255)
    const b = getRandomInteger(0, 255)
    return `rgb(${r},${g},${b})`
}

function rotateRandomDegree() {
    const deg = getRandomInteger(-180, 180)
    return `rotate(${deg}deg)`
}

crazyButton.addEventListener('mouseenter', () => {
    crazyButton.style.backgroundColor = getRandomColor()
})

crazyButton.addEventListener('mouseleave', () => {
    crazyButton.style.transform = rotateRandomDegree()
})


// document.querySelector('div').addEventListener('click', () => alert('hi!'))
// document.querySelector('div').addEventListener('click', () => console.log('hi!'))

// document.querySelector('input').addEventListener('change', () => console.log('sabit'))
// document.querySelector('input').addEventListener('keyup', (event) => console.log(event.key))

// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const input = form.querySelector('.string')
//     console.log(input.value)
//     input.value = ''
// })