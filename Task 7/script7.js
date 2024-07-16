// Задание 1

console.log('------------------TASK_1------------------')

console.log(navigator)
console.log(location)
console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.appCodeName} я открыл страничку ${location.href} `)



// Задание 2
console.log('------------------TASK_2------------------')

const list = document.querySelectorAll('#list li')

console.log('------------------2.1------------------')

for (item of list) {
    console.log(item.innerText)
}

console.log('------------------2.2------------------')

list.forEach((item, index) => {
    item.innerText = index
    console.log(item.innerText)
})



// Задание 3

const forRemoveItems = document.querySelectorAll('.forRemove')

for (item of forRemoveItems) {
    item.remove()
}


// Задание 4

const newParagraph = document.createElement('p')
newParagraph.innerText = 'This paragraph is added using JS'
newParagraph.style.fontSize = '36px'
newParagraph.style.fontWeight = 'bold'

document.body.append(newParagraph)



//Задание 5
console.log('------------------TASK_5------------------')

const createNewElement = (tag, color, content) => {
    newElement = document.createElement(tag)
    newElement.style.color = color
    newElement.innerText = content
    console.log(newElement)
    document.body.append(newElement)
}

createNewElement('a', 'red', 'testLink')
createNewElement('p', 'blue', 'testParagraph')
createNewElement('p', 'blue', 'testParagraph')


// Задание 6
const yearSelect = document.querySelector('#year-select')

for (i = 1960; i <= 2020; i++) {
    const year = document.createElement('option')
    year.innerText = `${i}`
    yearSelect.append(year)
}


// Задание 7

const clients = [
    { name: "Женя", order: true },
    { name: "Кристина", order: true },
    { name: "Павел", order: false },
    { name: "Виолетта", order: false },
    { name: "Костя", order: true }
]

const clientsList = document.querySelector('#clients')

for (client of clients) {
    const clientStatus = document.createElement('li')
    const orderStatus = client.order ? 'оплатил(а)' : 'отменил(а)'
    clientStatus.innerText = `Клиент ${client.name} ${orderStatus} заказ`
    clientsList.append(clientStatus)
}



// Задание 8

let linksArr = [
    'https://www.amazon.com/',
    'https://www.youtube.com/',
    'https://devby.io/',
    'https://www.google.com/',
    'https://apple.com/'
]

const newDiv = document.createElement('div')
newDiv.style.backgroundColor = 'yellow'
newDiv.style.padding = '20px'

for (link of linksArr) {
    const newLink = document.createElement('a')
    newLink.href = link
    newLink.innerText = link
    newLink.target = '_blank'
    newLink.style.display = 'block'
    newDiv.append(newLink)
}

document.body.append(newDiv)



// Задание 9


const users = [
    { name: 'Mark', age: 12 },
    { name: 'Olga', age: 30 },
    { name: 'Tom', age: 25 },
    { name: 'Den', age: 43 },
    { name: 'Den', age: 43 }
]

const fillTable = (arr, tableID) => {
    const table = document.querySelector(tableID)
    const tableHeader = document.createElement('tr')
    for (key in arr[0]) {
        const columnName = document.createElement('th')
        columnName.innerText = key
        tableHeader.append(columnName)
    }
    table.append(tableHeader)
    for (item of arr) {
        const tableRow = document.createElement('tr')
        for (key in item) {
            const tableData = document.createElement('td')
            tableData.innerText = item[key]
            if (key === 'name') {
                tableData.style.color = 'blue'
            }
            if (key === 'age') {
                tableData.style.color = 'red'
            }
            tableRow.append(tableData)
        }
        table.append(tableRow)
    }
}

fillTable(users, '#users-table')





// console.log('------------------NOTES------------------')

// // // search element by ID
// const customItem = document.getElementById('custom-item')
// console.log(customItem)

// // // search all elements by class, creates HTML-collection (pseudo array)
// const selectedItems = document.getElementsByClassName('selected')
// console.log(selectedItems)

// // // search all elements by tag, creates HTML-collection (pseudo array)
// const paragraphs = document.getElementsByTagName('p')
// console.log(paragraphs)



// const headers = document.querySelectorAll('h2, h1')
// console.log(headers)

// const firstLi = document.querySelector('ul li:first-child')
// console.log(firstLi)

// const blockTitle2 = document.querySelector('.block-title2')
// console.log(blockTitle2)



// customItem.style.fontSize = '50px'
// customItem.style.color = 'red'

// console.log(customItem.innerText) // text content of element
// console.log(customItem.textContent)

// customItem.innerText = 'Hello'
// customItem.innerText = ''


// // // Interactions with iterable objects (pseudo arrays)

// for (element of selectedItems) {
//     element.style.backgroundColor = 'yellow'
// }

// headers.forEach(el => el.textContent = 'New Heading')

// // blockTitle2.remove()

// const link = document.createElement('a')
// link.href = 'htpps://google.com'
// link.setAttribute('target', '_blank')
// link.style.color = 'violet'
// link.style.textDecoration = 'none'
// link.innerText = 'click me'

// document.body.append(link)

// console.log(link)

// const forAdding = document.querySelector('.forAdding')

// const button = document.createElement('button')
// button.innerText = 'My Button'

// forAdding.append(button)