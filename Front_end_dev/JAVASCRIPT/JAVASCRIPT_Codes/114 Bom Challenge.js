let taskInput = document.querySelector("div.adding-tasks form input[type='text']")
let addTask = document.querySelector("div.adding-tasks form input[type='submit']")
let tasksList = document.querySelector("div.added-tasks")
let tasks = []

// window.localStorage.clear()
if (window.localStorage.list) {
    let taskArray = JSON.parse(localStorage.getItem('list')) || [];
    
    for (let i = 0 ; i < taskArray.length ; i++) {
        newTask = createTask(taskArray[i].title)
        tasksList.appendChild(newTask)
    }
}

addTask.addEventListener("click", (event) => {
    let taskName = taskInput.value
    if (taskName) {
        event.preventDefault()
        newTask = createTask(taskName)
        tasksList.appendChild(newTask)
        taskInput.value = ""
        window.localStorage.setItem('list', JSON.stringify(tasks));
    }
})

tasksList.addEventListener("mouseenter", ()=> {
    if (tasksList.children.length > 0) {
        let deleteButtons = document.querySelectorAll(".added-tasks > div > button")
        deleteButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.currentTarget.parentElement.remove()
            })
        })
    }
})

function createTask(taskName) {
    let newTask = document.createElement("div")
    let taskTitle = document.createElement("h3")
    let deleteButton = document.createElement("button")

    taskTitle.appendChild(document.createTextNode(`${taskName}`))
    deleteButton.appendChild(document.createTextNode("Delete"))

    newTask.style.cssText = `
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0;
    `
    deleteButton.style.cssText = `
        width: 100px;
        background-color: white;
        border: 1px solid #eee;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0;
    `
    deleteButton.style.cssText = `
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #f63434;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    `
    newTask.classList.add(`task-${tasks.length + 1}`)
    newTask.id = `${tasks.length + 1}`
    newTask.appendChild(taskTitle)
    newTask.appendChild(deleteButton)
    tasks.push({
        id: tasks.length + 1,
        title: taskName,
        completed: false,
    })
    deleteButton.addEventListener("click", (e) => {
        tasks = tasks.filter(task => task.id !== parseInt(newTask.id));
        window.localStorage.setItem('list', JSON.stringify(tasks));
        newTask.remove();
    });

    return newTask
}