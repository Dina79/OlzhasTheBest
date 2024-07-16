import { data } from './data.js'

class Button {
    // поля класса:
    constructor(id, label, user) {
        this.id = id
        this.label = label
        this.user = user
    }
    // методы класса:

    onClick() {
        // выводит в консоль имя пользователя
        console.log(this.user.name)
    }

    render() {
        // создает кнопку и присваивает ей id и label из конструктора класса
        const button = document.createElement('button')
        button.id = this.id
        button.innerText = this.label

        // присваивает ей обработчик события onClick (метод класса)
        button.addEventListener('click', () => this.onClick())

        // возвращает созданную кнопку
        document.body.appendChild(button)
    }
}

for (const item of data) {
    const userButton = new Button(item.id, item.label, item.user)
    userButton.render()
}