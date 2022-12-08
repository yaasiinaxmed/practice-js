const navTabs = document.querySelectorAll(".nav span");
const tabs = document.querySelectorAll(".tabs div");

navTabs.forEach(nav => {
    const navId = nav.getAttribute("id");

    nav.classList.remove("active");

    tabs.forEach(tab => {
        const tabId = tab.getAttribute("id");

        if (navId === tabId) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
    })
})