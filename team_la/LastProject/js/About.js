(function(){
  'use strict';

  const $aboutBtn=document.querySelectorAll('.aboutBtn');
  console.log($aboutBtn)
  const $viewList=document.querySelectorAll('.viewList_about');
  if($aboutBtn){
    $aboutBtn.forEach(item=>{
      item.addEventListener('click',(e)=>{
          $viewList.forEach(subitem=>{
            subitem.classList.toggle('view_none',subitem.dataset.view!==e.target.dataset.view);
          })
        })
    })
  } 

  //타이핑효과
  const $typingContent="도시의 문화적 수준을 보여주는 곳,";
  const $typingText=document.querySelector('.typing_effect');
  let indexText=0; //문자열 하나하나에 접근하기 위해 사용하는 숫자형 데이터 

  function typing(){
    $typingText.textContent+=$typingContent[indexText++];
    if(indexText>$typingContent.length){
      $typingText.textContent=""
      indexText=0;
    }
  }
  setInterval(typing,300); // 두개의 인자 (주기적으로 동작시키고 싶은 함수이름, 함수동작주기) 

  //스크롤 이벤트 (opacity)
  let observer= new IntersectionObserver((e)=>{
    e.forEach((box)=>{
      if(box.isIntersecting){
        box.target.style.opacity=1;
      }else{
        box.target.style.opacity=0;
      }
    })
  })
  let $observeItem=document.querySelectorAll('.observeItem');
  console.log($observeItem);
  console.log($observeItem[0]);
  observer.observe($observeItem[0])
  observer.observe($observeItem[1])


  // 스와이퍼 1
  
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  //   autoplay:true,
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  // });
  
// Initialize and add the map
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;


function initMap(){
  var container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
  var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };

  var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
}
initMap();
function initMap2() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

//window.initMap = initMap;
})();