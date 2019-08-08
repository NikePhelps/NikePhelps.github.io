"use strict";

let slideIndex = 1;
showSlides(slideIndex);

let slideIndex1 = 1;
showSlides1(slideIndex1);

let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides1(m) {
    showSlides1(slideIndex1 += m);
  }

  function plusSlides2(o) {
    showSlides2(slideIndex2 += o);
  }
  

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide1(m) {
    showSlides1(slideIndex1 = m);
  }

  function currentSlide2(o) {
    showSlides2(slideIndex2 = o);
  }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
slides[slideIndex-1].style.display = "block"; 
}

function showSlides1(m) {
    let j;
    let slides1 = document.getElementsByClassName("mySlides1");
    if (m > slides1.length) {slideIndex1 = 1} 
    if (m < 1) {slideIndex1 = slides1.length}
    for (j = 0; j < slides1.length; j++) {
        slides1[j].style.display = "none"; 
    }
  slides1[slideIndex1-1].style.display = "block"; 
  }

  function showSlides2(o) {
    let k;
    let slides2 = document.getElementsByClassName("mySlides2");
    if (o > slides2.length) {slideIndex2 = 1} 
    if (o < 1) {slideIndex2 = slides2.length}
    for (k = 0; k < slides2.length; k++) {
        slides2[k].style.display = "none"; 
    }
  slides2[slideIndex2-1].style.display = "block"; 
  }
