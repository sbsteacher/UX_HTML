(function() {
    'use strict';

	let MainSwiper = new Swiper('.main_swiper .swiper-container', {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		loop: true
	});

	let SubSwiper2 = new Swiper('.sub_swiper2 .swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true
	});

	let SubSwiper3 = new Swiper('.sub_swiper3 .swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true
	});

	let SubSwiper4 = new Swiper('.sub_swiper4 .swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true
	});
	  
	let SubSwiper5 = new Swiper('.sub_swiper5 .swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true
	});
	
	let textSwiper = new Swiper('#con2_productNm .swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true
	})
	
	// textSwiper.controller.control = textSwiper;
	// MainSwiper.controller.control = MainSwiper;


	// MainSwiper.controller.control = SubSwiper2;
	// MainSwiper.controller.control = SubSwiper3;
	// MainSwiper.controller.control = SubSwiper4;
	// MainSwiper.controller.control = SubSwiper5;

	// SubSwiper2.controller.control = MainSwiper;
	// SubSwiper2.controller.control = SubSwiper3;
	// SubSwiper2.controller.control = SubSwiper4;
	// SubSwiper2.controller.control = SubSwiper5;

	// SubSwiper3.controller.control = MainSwiper;
	// SubSwiper3.controller.control = SubSwiper2;
	// SubSwiper3.controller.control = SubSwiper4;
	// SubSwiper3.controller.control = SubSwiper5;

	// SubSwiper4.controller.control = MainSwiper;
	// SubSwiper4.controller.control = SubSwiper2;
	// SubSwiper4.controller.control = SubSwiper3;
	// SubSwiper4.controller.control = SubSwiper5;
	
	// SubSwiper5.controller.control = MainSwiper;
	// SubSwiper5.controller.control = SubSwiper2;
	// SubSwiper5.controller.control = SubSwiper3;
	// SubSwiper5.controller.control = SubSwiper4;

})();