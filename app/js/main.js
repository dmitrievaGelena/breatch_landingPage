$(function () {
    $('.box-slider__content').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: ' <button class="slick-arrow prev-arrow"><img src="img/header/prev.png" alt=""></button>',
        nextArrow: ' <button class="slick-arrow next-arrow"><img src="img/header/next.png" alt=""></button>',
      });
      
});

//добавить обработчики на ссылки в header