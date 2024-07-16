async function getData(url) {
    const result = await fetch(url)
    const json = await result.json()
    return json
}

const apiURL = 'https://open.er-api.com/v6/latest/KZT'
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const result = document.querySelector('#result')

async function renderResult() {
    try {
        const data = await getData(apiURL)
        convert()

        amount.addEventListener('keyup', () => {
            convert()
        })

        currency.addEventListener('change', () => {
            convert()
        })

        function convert() {
            const converted = amount.value * data.rates[currency.value]
            result.innerHTML = converted
        }
    } catch (error) {
        console.log(error.message)
    }
}

renderResult()