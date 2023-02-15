// swiper
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
});

//swiper 2
var swiper = new Swiper(".mySwiper_2", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
  });


  // swiper 3
  var swiper = new Swiper(".mySwiper_3", {
    slidesPerView: 6,
    spaceBetween:30 ,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },
  });


// js
  var slideIndex = 1;
  
showSlides(slideIndex); 

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  
  var i;
  var slides = document.getElementsByClassName("mySlides_4");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}


