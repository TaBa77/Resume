const loginBtn = document.querySelector(".login");
const loginMenu = document.querySelector(".login-menu");
const hambergur = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu-box");
const upHamburger = document.querySelector("#up-ham");
const betHamburger = document.querySelector("#bet-ham");
const downHamburger = document.querySelector("#down-ham");

loginBtn.addEventListener("click", openMenu);
hambergur.addEventListener("click", openMobileMenu);

function openMenu() {
    loginMenu.classList.toggle("show-login-menu");
}

function openMobileMenu() {
    mobileMenu.classList.toggle("show-mobile-menu");
    upHamburger.classList.toggle("hamburger-anim-up");
    betHamburger.classList.toggle("hamburger-anim-bet");
    downHamburger.classList.toggle("hamburger-anim-down");
}
