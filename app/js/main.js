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
  $('.description__slider').slick({

  });
  const btn = document.querySelector('.catalog_btn'),
    link = document.querySelector('.catalog__links');

  console.log(btn);
  btn.addEventListener('click', () => {
    link.classList.toggle('catalog__links-active');
  });


});

//добавить обработчики на ссылки в header