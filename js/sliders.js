/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
//import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
//import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.main-block__slider')) {
		new Swiper('.main-block__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.controll-main-block__dotts',
				clickable: true,
			},
			
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				/*
				//без loop: true
				//получение количества слайдов
				init: function (swiper) {
					const fractionControllAll = document.querySelector('.fraction-controll__all');
					fractionControllAll.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;
									
				},
				//изменение активного слайда
				slideChange: function (swiper) {
					const fractionControlCurent = document.querySelector('.fraction-controll__curent');
					fractionControlCurent.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : swiper.activeIndex + 1;
					
				}*/

				//с loop: true
				//получение количества слайдов
				init: function (swiper) {
					const fractionControllAll = document.querySelector('.fraction-controll__all');//получение количества слайдов
					const slideMainBlock = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');//получение слайдов без дубликата
					fractionControllAll.innerHTML = slideMainBlock.length < 10 ? `0${slideMainBlock.length}` : slideMainBlock.length;//вывод
									
				},
				//изменение активного слайда
				slideChange: function (swiper) {
					const fractionControlCurent = document.querySelector('.fraction-controll__curent');
					fractionControlCurent.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
					
				}
			
			}
		});
	}
		// Перечень слайдеров
		if (document.querySelector('.products-slider')) {
			new Swiper('.products-slider__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				//modules: [Navigation, Pagination],
				
				//effect: 'fade',
				/*autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},*/
				observer: true,
				observeParents: true,
				slidesPerView: 4,
				spaceBetween: 20,
				parallax: true,
				watchOverflow: true,
				//autoHeight: true,
				speed: 800,
				//touchRatio: 0,
				//simulateTouch: false,
				loop: true,
				//preloadImages: false,
				//lazy: true,
				// Dotts
				pagination: {
					el: '.products-slider__dotts',
					clickable: true,
					dynamicBullets: true,
				},
				
				
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
						
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1370: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
				
				on: {
				
				}
			});
		}
		// Перечень слайдеров
		if (document.querySelector('.products-new')) {
			new Swiper('.products-new__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				//modules: [Navigation, Pagination],
				
				//effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				spaceBetween: 20,
				parallax: true,
				watchOverflow: true,
				//autoHeight: true,
				speed: 800,
				//touchRatio: 0,
				//simulateTouch: false,
				loop: true,
				//preloadImages: false,
				//lazy: true,
				// Dotts
				pagination: {
					el: '.products-new__dotts',
					clickable: true,
					dynamicBullets: true,
				},
				
				
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1330: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},
				
				on: {
				
				}
			});
		}
		// Перечень слайдеров
		if (document.querySelector('.thumbs-images')) {
			const thumbsSwiper = new Swiper('.thumbs-images', {
				// Подключаем модули слайдера
				// для конкретного случая
				//modules: [Navigation, Pagination],
				
				//effect: 'fade',			
				observer: true,
				observeParents: true,
				slidesPerView: 4,
				spaceBetween: 16,
				parallax: true,
				watchOverflow: true,
				//autoHeight: true,
				speed: 800,
				//touchRatio: 0,
				//simulateTouch: false,
				loop: true,
				//preloadImages: false,
				//lazy: true,
				// Dotts
				pagination: {
					el: '.products-new__dotts',
					clickable: true,
					dynamicBullets: true,
				},
				
				
				breakpoints: {
					992: {
						slidesPerView: 2,
					},
					1330: {
						slidesPerView: 4,
						spaceBetween: 16,
					},
				},
				
				on: {
				
				}
			});
			new Swiper('.images-product__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				//modules: [Navigation, Pagination],
				
				//effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				thumbs: {
					swiper: thumbsSwiper
				},
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				watchOverflow: true,
				//autoHeight: true,
				speed: 800,
				//touchRatio: 0,
				//simulateTouch: false,
				loop: true,
				//preloadImages: false,
				//lazy: true,
				
				on: {
				
				}
			});
		}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}


initSliders();