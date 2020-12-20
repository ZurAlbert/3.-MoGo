$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight();
        scrollOffset = $(window).scrollTop();

    checkscroll(scrollOffset)

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkscroll(scrollOffset);
    });


    function checkscroll(scrollOffset) {
        if(scrollOffset >= introH ) {
           header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

});