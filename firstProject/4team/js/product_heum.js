    'use strict'
   

    Number.prototype.printPrice = function() {
      return `₩ ${this.toLocaleString('ko-KR')}`;
    }

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
   

    //items.forEach(item => item.addEventListener('click', dp_menu_02));
    const $divFilter = document.querySelector('#drop-content_filter');
    const $filterItemList = $divFilter.querySelectorAll('li');
    const $btnFilter = document.querySelector('.filter_container #btn_filter');

    $filterItemList.forEach(item => {
      item.addEventListener('click', e => {
        console.log(e.target.textContent);
        //$btnFilter.value = e.target.textContent;
        const str = e.target.textContent;
        $btnFilter.textContent = `${str.substring(3)} ▼`;    
        dp_menu_01();
      });
    });

    function dp_menu_01() {      
      if($divFilter.style.display === "none"){
        $divFilter.style.display = "block";
      } else {
        $divFilter.style.display = "none";
      }
    }

    const $divSort = document.querySelector('#drop-content_sort');
    const $sortItemList = $divSort.querySelectorAll('li');
    const $btnSort = document.querySelector('.filter_container #btn_sort');

    $sortItemList.forEach(item => {
      item.addEventListener('click', e => {

        dp_menu_02();
        if($btnFilter.textContent === 'Filter ▼') {
          alert('필터를 선택해 주세요.');
          return;
        }
        $btnSort.textContent = `${e.target.textContent} ▼`;
                
        switch($btnFilter.textContent) {         
          case 'designer ▼':
            lampList.sort((a, b) => { //오름차순
              let leftVal = a.designer_name;
              let rightVal = b.designer_name;
              if($btnSort.textContent === '내림차순 ▼') {
                leftVal = b.designer_name;
                rightVal = a.designer_name;
              }
              if(leftVal > rightVal) { return 1; }
              if(leftVal < rightVal) { return -1; }
            });            
            break;
          case 'price ▼':
            lampList.sort((a, b) => {
              let leftVal = a.price;
              let rightVal = b.price;
              if($btnSort.textContent === '내림차순 ▼') {
                leftVal = b.price;
                rightVal = a.price;
              }
              return leftVal - rightVal;
            })
            break;
        }
        makeList(lampList);
      });
    });

    //정렬 드롭다운//
    function dp_menu_02() {      
      if($divSort.style.display === "none"){
        $divSort.style.display = "block";        
      }else{
        $divSort.style.display = "none";        
      }
    }

    let catalogItem = null;
    let lampList = null; 

    function getData() {
      fetch('js/catalog.json')
      .then(res => res.json())
      .then(result2 => {
        catalogItem = result2;
      });

      fetch('js/product.json')
      .then(res => res.json())
      .then(result => {
        lampList = result;
        console.log(result);
        makeList(result);
      });
    }

    function makeList(items) {
      $gridContainer.innerHTML = null;
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
            <div class="price">${item.price.printPrice()}</div>
          </div>
        </a>
      `;
      return div;
    }

    getData();

    const $gridContainer = document.querySelector('#grid_container');