(function() {
    'use strict';

    const KEY = 'cc1e6045dc81b1e1955cc52c3af43278';

    const frmElem = document.querySelector('#searchFrm');
    const dateElem = frmElem.targetDt;
    const searchBtnElem = frmElem.search;
    const contentsElem = document.querySelector('#contents');

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
        data.boxOfficeResult.dailyBoxOfficeList.forEach(makeRow);
    }

    function makeRow(item) {
        console.log(item);
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${item.rank}. ${item.movieNm}</h3>
        `;
        contentsElem.append(div);
    }

})();