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

  $(".favorites-mode-toggle").on("click", function() {
    const url = new URL(window.location.href);
    let search_params = url.searchParams;

    let stored_data = JSON.parse(localStorage.getItem("favoritedStories"));

    if ($(".favorites-mode-toggle").hasClass("active")) {
      search_params.delete("favorite[]");
      url.search = search_params.toString();
      let new_url = url.toString();
      window.location.href = new_url;
    } else {
      if (stored_data.length > 0) {
        // add new params
        stored_data.forEach(function(item) {
          search_params.append("favorite" + "[]", item);
        });
        // reload
        url.search = search_params.toString();
        let new_url = url.toString();
        window.location.href = new_url;
      } else {
        // no favorites yet
        $(this).toggleClass("active");
        $(".blog .favorites-disclaimer").toggleClass("hidden");
        $(".blog .tiles").toggleClass("hidden");
        $(".blog .pagination").toggleClass("hidden");
      }
    }
  });

});
