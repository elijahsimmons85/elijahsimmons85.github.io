$(document).ready(function(){
$("#plist").on('click', function() {//Project button scroll
    $('html, body').animate({
        scrollTop: $("#proj").offset().top - 80
    }, 1000);
    console.log("Scrolling to projects...");
});

$("#aboutNav").on('click', function() {//About button scroll
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 80
    }, 1000);
    console.log("done");
});
})