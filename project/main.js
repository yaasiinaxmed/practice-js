const input = document.querySelector("input");
const h2 = document.querySelector("h2");

h2.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup", display);

function display() {
   localStorage.setItem("value", input.value);
   h2.innerHTML = localStorage.getItem("value");
}
