// ===== Автоматическое скрытие меню (хеадера) при скролле вниз и появление при скролле вверх =====//

jQuery(document).ready(function ($) {
	var mainHeader = $('.auto-hide-header'),
		headerHeight = mainHeader.height();

	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 5,
		scrollOffset = 150;

	$(window).on('scroll', function () {
		if (!scrolling) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function () {
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		(mainHeader.length > 0)
		checkSimpleNavigation(currentTop);

		previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
		if (previousTop - currentTop > scrollDelta) {
			//if scrolling up...
			mainHeader.removeClass('is-hidden');
		} else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
			//if scrolling down...
			mainHeader.addClass('is-hidden');
		}
	}

});

// ===== Автоматическое скрытие меню (хеадера) при скролле вниз и появление при скролле вверх_end =====//


// ===== Кнопка прокрутки в начало =====//

$(document).ready(function() {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-to-top').addClass('visible');
		} else {
			$('.scroll-to-top').removeClass('visible');
		}
	});

});

// ===== Кнопка прокрутки в начало_end =====//


// ===== Плавная прокрутка в начало для кнопки наверх =====//

$(document).ready(function() {

	$(function () {
		$('.scroll-to-top').click(function () {
			$('body,html').animate({ scrollTop: 0 }, 500);
		});
	});

});

// ===== Плавная прокрутка в начало для кнопки наверх_end =====//


// ===== Отображение (появление) секций при скролле_start =====//

$(document).ready(function() {

	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.sec-solutions, .sec-functional__shop-inner, .sec-functional__corp-inner, .sec-functional__catalog-inner, .sec-assembly, .sec-step-1, .sec-step-2, .sec-step-3, .sec-step-4').each(function() {

			var self = $(this),

			height = self.offset().top + 50;

			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('active')
			}
		});
	});
});

// ===== Отображение (появление) секций при скролле_end =====//


// ===== Магнифик-попап, модальные окна_start =====//

$(document).ready(function() {
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});

// ===== Магнифик-попап, модальные окна_end =====//


// ===== Сворачивание содержимого таблицы_start =====//

$(document).ready(function() {

	$('.table__line').click(function() {

		$(this).toggleClass('table__line-visibility').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"](300);
		// Показ/скрытие содержимого строки при клике

		$('.table__line-cell-text', this).toggleClass('table__line-cell-text_active');
		// Активный заголовок при клике

		$('.table__line-cell_btn-collapse', this).toggleClass('table__line-cell_btn-collapse-active');
		// Положение стрелки-up-down при клике

	});

});

// ===== Сворачивание содержимого таблицы_end =====//


// ===== Слайдер. Настройки плагина OwlCarousel_start =====//

$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
			0:{
					items:1
			},
			600:{
					items:1
			},
			1000:{
					items:1
			}
    }
	});
});

// ===== Настройки плагина OwlCarousel_end =====//


// ===== Сворачивание содержимого блока_start =====//

$(document).ready(function() {

	$('.sec-ready__btn-expand-curtail').click(function() {

		$(this).toggleClass('sec-ready__btn-expand');
		//  Изменение "Плюса" на "Крест"

		$('.btn-expand-curtail__img-icon', this).toggleClass('btn-expand-curtail__img-icon-expand');
		//  Изменение цвета для закрывающей кнопки

		$(this).prev('.inner-plus__text-block').toggleClass('inner-plus__text-block-expand');
		// Изменение высоты блока с текстом при клике на кнопку

	});

});

// ===== Сворачивание содержимого блока_end =====//