console.log('---------------------TASK_1---------------------')

function User(name) {
    this.name = name
    this.sayHi = function () {
        console.log(`Hi, my name is ${this.name}`)
    }
}

const user1 = new User('Sabit')
console.log(user1)
user1.sayHi()

console.log('---------------------TASK_2---------------------')

function Shop(name, address) {
    this.name = name
    this.address = address
}

const shop1 = new Shop('Green', 'ул. Петра Мстиславца 11, Минск')
const shop2 = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск')
const shops = []
shops.push(shop1, shop2)
console.log(shops)

const addresses = shops.map(shop => shop.address)
console.log(addresses)

console.log('---------------------TASK_3---------------------')

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    sum() {
        return this.num1 + this.num2
    }

    mul() {
        return this.num1 * this.num2
    }
}

const num1 = +prompt('What is num1?')
const num2 = +prompt('What is num2?')

const myCalc = new Calculator(num1, num2)

console.log(myCalc.sum())
console.log(myCalc.mul())
