const searchInput = document.querySelector("#search");
const items = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", searchItem);

function searchItem() {
    const inputText = searchInput.value.toLowerCase();

    items.forEach(item => {
        const itemText = item.textContent;

        if (itemText.toLowerCase().indexOf(inputText) != - 1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        };
    });
};