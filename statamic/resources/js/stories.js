$(document).ready(function() {

  // ------------------------------
  // ----- Favorites
  // ------------------------------

  $(window).on("load", function() {
    let stored_favorites = JSON.parse(localStorage.getItem("favoritedStories"));

    // add filled heart to favorited stories
    $(".favorite-toggle input").each(function() {
      let id = $(this).val();
      if (stored_favorites.includes(id)) {
        $(this).prop("checked", true);
      }
    });

    // only show favorites disclaimer when favorites not empty and favorites mode on and ...
    let is_favorites_mode = $(".favorites-mode-toggle").hasClass("active");
    if (is_favorites_mode && stored_favorites.length > 0) {
      // ... when disclaimer not closed yet
      let is_disclaimer_closed = JSON.parse(localStorage.getItem("isFavoritesDisclaimerClosed"));
      if (!is_disclaimer_closed) {
        $(".favorites-disclaimer").removeClass("hidden");
      }
    }
  });

  // toggle story as favorite
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
    let stored_favorites = JSON.parse(localStorage.getItem("favoritedStories"));
    console.log(stored_favorites);
    const index = stored_favorites.indexOf(new_data);

    if (index > -1) {
      stored_favorites.splice(index, 1);
    } else {
      // merge old and new data
      stored_favorites.push(new_data);
    }
    // push them data to local storage
    localStorage.setItem("favoritedStories", JSON.stringify(stored_favorites));

    // update ui
    checkbox.prop("checked", !checkbox.prop("checked"));
  });

  // toggle favorites mode
  $(".favorites-mode-toggle").on("click", function() {
    const url = new URL(window.location.href);
    let search_params = url.searchParams;

    let stored_favorites = JSON.parse(localStorage.getItem("favoritedStories"));

    if ($(".favorites-mode-toggle").hasClass("active")) {
      search_params.delete("favorite[]");
      // remove statamic page filter, so we go back to page 1
      search_params.delete("page");
      // reload
      url.search = search_params.toString();
      let new_url = url.toString();
      window.location.href = new_url;
    } else {
      if (stored_favorites.length > 0) {
        // add new params
        stored_favorites.forEach(function(item) {
          search_params.append("favorite" + "[]", item);
        });
        // remove statamic page filter, so we go back to page 1
        search_params.delete("page");
        // reload
        url.search = search_params.toString();
        let new_url = url.toString();
        window.location.href = new_url;
      } else {
        // no favorites yet
        $(this).toggleClass("active");
        $(".no-favorites-disclaimer").toggleClass("hidden");
        $(".blog").toggleClass("hidden");
      }
    }
  });

  $(".favorites-disclaimer button").on("click", function() {
    localStorage.setItem("isFavoritesDisclaimerClosed", true);
    $(this).parent().addClass("hidden");
  });

});
