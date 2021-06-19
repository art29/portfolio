document.addEventListener("DOMContentLoaded", function (event) {

    let links = document.querySelectorAll(".nav-link")

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", () => {
            Array.from(document.querySelectorAll('.nav-link.active')).forEach((el) => el.classList.remove('active'));
            links[i].classList.add("active");

            let target = document.querySelector(links[i].hash)
            if (target !== undefined) {
                scrollTo(document.querySelector('html,body'), target.offsetTop - document.querySelector(".navbar").clientHeight - 10, 200)
                return false;
            }
        })
    }
});

// TODO: Remove the anchor thing and find a better way

// Based on : https://gist.github.com/andjosh/6764939 and the gist comments

function scrollTo(element, to = 0, duration= 1000, scrollToDone = null) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = (() => {

        currentTime += increment;

        const val = Math.easeInOutQuad(currentTime, start, change, duration);

        element.scrollTop = val;

        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        } else {
            if (scrollToDone) scrollToDone();
        }
    });

    animateScroll();
};

Math.easeInOutQuad = function (t, b, c, d) {

    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};