

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}




var slideIndex = 1;
showSlides(slideIndex);
function changeSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
  var dots = document.getElementsByClassName("Navdot");
  if (n > slides.length) {
     slideIndex = 1;
  }
  if (n < 1) {
     slideIndex = slides.length;
  }
  Array.from(slides).forEach(item => (item.style.display = "none"));
  Array.from(dots).forEach(
     item => (item.className = item.className.replace(" selected", ""))
  );
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " selected";
}
window.addEventListener("scroll" , function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky" , window.scrollY > 0);

})