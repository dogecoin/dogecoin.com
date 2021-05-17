/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
    
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
    
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
    
  })(jQuery); // End of use strict

  function initParticles(){
    particlesJS("particles", {
      "particles": {
        "number": {
          "value": 30,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#bfbbae"
        },
        "shape": {
          "type": "image",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "assets/img/dogecoin-300.png",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#bfbbae",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }


  function enablei18n(setLang) {
   'use strict';
   var i18n = $.i18n();
   var lang = 'en';

   if(setLang == false){
     var sessionLang = sessionStorage.getItem('dgc-lang');
     if(typeof sessionLang == "undefined" || sessionLang == null || sessionLang == "null" || sessionLang == ""){
       var userLang = navigator.language || navigator.userLanguage; 
       if(typeof userLang == "undefined" || userLang == ""){
        userLang = 'en-EN';
      }
      if(userLang.indexOf('-')){
        lang = userLang.split('-')[0];
      }
    }
    else{
      lang = sessionLang;
    }
  }
  else{
    lang = setLang;
  }

  if(lang != 'en' && lang != 'de' && lang != 'fr' && lang != 'es' && lang != 'it' && lang != 'hi' && lang != 'id' && lang!='mr' && lang != 'tr' && lang!='kn' && lang != 'ru'){
    lang = 'en';
  }
  sessionStorage.setItem('dgc-lang', lang);
    
  i18n.locale = lang;
  
  i18n.load('assets/i18n', i18n.locale).done(
    function() {
     $('[data-i18n]').each(function(index) {
      $(this).i18n();
      $(this).html($.i18n($(this).attr('data-i18n')));
    } );
   } );
}
// Enable debug
$.i18n.debug = false;

$(document).ready(function(){

  enablei18n(false);
  initParticles();
  

  $(document).on("click", ".wallet-button", function(){
    $(".wallet-guide-detail").hide();
    $($(this).attr('data-target')).fadeIn();
  });
  $(document).on('click', '.select-lang', function(){
    enablei18n($(this).attr('data-lang'));
    $(".scroll-to-top a").trigger('click');
  });
});

