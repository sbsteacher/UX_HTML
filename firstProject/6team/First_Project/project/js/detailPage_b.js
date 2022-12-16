(function(){
    'use strict'

    let jsonlist = '';
    let selectData = sessionStorage.getItem('selectData')
    console.log(selectData)  
    jsonlist = JSON.parse(sessionStorage.getItem('list'))
    console.log(jsonlist)
    makeDetailContents(jsonlist)
    makeMenu(jsonlist)
          
            
            
            //메뉴 원산지 표시부분
            function makeDetailContents(jsonlist) {
              const $inner = document.querySelector('.menuName')
              const $menuHead = document.createElement('span')
              const $titleimage = document.querySelector('#titleimage');
              console.dir($titleimage);
              const $img = document.createElement('img');
              const $detailInfo = document.querySelector('.detail-info');
              const $name = document.createElement('span');
              const $detail = document.createElement('span');
              
              $menuHead.classList.add('detail-slider-head')
              $name.classList.add('info-name');
              $detail.classList.add('info-explain');
              console.log(jsonlist)
              $menuHead.innerHTML = `${jsonlist[0].category} MENU`
              console.log($menuHead)
              console.dir($inner)
              
              for(let i=0; i<jsonlist.length; i++) {

                if(jsonlist[i].name === selectData) {
                  $img.src = jsonlist[i].image;
          $img.alt = selectData;
          $name.innerHTML = selectData;
          $detail.innerHTML = jsonlist[i].detail;
        }
      }
      $inner.prepend($menuHead)
      $titleimage.appendChild($img)
      $detailInfo.appendChild($name)
      $detailInfo.appendChild($detail)
    }
    //메뉴리스트
    function makeMenu(jsonlist) {
      console.log(jsonlist)
      const $menuList = document.querySelector('.swiper-wrapper')
      for(let i=0; i<jsonlist.length; i++) {
        if(jsonlist[i].name === selectData) {
          continue
        } else {
          const $slide = document.createElement('div')
          const $menuImg = document.createElement('div')
          const $menuNm = document.createElement('div')
          const $a = document.createElement('a');

          $menuImg.classList.add('menu-img');
          $menuNm.classList.add('menu-info');
          $slide.classList.add('swiper-slide');
          
          $a.style.backgroundImage = `url('${jsonlist[i].image}')`;
          $menuNm.innerHTML = jsonlist[i].name
          
          
          $menuList.appendChild($slide)
          $slide.appendChild($menuImg)
          $slide.appendChild($menuNm)
          $menuImg.appendChild($a)
          console.log(jsonlist[0].category)
          console.log($a.parentNode.parentElement.lastChild.innerHTML)
          $a.onclick = function() {
            sessionStorage.removeItem('selectData')
            sessionStorage.removeItem('list')
            sessionStorage.setItem('list', JSON.stringify(jsonlist));
            console.dir($a)
            selectData = $a.parentNode.parentNode.lastChild.innerHTML
            console.log($a.parentNode.parentNode.lastChild.innerHTML)
            sessionStorage.setItem('selectData',selectData);
            $a.href = "detailPage_b.html"
          }
          
          
          console.log(jsonlist[0].category)
          const $button = document.querySelector('.detail-slider-list-btn')
          console.log(jsonlist)
          
          $button.setAttribute('href',"detailpage_a.html")
          $button.onclick = function(){
            sessionStorage.setItem('list', JSON.stringify(jsonlist));
            if(jsonlist[0].category === 'Donut'){
              sessionStorage.setItem('num', 0);
            } else if(jsonlist[0].category === 'Croiffle'){
              sessionStorage.setItem('num', 1);
            } else if(jsonlist[0].category === 'Cake'){
              sessionStorage.setItem('num', 2);
            } else if(jsonlist[0].category === 'Dessert'){
              sessionStorage.setItem('num', 3);
            } else if(jsonlist[0].category === 'Coffee'){
              sessionStorage.setItem('num', 4);
            } else {
              sessionStorage.setItem('num', 5);
            }

          }
        }
      }      
    }
 

    const $header = document.querySelector('.menu')

    $header.addEventListener('click', e => {
      sessionStorage.removeItem('list')
      sessionStorage.removeItem('selectData')
      sessionStorage.removeItem('num')
    })

    const $logo = document.querySelector('.logo')

      $logo.addEventListener('click', e => {
        window.location.href = "detailPage_a.html"
        sessionStorage.removeItem('list')
        sessionStorage.removeItem('selectData')
        sessionStorage.removeItem('num')
      })

    
    //스와이퍼
    new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      breakpoints: {
        680: { slidesPerView: 1,},        
        768: { slidesPerView: 3, },
        1024: { slidesPerView: 4, },
      } ,
      centeredSlides: false, 

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
})()