// Анимация проигрывается при скролле
var animationStared = false;

$(window).scroll(function() {
    if (animationStared) return;
    if ($(window).scrollTop() + $(window).height() > $('svg').height() + $('svg').offset().top) {
        $('#myanim')[0].beginElement();
        animationStared = true
    }
});

//счетчик цифр
$(function() {

    var target_block = $(".text-anim"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 100}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

$(function() {

    var target_block = $(".text-anim3"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 95}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

$(function() {

    var target_block = $(".text-anim4"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 90}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

$(function() {

    var target_block = $(".text-anim5"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 70}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim5").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

$(function() {

    var target_block = $(".text-anim6"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 60}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim6").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

$(function() {

    var target_block = $(".text-anim7"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 75}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim7").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

$(function() {

    var target_block = $(".text-anim8"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 80}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim8").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

$(function() {

    var target_block = $(".text-anim10"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

        if(scrollEvent && blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 50}, {

                duration: 2000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",

                step: function(val) {

                    $(".text-anim10").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }

            });

        }

    });

});

//Слайдер
var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Анимация заголовков
AOS.init();

// подключение форм

let rowForm = document.querySelector('.row__form');
document.querySelector('.row__message').addEventListener('click', ()=>{
    rowForm.style.display = 'block';
});

rowForm.querySelector('.form__close').addEventListener('click', ()=>{
    rowForm.style.display = 'none';
});

let titleForm = document.querySelector('.title__form');
document.querySelector('.title__basic').addEventListener('click', ()=>{
    titleForm.style.display = 'block';
});

titleForm.querySelector('.form__close').addEventListener('click', ()=>{
    titleForm.style.display = 'none';
});

// Валидация формы

$(".title__form").validate({
    errorClass: "invalid",
    rules: {
        // simple rule, converted to {required:true}
        name: {
            required: true,
            minlength: 2
        },
        // compound rule
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            tel: true
        }
    },
    messages: {
        name: {
            required: "Имя и Фамилия обязательны",
            minlength: "Имя не короче двух букв"
        },
        email: {
            required: "Обязательно введите email",
            email: "Введите в формате name@domain.com"
        },
        tel: {
            required: "Телефон обязателен"
        }
    }
});

$(".row__form").validate({
    errorClass: "invalid",
    rules: {
        // simple rule, converted to {required:true}
        name: {
            required: true,
            minlength: 2
        },
        // compound rule
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            tel: true
        }
    },
    messages: {
        name: {
            required: "Имя и Фамилия обязательны",
            minlength: "Имя не короче двух букв"
        },
        email: {
            required: "Обязательно введите email",
            email: "Введите в формате name@domain.com"
        },
        tel: {
            required: "Телефон обязателен"
        }
    }
});

// маска для телефона
$('[type=tel]').mask('+7(000) 000-0000');

// Смена цвета фона у страницы
$(window).ready(function (){
    var wHeight = $(window).height();

    $('.slide')
        .height(wHeight)
        .scrollie({
            scrollOffset: -500,
            scrollingInView: function (elem){
                var bgColor = elem.data('background');

                $('body').css('background-color', bgColor);

            }
        });
});

