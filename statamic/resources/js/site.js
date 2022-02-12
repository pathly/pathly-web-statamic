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
  $(document).on("click", ".header_nav_sub_mobile-back-button", function() {
      $("#header_nav").removeClass("sub-menu-active");
  });

  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + "px";
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

  $(".section_slider ul").slick({
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

  $(".all-supporters_slick-slider_list").slick({
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
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

  // ------------------------------
  // ----- Youtube 2 Click Solution
  // ------------------------------

  function get_source_url() {
  	return "{SOURCE}?rel=0&showinfo=0&autoplay=1";
  }

  $(".video_thumbnail_disclaimer_button").on("click", function () {
      var trigger = $(this).parent();
      var wrapper = trigger.parent();
      var layer = wrapper.find(".video_layer");
      console.log(layer);
      var section = wrapper.parent();

      var source = get_source_url();
      var data_source = trigger.attr("data-source");
      source = source.replace("{SOURCE}", data_source);

      layer.css("display", "block");
      layer.find("iframe").attr("src", source);

      wrapper.css("backgroundImage","");
      wrapper.css("height", "auto");
      trigger.hide();
      section.find(".video_thumbnail_disclaimer_text").hide();
  });

  // ------------------------------
  // ----- Change URL Params
  // ------------------------------

  $(".filter_age").on("change", function() {
    // var url = new URL("http://localhost:8080/stories");
    // var search_params = url.searchParams;
    // search_params.append("cancertype", "breastcancer");
    // url.search = search_params.toString();
    // var new_url = url.toString();
    // window.location.href = new_url;
    addState();
  });

  function addState() {
            let stateObj = { id: "100" };

            window.history.pushState(stateObj,
                     "Page 2", "?cancer_type=breastcancer");
        }

  $(".dropdown-button").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    $(this).siblings(".dropdown-select").toggleClass("hidden");

    $(document).one("click", function closeMenu (e) {
      if($(".dropdown-select").has(e.target).length === 0) {
        $(".dropdown-select").addClass("hidden");
      } else {
        $(document).one("click", closeMenu);
      }
    });
  });

  $(".dropdown-select input").on("change", function() {
    var url = new URL(window.location.href);
    var search_params = url.searchParams;

    var new_param_type = $(this).attr("name");
    var new_param = $(this).val();
    var isParamAdded = false;

    console.log(new_param + " " + new_param_type);

    if (new_param === "none") {
      search_params.delete(new_param_type);
    } else {
      // edit existing param
      search_params.forEach(function(value, key) {
        if (key === new_param_type) {
          search_params.set(key, new_param);
          isParamAdded = true;
        }
      });

      // add new param
      if (!isParamAdded) {
        search_params.append(new_param_type, new_param);
      }
    }

    url.search = search_params.toString();
    var new_url = url.toString();
    window.location.href = new_url;
  });

});
