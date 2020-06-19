$(document).ready(function () {
    //animated-bootstrap-hamburger
    $('.navbar-collapse').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggler').removeClass("active");
    });

    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });
    //-------
});