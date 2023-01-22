// Navbar
const navBar = document.querySelector("nav");
const navBtn = document.querySelectorAll('.nav-btn')
const navContainer = document.querySelector('.nav-container')

window.addEventListener("scroll", function () {
  navBar.classList.toggle("active", window.scrollY > 0);
});

navBtn.forEach((el) => {
    el.addEventListener('click', function() {
        navContainer.querySelector('.active').classList.remove('active');

        el.classList.add('active')
    })
})

// Hamburger Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav .container-nav-theme ul')

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('klik')
  if(menuToggle.classList.contains('klik')) {
    navUl.style.right = '0px'
  } else {
    navUl.style.right = '-250px'
  }
})


// Light & Dark Theme
// const icon = document.getElementById('icon');

// icon.addEventListener('click', function() {
//   document.body.classList.toggle('light-theme')
// })

// Parallax Image Scroll
// const imgHome = document.querySelector('.home');

// window.addEventListener('scroll', () => {
//   let scroll = window.pageYOffset;

//   let speed = imgHome.dataset.speed;
//   imgHome.style.transform = `translateY(${scroll * speed}px)`
//   imgHome
// })


// Input
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;


  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// Alert
// $("button").click(function () {
//   $(".alert").addClass("show");
//   $(".alert").removeClass("hide");
//   $(".alert").addClass("showAlert");
//   setTimeout(function () {
//     $(".alert").removeClass("show");
//     $(".alert").addClass("hide");
//   }, 5000);
// });
// $(".close-btn").click(function () {
//   $(".alert").removeClass("show");
//   $(".alert").addClass("hide");
// });


// Send Google Sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbyoVE28XH3Zfnp3vyXGtRZMVqqIRDNK-I1OxI9JHko1UNHWvbtxYDT6BVtFHg4YUOGY/exec";
const form = document.forms["portfolio-contact-form"];
const btnKirim = document.querySelector(".contact-btn");
const alert = document.querySelector(".alert");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          $('.alert').addClass("show");
          $('.alert').removeClass("hide");
          $('.alert').addClass("showAlert");
          setTimeout(function(){
              $('.alert').removeClass("show");
              $('.alert').addClass("hide");
          },5000);
          $('.close-btn').click(function(){
              $('.alert').removeClass("show");
              $('.alert').addClass("hide");
          });
          form.reset();
          console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
});