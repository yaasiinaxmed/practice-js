const form = document.querySelector("form");
const input = document.querySelector("input");
const containerTodo = document.querySelector(".tasks");

const todolists = JSON.parse(localStorage.getItem("todo")) || [];

const addTodo = (todoName) => {
    todolists.push({
        name: todoName,
    });

    localStorage.setItem("todo", JSON.stringify(todolists));

    return {todoName};
};

const createTodoEl = ({todoName}) => {
    // create elements
    const divTodo = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const name = document.createElement("span");
    const removeIcon = document.createElement("i");

    // add class Name
    divTodo.classList.add("todo");
    checkIcon.classList.add("bi");
    checkIcon.classList.add("bi-circle");
    removeIcon.classList.add("bi");
    removeIcon.classList.add("bi-trash3-fill");

    // fill name
    name.innerText = todoName;

    div.append(checkIcon, name);
    divTodo.append(div, removeIcon);
    containerTodo.append (divTodo);

    checkIcons(checkIcon, name);
    removeItems(removeIcon,divTodo);

};

todolists.forEach(createTodoEl);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value === '') {
        alert("Fill in the input");
    } else {
        const newTodo = addTodo(input.value);
        createTodoEl(newTodo);
    }

    input.value = '';
});

function checkIcons(checkIcon,name) {
    checkIcon.addEventListener("click", () => {
        if (checkIcon.classList.contains("bi-circle")) {
            checkIcon.classList.replace("bi-circle", "bi-check-circle-fill");
            name.style.textDecoration = 'line-through';
        } else {
            checkIcon.classList.replace("bi-check-circle-fill", "bi-circle");
            name.style.textDecoration = 'none';
        }
    });
};
 
function removeItems(removeIcon,todo) {
    removeIcon.addEventListener("click", () => {
        todo.remove();
        localStorage.removeItem("todo");
    });
};