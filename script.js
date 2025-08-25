

const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

navbar.addEventListener("mouseenter", () => {
    menu.style.display = "block";
});

navbar.addEventListener("mouseleave", () => {
    menu.style.display = "block";
});

