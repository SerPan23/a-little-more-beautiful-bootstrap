//animated-bootstrap-hamburger
$('.navbar-collapse').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $('.navbar-toggler').removeClass("active");
});
$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });
});
//-------