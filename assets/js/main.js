;
(function ($) {
    "use strict";
    jQuery(document).ready(function () {

        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });

        // == Search Bar== //
        if ($('.search-icon').length) {
            $('.search-icon').on('click', function () {
                $('.search-form').toggleClass('show');
            });
        }

        // == Hero Slider== //
        if ($('.hero-slider').length) {
            var swiper = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.arr-right',
                    prevEl: '.arr-left',
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.slide-content h1, .slide-content p, .slide-content a').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".hero-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

        // == Testimonial Slider== //
        if ($('.test-slider').length) {
            var swiper = new Swiper('.test-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 1200,
                loop: true,
                pagination: {
                    el: '.test-pagination',
                    clickable: true
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.testimonials .test-img, .testimonials h5, .testimonials span, .testimonials p').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".test-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

       
        if ($('.clients-slider').length) {
            var swiper = new Swiper('.clients-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                slidesPerView: 5,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    576: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 1
                    }
                }
            });

            $(".clients-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }

        // == Light Gallery== //
        if ($('#lightgallery').length) {
            $("#lightgallery").lightGallery();
        }
    });

    jQuery(window).on('load', function () {
        // == Animate loader off screen == //
        $(".css-loader").fadeOut("slow");
        AOS.init({
            disable: 'mobile'
        });

    });
})(jQuery)
var archi=document.querySelector("#archi");
var archi_btn=document.querySelector("#archi_btn");
archi_btn.addEventListener("click", function(){
    archi.style.display=" block";
    music.style.display="none";
    design.style.display="none";
    nature.style.display="none";
})

var archi_back_btn=document.querySelector("#archi_back_btn");
archi_back_btn.addEventListener("click", function(){
    archi.style.display="none";})


    var music=document.querySelector("#music");
var music_btn=document.querySelector("#music_btn");
music_btn.addEventListener("click", function(){
    music.style.display=" block";
archi.style.display="none";
design.style.display="none";
nature.style.display="none";
})

var music_back_btn=document.querySelector("#music_back_btn");
music_back_btn.addEventListener("click", function(){
    music.style.display="none";})

    var design=document.querySelector("#design");
var design_btn=document.querySelector("#design_btn");
design_btn.addEventListener("click", function(){
    design.style.display=" block";
    music.style.display="none";
    archi.style.display="none";
    nature.style.display="none";
})

var design_back_btn=document.querySelector("#design_back_btn");
design_back_btn.addEventListener("click", function(){
    design.style.display="none";})

    var nature=document.querySelector("#nature");
var nature_btn=document.querySelector("#nature_btn");
nature_btn.addEventListener("click", function(){
    nature.style.display=" block";
    music.style.display="none";
    archi.style.display="none";
    design.style.display="none";
})

var nature_back_btn=document.querySelector("#nature_back_btn");
nature_back_btn.addEventListener("click", function(){
    nature.style.display="none";})



    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
      
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });


