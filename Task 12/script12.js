//Задание 1

console.log('------------------TASK_1------------------')

const names = [
    'Sabit',
    'Zhanat',
    'Gulmira',
    'Ayana',
    'Britney',
]

const [name1, name2, ...namesRest] = names

console.log(`First name in the list is: ${name1}`)
console.log(`Second name in the list is: ${name2}`)

function logNames(names) {
    console.log('The rest of names in the list are:')
    for (name of names) {
        console.log(`-${name}`)
    }
}

logNames(namesRest)


// Задание 2

console.log('------------------TASK_2------------------')

function logThreeNames(name1, name2, name3) {
    console.log(`First three names in the list are: ${name1}, ${name2}, ${name3}`)
}

logThreeNames(...names)


// Задание 3

console.log('------------------TASK_3------------------')

const cat = {
    catName: 'Britney',
    catGender: 'female',
    cataAge: 2,
    catBreed: 'British Shorthair',
    catFurColor: 'Gray',
    catFurPattern: 'Tabby',
    isSterilized: true
}

function getObjectProps(prop1Key, prop2Key, obj) {
    let { [prop1Key]: prop1Value, [prop2Key]: prop2Value, ...propRest } = obj
    if (prop1Value === undefined) {
        prop1Value = 1
    }
    if (prop2Value === undefined) {
        prop2Value = 2
    }
    console.log(`The ${prop1Key} is ${prop1Value}`)
    console.log(`The ${prop2Key} is ${prop2Value}`)

    const fields = Object.keys(propRest)
    console.log(`The rest of properties keys are: ${fields}`)
}

getObjectProps('catName', 'catGender', cat)

console.log('-----------------------------------------')

getObjectProps('catWeight', 'whiskerLength', cat)



// Задание 4

console.log('------------------TASK_4------------------')

function meanScore(...arr) {
    for (num of arr) {
        if (typeof num !== 'number') {
            return 'Все аргументы в вызове функции должны быть числами!'
        }
    }
    let sum = 0
    for (num of arr) {
        sum += num
    }

    const mean = sum / arr.length
    const roundedMean = mean.toFixed(2)

    return mean
}

console.log(meanScore(1, 2, 3, 4, 5))
console.log(meanScore(1, 2, 'a', 4, 5))