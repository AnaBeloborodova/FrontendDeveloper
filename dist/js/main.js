// Анимация проигрывается при скролле
var animationStared = false;

$(window).scroll(function() {
    if (animationStared) return;
    if ($(window).scrollTop() + $(window).height() > $('svg').height() + $('svg').offset().top) {
        $('#myanim')[0].beginElement();
        animationStared = true
    }
});
