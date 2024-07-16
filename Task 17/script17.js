async function getData(url) {
    const result = await fetch(url)
    const json = await result.json()
    return json
}

const urlUsers = 'https://jsonplaceholder.typicode.com/users'

const usersList = document.querySelector('#users-list')

async function getUsers() {
    try {
        const data = await getData(urlUsers)
        for (user of data) {
            const userElement = document.createElement('li')
            userElement.innerText = user.name
            usersList.appendChild(userElement)
        }
    } catch (error) {
        console.log(error.message)
    }
}

getUsers()