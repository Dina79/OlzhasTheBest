fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < 250; i += 10) {
            renderCard(data[i])
        }
    })
    .catch(error => console.error('Error fetching data:', error))



const cardsContainer = document.querySelector('#cards-container')

function renderCard(country) {
    const colElement = document.createElement('div')
    colElement.classList.add('col')
    cardsContainer.appendChild(colElement)

    const cardElement = document.createElement('div')
    cardElement.classList.add('card', 'h-100')
    colElement.appendChild(cardElement)

    const imgElement = document.createElement('img')
    imgElement.classList.add('card-img-top')
    imgElement.src = country.flags.png
    cardElement.appendChild(imgElement)

    const cardBodyElement = document.createElement('div')
    cardBodyElement.classList.add('card-body')
    cardElement.appendChild(cardBodyElement)

    const cardTitleElement = document.createElement('h5')
    cardTitleElement.classList.add('card-title')
    cardTitleElement.innerText = country.name.official
    cardBodyElement.appendChild(cardTitleElement)

    const regionElement = document.createElement('p')
    regionElement.classList.add('card-text')
    regionElement.innerText = country.region
    cardBodyElement.appendChild(regionElement)

    const populationElement = document.createElement('p')
    populationElement.classList.add('card-text')
    const population = (country.population / 1000000).toFixed(1)
    populationElement.innerText = `👨‍👩‍👧‍👦 ${population} mln`
    cardBodyElement.appendChild(populationElement)

    const languageElement = document.createElement('p')
    languageElement.classList.add('card-text')
    const languagesArr = Object.values(country.languages)
    let languagesStr = '🗣️ '
    for (let i = 0; i < languagesArr.length; i++) {
        if (i === languagesArr.length - 1) {
            languagesStr += languagesArr[i]
        }
        else {
            languagesStr += `${languagesArr[i]}, `
        }
    }
    languageElement.innerText = languagesStr
    cardBodyElement.appendChild(languageElement)

    const currencyElement = document.createElement('p')
    currencyElement.classList.add('card-text')
    const currencyArr = Object.values(country.currencies)
    console.log(currencyArr)
    let currencyStr = '💰 '
    for (let i = 0; i < currencyArr.length; i++) {
        if (i === currencyArr.length - 1) {
            currencyStr += `${currencyArr[i].symbol} ${currencyArr[i].name}`
        }
        else {
            currencyStr += `${currencyArr[i].symbol} ${currencyArr[i].name}, `
        }
    }
    currencyElement.innerText = currencyStr
    cardBodyElement.appendChild(currencyElement)

}