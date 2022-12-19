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
		
		let beforeIdx = null;
		swiper.on('touchEnd', function() {
			console.log(swiper);
			if((beforeIdx === null && swiper.activeIndex === 0) || swiper.activeIndex === beforeIdx) {
				return;
			}
			beforeIdx = swiper.activeIndex;

			swiperObjList.forEach(obj => {
				if(swiper !== obj) {					
					if(swiper.swipeDirection === 'prev') {
						obj.slidePrev();						
					} else {
						obj.slideNext();
					}
				}
			})		
			
		});
	});



})();