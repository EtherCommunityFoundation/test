$(function () {
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        sTop = parseInt(sTop);
        if (sTop >= 96) {
            $('.headerFixed').addClass("headerShadow")
        }
        else {
            $('.headerFixed').removeClass("headerShadow")
        }
    });

    $("#language").selectpick({
        container: '.lan2', onSelect: function (value, text) {
        }
    });
})