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
    //items.forEach(item => item.addEventListener('click', dp_menu_02));
    const $divFilter = document.querySelector('#drop-content_filter');
    const $filterItemList = $divFilter.querySelectorAll('li');
    
    $filterItemList.forEach(item => {
      item.addEventListener('click', e => {
        dp_menu_01();
      });
    });

    function dp_menu_01(){      
      if($divFilter.style.display === "none"){
        $divFilter.style.display = "block";
      } else {
        $divFilter.style.display = "none";
      }
    }

    let catalogItem = null;
    function getData() {
      fetch('js/catalog.json')
      .then(res => res.json())
      .then(result2 => {
        catalogItem = result2;
      });

      fetch('js/product.json')
      .then(res => res.json())
      .then(result => {
        console.log(result);
        makeList(result);
      });
    }

    function makeList(items) {
      items.forEach((item, idx) => {
        if(idx === 8) {
          const catalogResult = makeCatalog(catalogItem);
          $gridContainer.appendChild(catalogResult);
        }
        const result = makeItem(item);
        $gridContainer.appendChild(result);
      });
    }

    function makeCatalog(item) {
      const div = document.createElement('div');
      div.classList.add('catalog')
      div.innerHTML = `
          <a href="">
              <div class="catalog_img">
                  <img src="${item.img}" alt="">
              </div>
              <div class="catalog_text">
                  <p>${item.text_1}</p>
                  <p>${item.text_2}</p>
                  <p>${item.text_3}</p>
              </div>
          </a>
      `;
      return div;
    }

    function makeItem(item) {      
      const div = document.createElement('div');
      div.classList.add('item');

      let divImageClass = 'image';
      let divProductClass = 'product';
      let imgClass = 'img_picture';
      let imgClassHover = 'img_overEffect';

      if(item.wide) {
        div.classList.add('big_grid_0');      
        divImageClass = 'image_bg';
        divProductClass = 'product_bg';
        imgClass = 'img_picture_bg';
        imgClassHover = 'img_overEffect_bg';
      }

      //big_grid_0
      div.innerHTML = `
        <a href="detail.html">
          <div class="${divImageClass}">
            <img src="${item.img_picture}" class="${imgClass}">
            <img src="${item.img_overEffect}" class="${imgClassHover}"> 
          </div>
          <div class="${divProductClass}">
            <div class="designer_name">${item.designer_name}</div>
            <div class="product_name">${item.product_name}</div>
            <div class="price">${item.price}</div>
          </div>
        </a>
      `;
      return div;
    }

    getData();

    const $gridContainer = document.querySelector('#grid_container');