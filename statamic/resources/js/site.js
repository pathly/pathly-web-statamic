$(document).ready(function() {

  // ------------------------------
  // ----- Menu
  // ------------------------------

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

  // ------------------------------
  // ----- Cookies
  // ------------------------------

  // open and close configure menu of cookie banner
  $(".oreos-form_buttons .configure-button").on("click", function () {
    $(this).addClass("hidden");
    $(".oreos-form_buttons .save-button").removeClass("hidden");
    $(".oreos-form_options").removeClass("hidden");
  });

  // ------------------------------
  // ----- Slick Slider
  // ------------------------------

  $(".card-detail_body .images").slick({
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    autoplay: false,
    speed: 1000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

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
  // ----- Filter – Open Filter Button Options
  // ------------------------------

  $(".dropdown-button").not(".dropdown.mobile .dropdown-button").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    const parent = $(this).parent();

    $(".dropdown:not(.mobile)").not(parent).removeClass("active");
    parent.toggleClass("active");

    $(document).one("click", function closeMenu(e) {
      if($(".dropdown").has(e.target).length === 0) {
        $(".dropdown").removeClass("active");

      } else {
        $(document).one("click", closeMenu);
      }
    });
  });

  // ------------------------------
  // ----- Filter – Open Filter Buttons (Mobile)
  // ------------------------------

  $(".dropdown.mobile .dropdown-button").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    const parent = $(this).parent();
    parent.siblings(".all-dropdowns-wrapper").toggleClass("active");
    parent.toggleClass("active");

    $(document).one("click", function closeMenu(e) {
      if($(".dropdown").has(e.target).length === 0) {
        $(".dropdown").removeClass("active");
        $(".all-dropdowns-wrapper").removeClass("active");
      } else {
        $(document).one("click", closeMenu);
      }
    });
  });

  // ------------------------------
  // ----- Filter – Change URL Params
  // ------------------------------

  $(".dropdown-menu--select input[type=radio]").on("change", function() {
    const param_type = $(this).attr("name");
    const param = $(this).val();

    const params = [
      {
        "param_type": param_type,
        "param": param
      }
    ];

    set_url_params(params);
  });

  $(".dropdown-menu--select input[type=reset]").on("click", function() {
    const param_type = $(this).attr("name");

    const params = [
      {
        "param_type": param_type,
        "param": "none"
      }
    ];

    set_url_params(params);
  });

  $(".dropdown-menu--range input[type=submit]").on("click", function() {
    const sibling_from = $(this).siblings("#from");
    const param_type_from = sibling_from.attr("name");
    const param_from = sibling_from.val();

    const sibling_to = $(this).siblings("#to");
    const param_type_to = sibling_to.attr("name");
    const param_to = sibling_to.val();

    const params = [
      {
        "param_type": param_type_from,
        "param": param_from
      },
      {
        "param_type": param_type_to,
        "param": param_to
      }
    ];

    set_url_params(params);
  });

  $(".dropdown-menu--range input[type=reset]").on("click", function() {
    const dir = $(this).parent().siblings("div");
    const param_type_from = dir.find("#from").attr("name");
    const param_type_to = dir.find("#to").attr("name");

    const params = [
      {
        "param_type": param_type_from,
        "param": "none"
      },
      {
        "param_type": param_type_to,
        "param": "none"
      }
    ];

    set_url_params(params);
  });

  function set_url_params(params) {
    const url = new URL(window.location.href);
    let search_params = url.searchParams;

    params.forEach(function(item) {
      let is_param_added = false;

      if (item.param === "none") {
        // reset/delete param
        search_params.delete(item.param_type);
      } else {
        // edit existing param
        search_params.forEach(function(value, key) {
          if (key === item.param_type) {
            search_params.set(key, item.param);
            is_param_added = true;
          }
        });

        // add new param
        if (!is_param_added) {
          search_params.append(item.param_type, item.param);
        }
      }
    });

    // remove statamic page filter, so we go back to page 1
    search_params.delete("page");

    url.search = search_params.toString();
    let new_url = url.toString();
    window.location.href = new_url;
  }

});
