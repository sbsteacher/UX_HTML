(function () {
    'use strict';

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal' ,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    const name1 = document.querySelector('.name1');
    const name2 = document.querySelector('.name2');
    const name3 = document.querySelector('.name3');
    const name4 = document.querySelector('.name4');
    const name5 = document.querySelector('.name5');

    const p1 = document.querySelector('.p1')
    const p2 = document.querySelector('.p2')
    const p3 = document.querySelector('.p3')
    const p4 = document.querySelector('.p4')
    const p5 = document.querySelector('.p5')

    name1.addEventListener('click', ({target}) =>{
        p1.classList = 'photo1';
        p2.classList = 'display-none';
        p3.classList = 'display-none';
        p4.classList = 'display-none';
        p5.classList = 'display-none';
        name1.classList = 'font-color cursor-pointer size-up';
        name2.classList = 'nm cursor-pointer';
        name3.classList = 'nm cursor-pointer';
        name4.classList = 'nm cursor-pointer';
        name5.classList = 'nm cursor-pointer';
    });

    name2.addEventListener('click', ({target}) =>{
        p1.classList = 'display-none';
        p2.classList = 'photo1';
        p3.classList = 'display-none';
        p4.classList = 'display-none';
        p5.classList = 'display-none';
        name1.classList = 'nm cursor-pointer';
        name2.classList = 'font-color cursor-pointer size-up';
        name3.classList = 'nm cursor-pointer';
        name4.classList = 'nm cursor-pointer';
        name5.classList = 'nm cursor-pointer';
    });
    name3.addEventListener('click', ({target}) =>{
        p1.classList = 'display-none';
        p2.classList = 'display-none';
        p3.classList = 'photo1';
        p4.classList = 'display-none';
        p5.classList = 'display-none';
        name1.classList = 'nm cursor-pointer';
        name2.classList = 'nm cursor-pointer';
        name3.classList = 'font-color cursor-pointer size-up';
        name4.classList = 'nm cursor-pointer';
        name5.classList = 'nm cursor-pointer';
    });
    name4.addEventListener('click', ({target}) =>{
        p1.classList = 'display-none';
        p2.classList = 'display-none';
        p3.classList = 'display-none';
        p4.classList = 'photo1';
        p5.classList = 'display-none';
        name1.classList = 'nm cursor-pointer';
        name2.classList = 'nm cursor-pointer';
        name3.classList = 'nm cursor-pointer';
        name4.classList = 'font-color cursor-pointer size-up';
        name5.classList = 'nm cursor-pointer';
    });
    name5.addEventListener('click', ({target}) =>{
        p1.classList = 'display-none';
        p2.classList = 'display-none';
        p3.classList = 'display-none';
        p4.classList = 'display-none';
        p5.classList = 'photo1';
        name1.classList = 'nm cursor-pointer';
        name2.classList = 'nm cursor-pointer';
        name3.classList = 'nm cursor-pointer';
        name4.classList = 'nm cursor-pointer';
        name5.classList = 'font-color cursor-pointer size-up';
    });

    window.onload = function() {
 
        function onClick() {
            document.querySelector('.modal_wrap').style.display ='block';
            document.querySelector('.black_bg').style.display ='block';
        }   
        function offClick() {
            document.querySelector('.modal_wrap').style.display ='none';
            document.querySelector('.black_bg').style.display ='none';
        }
    
        document.getElementById('modal_btn').addEventListener('click', onClick);
        document.querySelector('.modal_close').addEventListener('click', offClick);
    
        };

        const handleScroll = document.querySelector('.handleScroll')

        handleScroll.addEventListener = (e, scroll) => {
            switch (scroll) {
              case 'start': // 마우스 버튼 누르는 경우
                setOriginX(e.clientX);
                setIsScroll(true);
                break;
              case 'end': // 마우스를 버튼 누르기 중단
                setAfterX(position);
                setIsScroll(false);
                break;
              case 'leave': // 마우스가 영역을 벗어난 경우
                setIsScroll(false);
                break;
              default:
                break;
            }
          };
          
          const handleSlide = e => {
            const newPosition = e.clientX - originX + afterX;
            const hiddenLength = e.currentTarget.offsetWidth - 166 * BOOKS.length;
            if (isScroll === false) {
              return;
            }
        
            newPosition < 10 && newPosition > hiddenLength && setPosition(newPosition);
          };
})();
