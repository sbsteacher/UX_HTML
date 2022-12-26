(function() {
    'use strict';
    Date.prototype.toNormalFormat = function(delimiter = '-') {
        const year = this.getFullYear();
        const mon = (this.getMonth() + 1).toString().padStart(2, '0');
        const date = this.getDate().toString().padStart(2, '0');
        const hour = this.getHours().toString().padStart(2, '0');        
        const min = this.getMinutes().toString().padStart(2, '0');
        const sec = this.getSeconds().toString().padStart(2, '0');
        
        return [year, mon, date].join(delimiter).concat(` ${hour}:${min}:${sec}`);
    }

    const KEY = 'cc1e6045dc81b1e1955cc52c3af43278';

    const frmElem = document.querySelector('#searchFrm');
    const dateElem = frmElem.targetDt;
    const searchBtnElem = frmElem.search;
    //const contentsElem = document.querySelector('#contents');
    const contentsElem = document.querySelector('.main__body > .listing-card > ul.listing-card__list');
    const loadingElem = document.querySelector('#loading');

    let isProc = false;
    window.addEventListener('load', e => {
        // const now = new Date();
        // now.setDate(now.getDate() - 1);        
        // const nowDate = now.toNormalFormat().substring(0, 10);
        // dateElem.value = nowDate;
        
        //moment.js 라이브러리 사용            
        dateElem.value = moment().add(-1, 'd').format('YYYY-MM-DD');
        
        /*
        //ISO가 
        const now = new Date();
        now.setDate(now.getDate() - 1);        
        const nowDate = now.toISOString().substring(0, 10);
        dateElem.value = nowDate;
        */
    });
  
    searchBtnElem.addEventListener('click', e => {        
        if(isProc) { return; }
        const nowDate = new Date().toISOString().substring(0, 10);
        if(nowDate === dateElem.value) {
            return alert('오늘은 검색할 수 없습니다.');
        } else if(dateElem.value > nowDate) {
            return alert('미래는 검색할 수 없습니다.');
        }
        isProc = true;
        loadingElem.classList.remove('display_none');
        
        contentsElem.innerHTML = null;
      
        const val = dateElem.value.replaceAll('-', '');
        console.log(val);

        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${val}`;
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
        const arr = data.boxOfficeResult.dailyBoxOfficeList;
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

