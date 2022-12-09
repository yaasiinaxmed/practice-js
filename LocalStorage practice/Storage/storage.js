const input = document.querySelector("input");
const text = document.querySelector(".text");
const btn = document.querySelector("button");
const savedStorage = localStorage.getItem("text");

if(savedStorage) {
    text.innerText = savedStorage;
}

input.addEventListener("input", () => {
    if (input.value === '') {
        text.innerText = "Text";
    } else {
        text.innerText = input.value;
    }
});

const saveStorage = () => {
    localStorage.setItem("text", text.innerText);
}

btn.addEventListener("click", saveStorage);