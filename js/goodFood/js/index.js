(function() {
    'use strict';

    const $select = document.querySelector('#gu');
    const $search = document.querySelector('#search');
    const $contentsContainer = document.querySelector('ul.contents_container');
    const $paging = document.querySelector('.paging');

    let data = null;
    let page = 1;
    //1 > 0~19
    //2 > 20~39
    //3 > 40~59
    const rowCnt = 20; //페이지당 아이템 수

    $search.addEventListener('click', e => {                
        //$contentsContainer.innerHTML = null;
        $paging.innerHTML = null;
        const val = $select.value;        
        const url = `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${val}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(makeDisplay);
    });

    function makeDisplay(res) {
        data = res.data;
        const itemLen = data.length;
        console.log(itemLen);
        const maxPage = Math.ceil(itemLen / rowCnt);
        makePaging(maxPage);
        makeList();
    }

    function makeList() {
        $contentsContainer.innerHTML = null;
        const sIdx = (page - 1) * rowCnt;
        const eResult = page * rowCnt;
        const eIdx = eResult > data.length ? data.length : eResult;

        for(let i=sIdx; i<eIdx; i++) {
            const item = data[i];
            makeItem(item);
        }
        changeSelected();
    }

    //선택된 page 클래스 처리
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
            //span.className = 'page pointer';
            span.classList.add('page');
            span.classList.add('pointer');                        
            span.textContent = i.toString();

            span.addEventListener('click', e => {
                page = i;
                makeList();
                window.scrollTo(0, 0);
            });
        }
    }

    function makeItem(item) {
        const li = document.createElement('li');
        $contentsContainer.appendChild(li);             
        li.className = 'pointer';   
        li.innerHTML = `
            <h3>${item.BZ_NM}</h3>
            <div>종류: ${item.FD_CS}</div>
            <div>연락처: ${item.TLNO}</div>
            <div>주소: ${item.GNG_CS}</div>
            <div>${item.MNU}</div>
            <p>${item.SMPL_DESC.replaceAll(`${item.BZ_NM} `, item.BZ_NM)}</p>
        `;
        li.addEventListener('click', e => {
            const json = JSON.stringify(item);            
            localStorage.setItem('ddd', json);
            location.href = 'detail.html';
        });

    }


})();