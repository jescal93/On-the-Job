document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.hero-1');
    let delay = 1000; // delay between each fade-in (in milliseconds)

    images.forEach((img, index) => {
        img.style.opacity = 0;
        img.style.transition = 'opacity 2s';

        // Delay the fade-in effect based on the index
        setTimeout(() => {
            img.style.opacity = 5;
        }, delay * index);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.about-us > div, .about-us > div > img, .about-p > h2, .about-p > p');
    let delay = 800;

    elements.forEach((element, index) => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 2s';

        setTimeout(() => {
            element.style.opacity = 3;
        }, delay * index);
    });
});
