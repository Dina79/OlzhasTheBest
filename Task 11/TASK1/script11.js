// TASK 1

const body = document.querySelector('body')
const pics = document.querySelectorAll('#pic')

let bg = {
    index: 0,
    url: `url(${getBg(pics[0])})`
}

if (localStorage.bg) {
    bg = JSON.parse(localStorage.bg);
    console.log(bg)
}

body.style.backgroundImage = bg.url
pics[bg.index].classList.add('selected')

pics.forEach((pic, i) => {
    pics[i].addEventListener('click', () => {
        for (pic of pics) {
            pic.classList.remove('selected')
        }
        body.style.backgroundImage = `url(${getBg(pics[i])})`
        pics[i].classList.add('selected')
        bg.index = i
        bg.url = `url(${getBg(pics[i])})`
        localStorage.bg = JSON.stringify(bg)
    })
})

function getBg(from) {
    return from.getAttribute('src')
}