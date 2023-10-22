

const sidebar = document.querySelector('.sidebar-more');
const sidebarWindow = document.querySelector('.sidebar-window');
const section = document.querySelector('.section-parent'); // Parent section
const carouselArea = document.querySelector('.carousel-area');


function showSidebarWindow() {
    sidebarWindow.style.display = 'block';
}


function hideSidebarWindow() {
    sidebarWindow.style.display = 'none';
}


function showCarouselArea() {
    carouselArea.style.display = 'block';
}


function hideCarouselArea() {
    carouselArea.style.display = 'none';
}


sidebar.addEventListener('mouseover', () => {
    showSidebarWindow();
    hideCarouselArea();
});

section.addEventListener('mouseleave', () => {
    hideSidebarWindow();
    showCarouselArea();
});






const vipCardArea = document.getElementById("vip-card-area");

let startX = 0;
let scrollLeft = 0;
let isScrolling = false;

vipCardArea.addEventListener("mousedown", (e) => {
    isScrolling = true;
    startX = e.pageX - vipCardArea.offsetLeft;
    scrollLeft = vipCardArea.scrollLeft;
});

vipCardArea.addEventListener("mousemove", (e) => {
    if (!isScrolling) return;
    const x = e.pageX - vipCardArea.offsetLeft;
    const walk = x - startX;
    vipCardArea.scrollLeft = scrollLeft - walk;
});

vipCardArea.addEventListener("mouseup", () => {
    isScrolling = false;
});

vipCardArea.addEventListener("mouseleave", () => {
    isScrolling = false;
});





const gallery = document.querySelector('.gallery');

let isDown = false;
let startP;
let forScroll;

gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    gallery.classList.add('active');
    startP = e.pageX - gallery.offsetLeft;
    forScroll = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.classList.remove('active');
});

gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.classList.remove('active');
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startP) * 2;
    gallery.forScroll = forScroll - walk;
});









document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new swiper('.swiper-container2', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});






function startScrolling() {
    const container = document.querySelector('.shop-imgs');
    const speed = 1;

    function step() {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
        }
    }

    let scrollingInterval = setInterval(step, 20);

    container.addEventListener('mouseenter', () => {
        clearInterval(scrollingInterval);
    });

    container.addEventListener('mouseleave', () => {
        scrollingInterval = setInterval(step, 20);
    });
}

startScrolling();






