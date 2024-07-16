// Задание 1

let number = 0

const numberLogInterval = setInterval(function () {
    number++
    if (number > 5) {
        clearInterval(numberLogInterval)
        return
    }
    console.log(`Message No.${number}`)
}, 2000)

// Задание 2

const time = document.querySelector('#time')

setInterval(timeNow, 1000)


function timeNow() {
    const now = new Date()

    const currentHours = now.getHours()
    if (currentHours < 10) {
        currentHours = '0' + currentHours
    }

    const currentMinutes = now.getMinutes()
    if (currentMinutes < 10) {
        currentMinutes = '0' + currentMinutes
    }

    const currentSeconds = now.getSeconds()
    if (currentSeconds < 10) {
        currentSeconds = '0' + currentSeconds
    }

    time.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`
}


// Задание 3

const taskHeaderDiv = document.querySelector('#task-header-div')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')

xhr.send()

xhr.onload = function () {
    const response = xhr.response
    data = JSON.parse(response)

    const header = document.createElement('h1')

    header.innerText = data.title

    taskHeaderDiv.appendChild(header)
}