$(document).ready(function() {

  // open and close mobile menu
  $(".header_nav_mobile-burger-button").on("click", function () {
      $(this).parent().toggleClass("active");
  });

  // move to sub menu
  $(".header_nav_list .is-parent").on("click", function () {
      $(".header_nav_list .is-parent.active").removeClass("active");
      $(this).toggleClass("active");
      $("#header_nav").addClass("sub-menu-active");
  });

  // move back from sub menu to main menu part
  $( document ).on("click" , ".header_nav_sub_mobile-back-button", function(){
      $("#header_nav").removeClass("sub-menu-active");
  });

  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

  // open and close configure menu of cookie banner
  $(".oreos-form_buttons .configure-button").on("click", function () {
      $(this).addClass("hidden");
      $(".oreos-form_buttons .save-button").removeClass("hidden");
      $(".oreos-form_options").removeClass("hidden");
  });

  // ------------------------------
  // ----- Section Slider – Slick Slider
  // ------------------------------

  $('.section_slider ul').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // ------------------------------
  // ----- Home – All Supporters – Slick Slider
  // ------------------------------

  $('.all-supporters_slick-slider_list').slick({
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});
