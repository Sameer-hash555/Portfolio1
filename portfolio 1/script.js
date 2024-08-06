const menu = document.querySelector("menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.claaslist.toggle("bx-x");
    nav.classList.toggle("active");
}