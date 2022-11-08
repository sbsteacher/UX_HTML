(function() {
    'use strict';

    const KEY = 'cc1e6045dc81b1e1955cc52c3af43278';

    const frmElem = document.querySelector('#searchFrm');
    const dateElem = frmElem.targetDt;
    const searchBtnElem = frmElem.search;
    //const contentsElem = document.querySelector('#contents');
    const contentsElem = document.querySelector('.main__body > .listing-card > ul.listing-card__list');
    
    window.addEventListener('load', e => {
        const now = new Date();
        const nowDate = now.toISOString().substring(0, 10);
        dateElem.value = nowDate;
    });
    /*
    window.onload = function() {

    }
    */
    searchBtnElem.addEventListener('click', e => {
        contentsElem.innerHTML = null;

        const val = dateElem.value.replaceAll('-', '');
        console.log(val);

        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${val}`;
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(makeList);
    });

    function makeList(data) {        
        const arr = data.boxOfficeResult.dailyBoxOfficeList;
        arr.forEach(makeItem);
    }

    function makeItem(item) {
        const li = document.createElement('li');
        li.className = 'listing-card__item';
        li.innerHTML = `
            <div class="listing-card__info">
                <h1>${item.rank}</h1>
                <strong class="listing-card__name">${item.movieNm}</strong>
                <p class="listing-card__date">${item.openDt}</p>
                <div class="listing-card__audiCnt">${item.audiCnt}명</div>
            </div>
        `;
        contentsElem.appendChild(li);
    }

})();

