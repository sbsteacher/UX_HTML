    'use strict'

    const swiper = new Swiper('.swiper_01', {
        direction: 'horizontal',
        loop: true,  //무한스크롤//

        slidesPerView: 2.5,
        spaceBetween: 150,
        freeMode: true,
        
         autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
      
    });

    new Swiper('.swiper_02', {
      direction: 'horizontal',
      loop: true,  //무한스크롤//

      slidesPerView: 2,
      freeMode: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
    
    });

    new Swiper('.swiper_03', {
      direction: 'horizontal',
      loop: true,  //무한스크롤//

      slidesPerView: 1,
      freeMode: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
    
    });


    //상단버튼//
    const topBtn = document.querySelector(".gototop");
      topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });  
      };

    //하단버튼//
    const $bottomBtn = document.querySelector(".gotodown");

      $bottomBtn.onclick = () => {
      window.scrollTo({ top: document.body.scrollHeight-1000, behavior: "smooth" });
    };

    //필터 드롭다운//
    function dp_menu_02(){
      let click = document.getElementById("drop-content_sort");
      if(click.style.display === "none"){
          click.style.display = "block";
          document.getElementById(this.id + '-toggle').textContent = '+';
      }else{
          click.style.display = "none";
          document.getElementById(this.id + '-toggle').textContent = '-';
      }
    }
    items.forEach(item => item.addEventListener('click', dp_menu_02));

    function dp_menu_01(){
      let click01 = document.getElementById("drop-content_filter");
      if(click01.style.display === "none"){
          click01.style.display = "block";

      }else{
          click01.style.display = "none";

      }
    }