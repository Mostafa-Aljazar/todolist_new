// let arr = window.localStorage.get("arr") || [];
let arr = [
  {
    id: "item-0",
    title: "m 0",
    description: "desc 0",
    time: "2:1 pm",
  },
  {
    id: "item-1",
    title: "m 1",
    description: "desc 1",
    time: "2:1 pm",
  },
  {
    id: "item-2",
    title: "m 2",
    description: "desc 2",
    time: "2:1 pm",
  },
]

function renderToDos() {
  const toDosFragment = new DocumentFragment()

  arr.forEach((item) => {
    const div = document.createElement("div")
    div.className = "todoes__item"
    div.innerHTML = `
    <div class="item__info">
        <h3 class="info__title">${item.title}</h3>
        <p class="info__description">${item.description}</p>
        <p class="info__time">${item.time}</p>
    </div>
    
    <div class="item__icons">
        <span class="icons__edite material-icons">edite</span>
        <span class="icons__remove material-icons">delete</span>
        <input class="icons__done" type="checkbox"></input>
    </div>
    `

    toDosFragment.appendChild(div)
  })

  return toDosFragment
}

function displayToDos() {
  document.querySelector(".addTodo").style.display = "none"
  document.querySelector(".editeTodo").style.display = "none"

  const todos = document.querySelector(".todoes")
  todos.style.display = "flex"

  // to clear todos element
  todos.innerHTML = ""

  // appending todos
  todos.appendChild(renderToDos())
}

displayToDos()

function AddTodo() {
  document.querySelector(".todoes").style.display = "none"
  document.querySelector(".addTodo").style.display = "flex"
  document.querySelector(".editeTodo").style.display = "none"
}

// AddTodo()

function EditeTodo() {
  document.querySelector(".todoes").style.display = "none"
  document.querySelector(".addTodo").style.display = "none"
  document.querySelector(".editeTodo").style.display = "flex"
}

// EditeTodo()

const showTodoes = document.querySelector(".todoHeader__count")

showTodoes.addEventListener("click", (event) => {
  event.preventDefault()
  displayToDos()
  console.log("showTodoes")
})

const AddNew = document.querySelector(".todoHeader__add")

AddNew.addEventListener("click", (event) => {
  AddTodo()
})

// deleteOneTodo ------------------------------------------------
const deleteOneTodo = document.querySelectorAll(".icons__remove")

deleteOneTodo.forEach((Element) => {
  Element.addEventListener("click", (event) => {
    console.log("deleteOneTodo")
    displayToDos()
  })
})

// editeOneTodo ------------------------------------------------
const editeOneTodo = document.querySelectorAll(".icons__edite")
// console.log("count ",editeOneTodo.length)

editeOneTodo.forEach((ele) => {
  console.log("6556")

  ele.onClick = () => {
    console.log("editeOneTodo")
  }
  //   ele.addEventListener("click", (event) => {
  //     event.preventDefault()
  //     document.querySelector(".editeTodo").style.display = "flex";

  //     EditeTodo();
  //     console.log("editeOneTodo");
  //   })
})

// addTodo__btn ------------------------------------------------
const addTodo__btn = document.querySelector(".addTodo__btn")

addTodo__btn.addEventListener("click", (event) => {
  displayToDos()
  console.log("addTodo__btn")
})

// editeTodo__btn ------------------------------------------------
const editeTodo__btn = document.querySelectorAll(".editeTodo__btn")

editeTodo__btn.forEach((Element) => {
  Element.addEventListener("click", (event) => {
    displayToDos()
    console.log("editeTodo__btn")
  })
})

// editeTodo__btn ------------------------------------------------
const icons__done = document.querySelectorAll(".icons__done")

icons__done.forEach((Element) => {
  Element.addEventListener("click", (event) => {
    console.log("icons__done")
  })
})

function getCount() {
  let count = document.querySelector(".todoHeader__count")
  count.innerHTML = `Todo list : ${arr.length}`
}
getCount()
