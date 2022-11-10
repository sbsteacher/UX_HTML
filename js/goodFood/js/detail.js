(function() {
    'use strict';
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    const $contents = document.querySelector('#contents');

    const savedJson = localStorage.getItem('item');
    const itemObj = JSON.parse(savedJson);

    var geocoder = new kakao.maps.services.Geocoder();
    console.log(geocoder);

    const div = document.createElement('div');
    div.innerHTML = `
        <h3>${itemObj.BZ_NM}</h3>
        <div>${itemObj.GNG_CS}</div>
    `;
    $contents.appendChild(div);

})();