// This is all you.
jQuery(() => {
    initMenuListeners();
});

// menu mobile buttons
function initMenuListeners() {
    // open and close mobile menu
    $(".header-nav-switch-mobile").on("click", function () {
        $(this).parent().toggleClass("active");
    });

    // move to sub menu
    $(".header-nav-list .is-parent").on("click", function () {
        $(".header-nav-list .is-parent.active").removeClass("active");
        $(this).toggleClass("active");
        $("#header-nav").addClass("sub-menu-active");
    });

    // move back from sub menu to main menu part
    $( document ).on("click" , ".header-nav-sub-back", function(){
        $("#header-nav").removeClass("sub-menu-active");
    });
}
