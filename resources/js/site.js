// This is all you.
import '../../node_modules/bootstrap/dist/js/bootstrap'

// Nav
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar.fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});