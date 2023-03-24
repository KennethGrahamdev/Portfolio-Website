///////////////////////////////////////////////////////////
// Highlights what section the user is viewing on the navigation bar.
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(scrollY > (sectionTop - sectionHeight/6)) {
      current = section.getAttribute('id')
    }
  })
  navLi.forEach( a => {
    a.classList.remove('active');
    if(a.classList.contains(current)){
      a.classList.add('active')
    }
  })
})
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Lets the user know their message has successfully been sent.
const scriptURL = 'https://script.google.com/macros/s/AKfycbyI1GTO-MyBNlpQqYni93LABLzoZ3cqxfj8LXexF1pfc2SScYX9m4CaJhbKGZoebtWf/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML = "Message Sent"
    setTimeout(function(){
      msg.innerHTML = ""
    },5000)
    form.reset()
  })
    .catch(error => console.error('Error!', error.message))
})
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Sets the current year in the footer section.
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log("currentYear");
yearEL.textContent = currentYear;
///////////////////////////////////////////////////////////
