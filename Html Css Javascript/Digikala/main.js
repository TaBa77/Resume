// بنر بالا
const banners = [1, 2, 3];
const banner = document.querySelector(".banner-img");

setInterval(changeBanner, 3000);

let i = 0;

function changeBanner() {
    i++;
    if (i == banners.length + 1) {
        i = 1;
    }
    banner.src = `./image/banner${i}.jpg`;
}

changeBanner();