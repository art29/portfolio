document.addEventListener("DOMContentLoaded", function (event) {

    let headerHeight = document.querySelector(".mb-auto").clientHeight + 20;

    document.getElementsByTagName("body")[0].style = "margin-top: " + headerHeight + "px";

    let links = document.querySelectorAll(".nav .nav-link")

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", () => {
            Array.from(document.querySelectorAll('.nav .active')).forEach((el) => el.classList.remove('active'));
            links[i].classList.add("active");

            if (location.pathname.replace(/^\//, '') === links[i].pathname.replace(/^\//, '') || location.hostname === links[i].hostname) {

                let target = document.querySelector(links[i].hash)
                let headerHeight = document.querySelector(".mb-auto").clientHeight + 20; // Get fixed header height

                document.getElementsByTagName("body")[0].style = "margin-top: " + headerHeight + "px";

                if (target != undefined) {
                    scrollTo(document.querySelector('html,body'), target.offsetTop - headerHeight, 500)
                    return false;
                }
            }
        })
    }
});



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