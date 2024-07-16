let tasks = []

if (localStorage.tasks) {
    tasks = JSON.parse(localStorage.tasks)
}

const taskInput = document.querySelector('#task-input')
const addButton = document.querySelector('#add-task')
const tasksList = document.querySelector('#tasks-list')

addButton.addEventListener('click', () => {
    if (taskInput.value != '') {
        tasks.push(
            {
                taskText: taskInput.value,
                completed: false,
            })
        localStorage.tasks = JSON.stringify(tasks)
        renderTasks()
    }
    taskInput.value = ''
})

renderTasks()

function renderTasks() {
    tasksList.innerHTML = ""

    const tasksElements = tasks.map(task => {
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        if (task.completed) {
            li.classList.toggle('checked')
        }

        const div = document.createElement('div')
        div.classList.add('task-descr')

        const checkbox = document.createElement('input')
        checkbox.classList.add('form-check-input', 'me-1')
        checkbox.type = 'checkbox'
        checkbox.checked = task.completed

        checkbox.addEventListener('click', () => {
            li.classList.toggle('checked')
            task.completed = !task.completed;
            localStorage.tasks = JSON.stringify(tasks)
        })

        const label = document.createElement('label')
        label.classList.add('form-check-label')
        label.innerText = task.taskText

        const button = document.createElement('button')
        button.setAttribute('type', `button`)
        button.classList.add('btn', 'btn-danger')
        button.innerText = 'Delete'


        button.addEventListener('click', () => {
            tasks = tasks.filter(t => t !== task)
            localStorage.tasks = JSON.stringify(tasks)
            renderTasks()
        })

        div.append(checkbox, label)
        li.append(div, button)

        return li
    })

    tasksList.append(...tasksElements)
}
