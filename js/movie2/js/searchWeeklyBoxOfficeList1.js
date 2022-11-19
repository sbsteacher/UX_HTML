(function() {
    'use strict';

    const KEY = 'cc1e6045dc81b1e1955cc52c3af43278';

    const $header = document.querySelector('#container > div.header');
    const frmElem = document.querySelector('#searchFrm');
    const dateElem = frmElem.targetDt;
    const searchBtnElem = frmElem.search;    
    const contentsElem = document.querySelector('.main__body > .listing-card > ul.listing-card__list');
    const loadingElem = document.querySelector('#loading');

    let isProc = false;
    window.addEventListener('load', e => {    
        const nowDate = moment();
        if(nowDate.day() === 0) {
            nowDate.add(-7, 'd');
        } else {
            nowDate.day(0);
        }
        const maxDate = nowDate.format('YYYY-MM-DD');
        dateElem.value = maxDate;
        dateElem.setAttribute('max', maxDate);

        fetch('header.html')
        .then(res => res.text())
        .then(html => {
            console.log(html);
            $header.innerHTML = html;
        });

    });
  
    searchBtnElem.addEventListener('click', e => {        
        if(isProc) { return; }
                
        const nowDate = new Date(new Date().toDateString() + ' 00:00:00');
        const nowDay = nowDate.getDay() === 0 ? 7 : nowDate.getDay();        
        nowDate.setDate(nowDate.getDate() - nowDay + 1);
        
        const targetDate = new Date(dateElem.value + ' 00:00:00');
        const targetDay = targetDate.getDay() === 0 ? 7 : targetDate.getDay();        
        targetDate.setDate(targetDate.getDate() - targetDay + 1);

        if(nowDate.getTime() === targetDate.getTime()) {
            return alert('이번주는 검색할 수 없습니다.');
        } else if(targetDate.getTime() > nowDate.getTime()) {
            return alert('미래주는 검색할 수 없습니다.');
        }
        isProc = true;
        loadingElem.classList.remove('display_none');
        
        contentsElem.innerHTML = null;
      
        const val = dateElem.value.replaceAll('-', '');
        console.log(val);

        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${KEY}&targetDt=${val}&weekGb=2`;
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(data => {
            isProc = false;
            loadingElem.classList.add('display_none');
            makeList(data);
        });
    });

    function makeList(data) {        
        const arr = data.boxOfficeResult.weeklyBoxOfficeList;
        if(arr.length === 0) {            
            return alert('박스오피스 정보가 없습니다.');
        }
        arr.forEach(makeItem);
    }

    function makeItem(item) {
        const audiCnt = parseInt(item.audiCnt).toLocaleString('ko-KR');
        const li = document.createElement('li');
        li.className = 'listing-card__item';
        li.innerHTML = `
            <div class="listing-card__info">
                <h1>${item.rank}</h1>
                <strong class="listing-card__name">${item.movieNm}</strong>
                <p class="listing-card__date">${item.openDt}</p>
                <div class="listing-card__audiCnt">${audiCnt}명</div>
            </div>
        `;
        contentsElem.appendChild(li);
    }

})();

