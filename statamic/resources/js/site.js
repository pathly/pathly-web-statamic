// This is all you.
jQuery(() => {
    initMenuListeners();
});

// menu mobile buttons
function initMenuListeners() {
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
}
