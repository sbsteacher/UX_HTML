(function() {
    'use strict';

    const $select = document.querySelector('#gu');
    const $search = document.querySelector('#search');
    const $contentsContainer = document.querySelector('ul.contents_container');

    $search.addEventListener('click', e => {                
        const val = $select.value;        
        const url = `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${val}`;
        fetch(url)
        .then(res => {
            return res.json();
        })
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

        li.innerHTML = `
            <h3></h3>
        `;
    }


})();