(function() {
    'use strict';

    const $select = document.querySelector('#gu');
    const $search = document.querySelector('#search');
    const $contentsContainer = document.querySelector('ul.contents_container');

    $search.addEventListener('click', e => {                
        $contentsContainer.innerHTML = null;
        const val = $select.value;        
        const url = `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${val}`;
        fetch(url)
        .then(res => res.json())
        .then(makeList);
    });

    function makeList(res) {
        console.log(res);
        //res.data.forEach(makeItem);
        res.data.forEach(function(item) {
            makeItem(item);
        });
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