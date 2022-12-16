(function(){
    'use strict'

    
    let data = null;
    let page = 1;
    const rowCnt = 12;

    let jsonlist = '';
    

    
    const $menucontainer = document.querySelector('.menu_container')
    const $paging = document.querySelector('.paging');
    
    window.addEventListener('load', e => {
      console.log(sessionStorage.getItem('list'))
      if(sessionStorage.getItem('list')===null){
        jsonlist = JSON.parse(JSON.stringify(list))
        makeDisplay(jsonlist);
      } else{
      jsonlist = JSON.parse(JSON.stringify(list))
      makeDisplay(jsonlist);
      }
    })
    
    
    
    function makeDisplay(jsonlist) {
      console.log(jsonlist)
      data = jsonlist;
      const itemLen = data.length;
      console.log(itemLen);
      const maxPage = Math.ceil(itemLen / rowCnt);
      makePaging(maxPage);
      makeList(jsonlist);
    }

    function makeList(jsonlist) {
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
        const $like1 = document.createElement('div');
        const $like2 = document.createElement('div');
        const $like3 = document.createElement('div');
        const $like4 = document.createElement('div');
        const $like5 = document.createElement('div');
        const $like6 = document.createElement('div');
        const $like7 = document.createElement('div');
        const $like8 = document.createElement('div');
        const $like9 = document.createElement('div');
        const $like10 = document.createElement('div');
        const $unlike = document.createElement('div');
        const $menulistText = document.createElement('div');
        const $name = document.createElement('p')
        const $price = document.createElement('p')
        
        $div.classList.add('box')
        $menulistText.classList.add('menulistText')
        $like1.classList.add("like","likeNone")
        $like2.classList.add("like","likeNone")
        $like3.classList.add("like","likeNone")
        $like4.classList.add("like","likeNone")
        $like5.classList.add("like","likeNone")
        $like6.classList.add("like","likeNone")
        $like7.classList.add("like","likeNone")
        $like8.classList.add("like","likeNone")
        $like9.classList.add("like","likeNone")
        $like10.classList.add("like","likeNone")
        $unlike.classList.add('unlike')
        $image.classList.add('backgroundImage1');
        $image.src = `${item.image}`;
        
        $li.appendChild($div);
        $div.appendChild($unlike);
        $div.appendChild($image);
        $div.appendChild($like1);
        $div.appendChild($like2);
        $div.appendChild($like3);
        $div.appendChild($like4);
        $div.appendChild($like5);
        $div.appendChild($like6);
        $div.appendChild($like7);
        $div.appendChild($like8);
        $div.appendChild($like9);
        $div.appendChild($like10);
        $li.appendChild($menulistText)
        $menucontainer.appendChild($li);
        $menulistText.appendChild($name);
        $menulistText.appendChild($price)
        
        $name.innerHTML = `${item.name}`
        $price.innerHTML = `${item.price}` 
        
        
        // 찜하기 토글
        $div.addEventListener('click', e => {
          console.log(e.target.classList.value)
          if (e.target.classList.value === 'unlike') {
            $like1.classList.toggle("likeNone")
            $like2.classList.toggle("likeNone")
            $like3.classList.toggle("likeNone")
            $like4.classList.toggle("likeNone")
            $like5.classList.toggle("likeNone")
            $like6.classList.toggle("likeNone")
            $like7.classList.toggle("likeNone")
            $like8.classList.toggle("likeNone")
            $like9.classList.toggle("likeNone")
            $like10.classList.toggle("likeNone")
          } else if(e.target.classList.value === 'like') {
            $like1.classList.toggle("likeNone")
            $like2.classList.toggle("likeNone")
            $like3.classList.toggle("likeNone")
            $like4.classList.toggle("likeNone")
            $like5.classList.toggle("likeNone")
            $like6.classList.toggle("likeNone")
            $like7.classList.toggle("likeNone")
            $like8.classList.toggle("likeNone")
            $like9.classList.toggle("likeNone")
            $like10.classList.toggle("likeNone")
          }
        })


        $image.addEventListener('click', e => {
        console.dir(jsonlist)
        console.dir(item)
        console.dir(e.target)
        let selectData = e.target.parentNode.parentNode.lastChild.firstChild.innerHTML
        console.log(selectData)
        sessionStorage.removeItem('list')
        sessionStorage.setItem('list', JSON.stringify(jsonlist));
        sessionStorage.setItem('selectData',selectData);
        console.log(jsonlist)
        for(let i=0; i<jsonlist.length; i++){
          if(selectData === jsonlist[i].name){
            window.location.href = `${jsonlist[i].url}`

          }
        }
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

    new Swiper('.swiper', {
 
        pagination: { el: '.swiper-pagination', },
      
  
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
  
        scrollbar: { nel: '.swiper-scrollbar', },
    });
  })()