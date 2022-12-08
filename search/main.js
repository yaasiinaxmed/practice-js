const searchInput = document.querySelector("#search");
const boxContainer = document.querySelector(".boxs");
const items = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", searchItem);
boxContainer.addEventListener("scroll", itemAnimated);

function searchItem() {
    const inputText = searchInput.value.toLowerCase();

    items.forEach(item => {
        const itemText = item.firstChild.textContent;

        if (itemText.toLowerCase().indexOf(inputText) != - 1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        };
    });
};

function itemAnimated() {
    const triggerBottom = window.innerHeight / 5 * 4;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
    
        if (triggerBottom > itemTop) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        };
    });
};