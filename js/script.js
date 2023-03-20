///////////////////////////////////////////////////////////
// Set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log("currentYear");
yearEL.textContent = currentYear;
///////////////////////////////////////////////////////////
// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Smooth Scroll

// function smoothScroll(target,duration){
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime){
//         if(startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed,startPosition,distance,duration);
//         window.scrollTo(0,run);
//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t* (t - 2) - 1) + b;

//     }

//     requestAnimationFrame(animation);

// }

// var header = document.querySelector('.header')
// header.addEventListener('click',function(){
//     smoothScroll('.about-section', 1000);
// })

// var about_section = document.querySelector('.about-section')
// about_section.addEventListener('click',function(){
//     smoothScroll('.portfolio-section', 1000);
// })
///////////////////////////////////////////////////////////
