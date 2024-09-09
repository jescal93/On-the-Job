function fadeIn(element, delay) {
    setTimeout(function() {
        element.style.opacity = 1;
    }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const heroBox = document.querySelector('.hero-box');
    fadeIn(header, 0);
    fadeIn(heroBox, 1500);
});

document.addEventListener("DOMContentLoaded", function () {
    function fadeIn(element) {
        let opacity = 0;
        element.style.opacity = opacity;

        function increaseOpacity() {
            opacity += 0.01;
            element.style.opacity = opacity;
            if (opacity < 1) {
                requestAnimationFrame(increaseOpacity);
            }
        }
        increaseOpacity();
    }

    const aboutUs = document.querySelector('.about-us');
    const aboutUsImage = document.querySelector('.aboutUsImage');
    fadeIn(aboutUs);
    fadeIn(aboutUsImage);
});

function fadeInElements() {
    const fadeElements = document.querySelectorAll('.content, .wraps div, .sides div, #note');

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 500);
    });
}
window.onload = fadeInElements;

function fadeIn(element, duration) {
    element.style.opacity = 0;

    let opacity = 0;
    const increment = 50 / duration;

    const fadeInterval = setInterval(() => {
        opacity += increment;
        if (opacity >= 1) {
            opacity = 1;
            clearInterval(fadeInterval);
        }
        element.style.opacity = opacity;
    }, 50);
}

document.addEventListener('DOMContentLoaded', function () {
    const h2Element = document.getElementById('h2');
    const pElement = document.querySelector('.favorites');
    const images = document.querySelectorAll('.image1');

    fadeIn(h2Element, 1000);

    setTimeout(() => fadeIn(pElement, 1000), 1000);

    images.forEach((image, index) => {
        setTimeout(() => fadeIn(image, 1000), (index + 2) * 1000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const locationElement = document.querySelector('.location');
    const hoursElements = document.querySelectorAll('.hours li');

    setTimeout(function() {
        locationElement.style.opacity = 1;
    }, 500);

    hoursElements.forEach((element, index) => {
        setTimeout(function() {
            element.style.opacity = 1;
        }, (index + 1) * 500);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const footerElements = document.querySelectorAll('.footer, #copyright');

    function fadeIn(elements) {
        elements.forEach(element => {
            element.style.opacity = 1;
        });
    }

    fadeIn(footerElements);
});
