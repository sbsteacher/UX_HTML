(function() {
    'use strict';

	const swiperList = ['.main_swiper', '.sub_swiper2', '.sub_swiper3', '.sub_swiper4', '.sub_swiper5', '#con2_productNm'];
	const swiperObjList = [];

	swiperList.forEach(item => {
		const swiper = new Swiper(`${item} .swiper-container`, {
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			loop: true
		});
		
		swiperObjList.push(swiper);
				
		let isTouch = false;
		swiper.on('slideChange', function() {
			if(!isTouch) {
				isTouch = false;
				return;
			}
			isTouch = false;			
			swiperObjList.forEach(obj => {
				if(swiper !== obj) {					
					if(swiper.swipeDirection === 'prev') {
						obj.slidePrev();						
					} else {
						obj.slideNext();
					}
				}
			});
		});
		
		swiper.on('touchEnd', function() {
			isTouch = true;			
		});
	});



})();