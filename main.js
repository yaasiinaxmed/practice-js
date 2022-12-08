const links = document.querySelectorAll("header nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let id = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop) {
            id = section.getAttribute("id");
        }
    });
});