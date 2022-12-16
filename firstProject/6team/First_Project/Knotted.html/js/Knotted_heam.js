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
  
    const desertMenuList = document.querySelectorAll('#o_section3 .bigger .cursor-pointer');
    const desertImgDivList = document.querySelectorAll('#o_section3 .row-image .photo1'); 

    desertMenuList.forEach( (item, i) => {
      item.addEventListener('click',  e => {        
        desertMenuList.forEach(subItem => {
          subItem.classList.toggle('nm', e.target !== subItem);
        });
        desertImgDivList.forEach((subItem, subI) => {          
          subItem.classList.toggle('display-none', i !== subI);
        });
      });
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
