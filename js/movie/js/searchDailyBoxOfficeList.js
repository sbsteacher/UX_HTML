(function() {
    'use strict';

    const KEY = 'cc1e6045dc81b1e1955cc52c3af43278';

    const frmElem = document.querySelector('#searchFrm');
    const dateElem = frmElem.targetDt;
    const searchBtnElem = frmElem.search;

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
        const val = dateElem.value.replaceAll('-', '');
        console.log(val);

        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${val}`;
        console.log(url);
    });


})();