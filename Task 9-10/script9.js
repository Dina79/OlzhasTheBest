// Задание 1
const taskInput = document.querySelector('#task-input')
const tasksList = document.querySelector('#tasks-list')
const addButton = document.querySelector('#add-task')

addButton.addEventListener('click', () => {
    addTask()
})

function addTask() {
    if (taskInput.value !== '') {
        const li = document.createElement('li')
        li.classList.add('list-group-item')

        const div = document.createElement('div')
        div.classList.add('task-descr')

        const checkbox = document.createElement('input')
        checkbox.classList.add('form-check-input', 'me-1')
        checkbox.type = 'checkbox'

        const label = document.createElement('label')
        label.classList.add('form-check-label')
        label.innerText = taskInput.value



        const button = document.createElement('button')
        button.setAttribute('type', `button`)
        button.classList.add('btn', 'btn-danger')
        button.innerText = 'Delete'

        div.append(checkbox, label)
        li.append(div, button)

        tasksList.appendChild(li)
    }
    taskInput.value = ''
}

tasksList.addEventListener('click', e => {
    if (e.target.tagName === 'INPUT') {
        const li = e.target.parentElement.parentElement
        li.classList.toggle('checked')
    }

    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove()
    }
})