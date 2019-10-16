// Need to initalizer the carousel manually see
// https://getbootstrap.com/docs/4.3/components/carousel/
// add it to a variable so we can use it later.

var whyCarousel = $("#whyCarousel");

// using query selector all
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
var whyBtns = document.querySelectorAll("#whyCarouselNav button");

console.log(whyBtns); // Why Button are a NodeList https://developer.mozilla.org/en-US/docs/Web/API/NodeList

// Good old for of loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
for (var i = 0; i < whyBtns.length; i++) {
    // create event listeners for each button click
    whyBtns[i].addEventListener('click', function(evt) {
        for (var c of whyBtns.values()) {
            c.classList.remove("active");
        }
        var el = evt.target || evt.currentTarget;
        el.classList.add("active");
        whyCarousel.carousel(parseInt(el.dataset.slide));
    });
}


// Back to top functionality
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
    }, 15);
}

var toTop = document.getElementById("goto-top");
toTop.addEventListener("click", function(){
  scrollToTop(1000);
});



window.addEventListener('scroll', function(evt) {
    console.log(window.scrollY);
    // finish adding removing classes
    if (window.scrollY > 60) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
});
