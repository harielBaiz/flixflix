const btnHamb = document.querySelector("#b-menu");
const nav = document.querySelector(".primary-nav");

//eventos
btnHamb.onclick = toggleMenu;


//funciones
function toggleMenu () {
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }
}