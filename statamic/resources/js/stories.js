$(document).ready(function() {

  // ------------------------------
  // ----- Favorites
  // ------------------------------

  $(window).on("load", function() {
    $(".favorite-toggle input").each(function() {
      let stored_data = JSON.parse(localStorage.getItem("favoritedStories"));
      let id = $(this).val();
      if (stored_data.includes(id)) {
        $(this).prop("checked", true);
      }
    });
  });

  $(".favorite-toggle--stories").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    const checkbox = $(this).find("input");
    const new_data = checkbox.val();

    // if nothing stored yet, then store empty array
    if (localStorage.getItem("favoritedStories") == null) {
      localStorage.setItem("favoritedStories", "[]");
    }
    // get stored data
    let stored_data = JSON.parse(localStorage.getItem("favoritedStories"));
    console.log(stored_data);
    const index = stored_data.indexOf(new_data);

    if (index > -1) {
      checkbox.prop("checked", false);
      stored_data.splice(index, 1);
    } else {
      checkbox.prop("checked", true);
      // merge old and new data
      stored_data.push(new_data);
    }

    console.log(stored_data);

    // push them data to local storage
    localStorage.setItem("favoritedStories", JSON.stringify(stored_data));
  });

  $(".favorites-mode").on("click", function() {
    const url = new URL(window.location.href);
    let search_params = url.searchParams;

    let stored_data = JSON.parse(localStorage.getItem("favoritedStories"));

    if ($(".favorites-mode").hasClass("active")) {
      $(".favorites-mode").removeClass("active");
      localStorage.setItem("favoritesMode", false);
      // search_params.delete(item.param_type);
    } else {
      $(".favorites-mode").addClass("active");
      localStorage.setItem("favoritesMode", true);

      stored_data.forEach(function(item) {
        // add new param
        search_params.append("favorite" + "[]", item);
      });
    }

    url.search = search_params.toString();
    let new_url = url.toString();
    window.location.href = new_url;
  });

});
