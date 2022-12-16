(function(){
  'use strict'
  
  
  let data = null;
  let page = 1;
  const rowCnt = 12; 
  const $menu = document.querySelector('.swiper-wrapper')
  const $menucontainer = document.querySelector('.menu_container')
  const $paging = document.querySelector('.paging');
  let jsonlist = '';
  //세션스토리지 가져오기
  window.addEventListener('load', e => {
    console.log(sessionStorage.getItem('list'))
    if(sessionStorage.getItem('list')===null){
      jsonlist = JSON.parse(JSON.stringify(list.Donut))
      makeDisplay(jsonlist);
    } else{       
      jsonlist = JSON.parse(sessionStorage.getItem('list'))
      console.log(jsonlist)
      makeDisplay(jsonlist);
    }
    
    for(let i=0; i<$menu.children.length; i++){
      console.log($menu.children[i].innerHTML === jsonlist[0].category)
      if($menu.children[i].innerHTML === jsonlist[0].category){
        $menu.children[i].classList.toggle('textcolor',true)
        $menu.children[i].classList.toggle('color', false)
      }
    }
    })
    
    //메뉴텍스트 토글
    $menu.addEventListener('click', e => {
      
      for(let i=0; i<e.target.parentNode.children.length; i++){
        if(e.target !== e.target.parentNode.children){
          e.target.parentNode.children[i].classList.toggle('textcolor', false)
          e.target.parentNode.children[i].classList.toggle('color', true)
        } 
      }
      e.target.classList.toggle('textcolor',true)
      e.target.classList.toggle('color', false)
    })
    console.log($menu)
    
    $menu.addEventListener('click', e => {
      
      page = 1;
     
      $paging.innerHTML = null;
      console.log(e.target.innerHTML)
      
      
      if(e.target.innerHTML === 'Donut'){
        jsonlist = JSON.parse(JSON.stringify(list.Donut))
        makeDisplay(jsonlist);
      } else if(e.target.innerHTML === 'Croiffle'){
        jsonlist = JSON.parse(JSON.stringify(list.Croiffle))
        makeDisplay(jsonlist);
      } else if(e.target.innerHTML === 'Cake'){
        jsonlist = JSON.parse(JSON.stringify(list.Cake))
        makeDisplay(jsonlist);
      } else if(e.target.innerHTML === 'Dessert'){
        jsonlist = JSON.parse(JSON.stringify(list.Dessert))
        makeDisplay(jsonlist);
      } else if(e.target.innerHTML === 'Coffee'){
        jsonlist = JSON.parse(JSON.stringify(list.Coffee))
        makeDisplay(jsonlist);
      } else if(e.target.innerHTML === 'Tea'){
        jsonlist = JSON.parse(JSON.stringify(list.Tea))
        makeDisplay(jsonlist);
      }            
    })
    
    function makeDisplay(jsonlist) {
      data = jsonlist;
      const itemLen = data.length;
      console.log(itemLen);
      const maxPage = Math.ceil(itemLen / rowCnt);
      makePaging(maxPage);
      makeList();
    }
    function makeList() {
      $menucontainer.innerHTML = '';
      const sIdx = (page - 1) * rowCnt;
      const eResult = page * rowCnt;
      const eIdx = eResult > data.length ? data.length : eResult;
      
      for(let i=sIdx; i<eIdx; i++) {
        const item = data[i];
        makeItem(item);
      }
      changeSelected();
    }
    
    function changeSelected() {
      const pageSpanList = document.querySelectorAll('.page');
      pageSpanList.forEach(item => {
        const innerNum = parseInt(item.textContent);
        item.classList.toggle('selected', page === innerNum);
      });
    }
    
    //페이징 숫자 찍기
    function makePaging(maxPage) {
      for(let i=1; i<=maxPage; i++) {
        const span = document.createElement('span');
        $paging.appendChild(span);
        span.classList.add('page');
        span.classList.add('pointer');                        
        span.textContent = i.toString();
        
        
        span.addEventListener('click', e => {
            page = i;
            makeList();
            window.scrollTo(0, 0);
          })
        }
      }
      
      function makeItem(item) {
        
        const $li = document.createElement('li');
        const $div = document.createElement('div');
        const $image = document.createElement('img');
        const $menulistText = document.createElement('div');
        let $name = document.createElement('p')
        let $price = document.createElement('p')
        
        $div.classList.add('box')
        $menulistText.classList.add('menulistText')
        $image.classList.add('backgroundImage');
        $image.src = `${item.image}`;
        
        $li.appendChild($div)
        $div.appendChild($image);
        $li.appendChild($menulistText)
        $menucontainer.appendChild($li);
        $menulistText.appendChild($name);
        $menulistText.appendChild($price)
        
        $name.innerHTML = `${item.name}`
        $price.innerHTML = `${item.price}` 
        
        $image.addEventListener('click', e => {
          console.dir(jsonlist)
          console.dir(item)
          let selectData = e.target.parentNode.parentNode.lastChild.firstChild.innerHTML
          console.log(selectData)
  
          sessionStorage.removeItem('list')
          sessionStorage.setItem('list', JSON.stringify(jsonlist));
          sessionStorage.setItem('selectData',selectData);
          window.location.href = "detailPage_b.html";
          
        })
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

      const swiper = new Swiper('.swiper', {
 
        slideToClickedSlide : true,
        
        pagination: { el: '.swiper-pagination', },
        
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
  
        scrollbar: { nel: '.swiper-scrollbar', },
    });
    //선택된 카테고리부터 스와이퍼 시작
    let indexA = sessionStorage.getItem('num')
    console.log(indexA)
    for(let i=0; i<6; i++){
      if(indexA === i) {
        swiper.slideTo(i, 10)
      }
    }
  
    
    
  })()