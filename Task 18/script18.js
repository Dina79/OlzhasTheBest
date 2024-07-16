async function getData(url) {
    const result = await fetch(url)
    const json = await result.json()
    return json
}

const apiURL = 'https://jsonplaceholder.typicode.com/users'
const usersList = document.querySelector('#users-list')
const userCard = document.querySelector('#user-card')
const usersArr = []


async function renderList() {
    try {
        const data = await getData(apiURL)
        data.forEach((user, i) => {
            const liElement = document.createElement('li')
            liElement.classList.add('list-group-item')
            liElement.innerText = user.name
            usersArr.push(liElement)
            usersList.appendChild(liElement)

            if (i === 0) {
                usersArr[0].classList.add('selected')
                renderCard(0)
            }

            liElement.addEventListener('click', () => {
                for (user of usersArr) {
                    user.classList.remove('selected')
                }
                usersArr[i].classList.add('selected')
                userCard.innerHTML = ''
                renderCard(i)

            })

            function renderCard(i) {
                const cardTitleElement = document.createElement('h5')
                cardTitleElement.classList.add('card-title')
                cardTitleElement.innerText = data[i].name
                userCard.appendChild(cardTitleElement)

                const cardSubtitleElement = document.createElement('h6')
                cardSubtitleElement.classList.add('card-subtitle', 'mb-2', 'text-muted')
                cardSubtitleElement.innerText = data[i].username
                userCard.appendChild(cardSubtitleElement)

                const cardTextElement = document.createElement('p')
                cardTextElement.classList.add('card-text')
                cardTextElement.innerText = `Address: ${data[i].address.street}, ${data[i].address.suite}, ${data[i].address.city}, ${data[i].address.zipcode}\nCompany: ${data[i].company.name}`
                userCard.appendChild(cardTextElement)

                const cardLinkElement = document.createElement('a')
                cardLinkElement.classList.add('card-link')
                cardLinkElement.innerText = data[i].email
                userCard.appendChild(cardLinkElement)
            }
        })

    } catch (error) {
        console.log(error.message)
    }
}



renderList()