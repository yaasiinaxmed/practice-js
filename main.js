const links = document.querySelectorAll("header nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let id = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            id = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        document.querySelector('header nav ul li a[href*=' + id +']').classList.add("active");
    })
});