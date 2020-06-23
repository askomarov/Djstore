$(document).ready(function () {
   $('.promo__slider').slick({
      arrows: true, 		// стрелочки - видно или нет
      dots: false, 			 //пагинация - точки списков
      // adaptiveHeight:true,
      infinite: false,
      // centerMode: true,
      slidesToShow: 1,		 //кол-во слайдов на экране
      slidesToScroll: 1,	 // кол-во слайдов для прокрутки
      speed: 1000, 		 //1000ms - 1 секунда
      easing: 'ease',
      touchTreshhold: 10,
      asNavFor: ".big-slider",
      variableWidth: true,
      responsive: [{
         breakpoint: 600,
         settings: {
            adaptiveHeight: true,
            arrows: false,
            dots: true, 
         }
      }]
   });

   $('.big-slider').slick({
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: ".promo__slider",

   });
});

// $(function () {
//    $('.mypopover').popover({
//       'html': true,
//       title: '<div class="callback-popup__content modal-content block-popup__content"><button type="button" class="popover__close"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" d="M1 1L19 19M19 1L1 19" stroke="#2B2D3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><ul class="block-popup__menu"><li>Очень мягкое звучание.</li><li>Чувствительность — 89 дБ.</li><li>Пиковая мощность — 400 Вт.</li><li>Степень влагозащищенности IP34.</li></ul></div>',


//    })
// })



$(document).ready(function () {
   $('.btn__over').click(function (event) {
      $('.block-popup').toggleClass('showme');
   })
   $('.block-popup__btnclose').click(function () {
      $('.block-popup').removeClass('showme');
   })
});;

document.documentElement.addEventListener("click", function (e) {   //убирает класс active у меню по клику 
   if (!e.target.closest('.popup-body')) {
      $('.block-popup').removeClass('showme');
   }
});

// прячем хедер при прокрутке вниз и показываем при прокрутке вверх
let header = document.querySelector('.header');  /*нашли хедер*/
let scrollPrev = 0;
$(window).scroll(function () {
   var scrolled = $(window).scrollTop();

   if (scrolled > 100 && scrolled > scrollPrev) {
      header.classList.add('out');
   } else {
      header.classList.remove('out');
   }
   scrollPrev = scrolled;
});

// убираем фон у хедера при прокрутке
window.onscroll = function () {            /*функция при прокручивании*/
   if (window.pageYOffset > 100) {				/* если прокрутил больше чем на 200px*/
      header.classList.add('remove-bg');		/*добавялется класс нашей кнопке и она появляется*/
   } else {
      header.classList.remove('remove-bg'); /* если меньше то класс удаляется и кнопка исчезает*/
   }
};


//==== по клику на бургер  Body добавляется класс lock
$(document).ready(function () {
   $('.navbar-toggler').click(function (event) {
      $('body').toggleClass('lock');
   })
});