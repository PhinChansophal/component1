$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times'); // Toggle the icon from bars to times
        $('nav').toggleClass('nav-toggle'); // Corrected syntax to toggle class on nav
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $('#header').css('top','0');

            $('.fa-bars').removeClass('fa-times');
            $('nav').removeClass('nav-toggle')
        }else{
            $('#header').css('top','-100%');
        }
    })
});
