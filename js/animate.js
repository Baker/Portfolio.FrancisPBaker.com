$(function() {
   
    $('div.card').on('click', function() {
        $('div.card').addClass('animated rubberband').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberband');
        });
    });
});