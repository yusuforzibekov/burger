document.addEventListener("DOMContentLoaded", () => {
    setupScrollToTopButton();
    setupBurgerMenu();
    setActiveLinkWithHover();
});

function setupScrollToTopButton() {
    const topButton = document.getElementById('top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            topButton.style.transform = 'scale(1)';
        } else {
            topButton.style.transform = 'scale(0)';
        }
    });

    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


function setupBurgerMenu() {
    const burger = document.querySelector('.header-burger');
    const nav = document.querySelector('.header__nav');
    const links = document.querySelectorAll('.header__link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleBodyOverflow(nav.classList.contains('open'));
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggleBodyOverflow(false);
        });
    });
}

function toggleBodyOverflow(isOpen) {
    if (isOpen) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'visible';
    }
}

function setActiveLinkWithHover() {
    const foodLinks = document.querySelectorAll('.food__link');

    const setActiveClass = (link) => {
        foodLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    };

    foodLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            setActiveClass(link);
        });

        link.addEventListener('click', (event) => {
            event.preventDefault();
            setActiveClass(link);
        });
    });
}