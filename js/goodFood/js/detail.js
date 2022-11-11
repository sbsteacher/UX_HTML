(function() {
    'use strict';
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    
    var map = null;

    const $contents = document.querySelector('#contents');

    const savedJson = localStorage.getItem('ddd');
    const itemObj = JSON.parse(savedJson);

    var geocoder = new kakao.maps.services.Geocoder();    
    geocoder.addressSearch(itemObj.GNG_CS, (result, status) => {
        if(status === kakao.maps.services.Status.OK) {
            console.log(result);
            //const { x, y } = result[0];
            const x = result[0].x;
            const y = result[0].y;

            const position = new kakao.maps.LatLng(y, x);

            var options = { //지도를 생성할 때 필요한 기본 옵션
                center: position, //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };
            map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

            var marker = new kakao.maps.Marker({
                'position': position
            });

            marker.setMap(map);
        }
    });

    const div = document.createElement('div');
    div.innerHTML = `
        <h3>${itemObj.BZ_NM}</h3>
        <div>${itemObj.GNG_CS}</div>
    `;
    $contents.appendChild(div);

})();