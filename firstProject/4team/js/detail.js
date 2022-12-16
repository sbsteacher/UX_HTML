
  'use strict'

    const swiper = new Swiper('.swiper_02', {
      loop: false,  // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
      slidesPerView: 4,
    
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      }
    });

    let swiper2 = null;

    function createPhotoSwiper() {
      swiper2 = new Swiper('.swiper_01', {
        loop : false, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
  
        pagination : {
          el : '.swiper_01 .swiper-pagination',
          clickable: true,
        },
      });
    }

    createPhotoSwiper();

    //상단버튼//
    const topBtn = document.querySelector(".gototop");
      topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });  
      };

    //하단버튼//
    const $bottomBtn = document.querySelector(".gotodown");

      $bottomBtn.onclick = () => {
      window.scrollTo({ top: document.body.scrollHeight-1000, behavior: "smooth" });
    };
    


    //색버튼 클릭시 색변경//
    var colorbnt = document.getElementsByClassName("colorbnt");

    function colorClick(event) {
      console.log(event.target);
      console.log(event.target.classList);

      if (event.target.classList[1] === "colorclicked") {
          event.target.classList.remove("colorclicked");
      } else {
        for (var i = 0; i < colorbnt.length; i++) {
          colorbnt[i].classList.remove("colorclicked");
        }
          event.target.classList.add("colorclicked");
      }
    }

    function init_02() {
      for (var i = 0; i < colorbnt.length; i++) {
        colorbnt[i].addEventListener("click", colorClick);
      }
    }

    init_02();

  
    //size버튼클릭시 색변경 & 가격변경//
    var size_bnt = document.querySelectorAll(".size_bnt");
    const priceArr = ['8,000,000', '12,000,000', '19,000,000'];
    const change_price = document.querySelector(".change_price");
    let selectedNum =2;
    
    function sizeClick(n){
      size_bnt.forEach(ele =>{
        const selectedBtn = parseInt(ele.id);
        ele.classList.toggle('bntclicked', selectedBtn === n)
      })
    }

    for(let i=0; i<size_bnt.length; i++){
      size_bnt[i].addEventListener('click', e=>{
        selectedNum = i;
        change_price.innerHTML = `${priceArr[i]}원`
        sizeClick(selectedNum);
      })
    }

    //드롭다운//
    function dp_menu(){
      let click = document.getElementById("drop-content");
      if(click.style.display === "none"){
          click.style.display = "block";

      } else{
          click.style.display = "none";
      }
    }



    //색버튼 이미지 변경//
    const artichokeImgObj = {
      'silver': ['01.png', '02.png', '03.png'],
      'white' : ['01.jpg', '02.png', '03.png'],
      'rosegold' : ['01.jpg', '02.jpg', '03.jpg'],
      'steel' : ['01.jpg'],
      'gold' : ['01.jpg', '02.png'],
      'black' : ['01.jpg'],
    }
      
    const photoFull = document.querySelector('.photo_full');
    
    function changeImg(color) {
      photoFull.innerHTML = '';
      photoFull.innerHTML = `
        <div class="swiper-container swiper_01">
          <div class="swiper-wrapper">
          </div>
          <div class="swiper-pagination"></div>
        </div>
      `;

      const swiper01Wrapper = document.querySelector('.swiper_01 .swiper-wrapper');
      swiper2 = null;
     
      const imgList = artichokeImgObj[color];
      imgList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'swiper-slide bigphoto';
        div.innerHTML = `
          <img src="img/bigphoto/${color}/${item}" alt="${item}">
        `;
        swiper01Wrapper.append(div);
      });

      createPhotoSwiper(); 
    }

    function changeImg_03() {
      let original_01 = document.getElementById("original_01");
      original_01.src = "img/bigphoto/change/rosegold01.jpg"

      let original_02 = document.getElementById("original_02");
      original_02.src = "img/bigphoto/change/rosegold02.jpg"

      let original_03 = document.getElementById("original_03");
      original_03.src = "img/bigphoto/change/rosegold03.jpg"
      
    }
    


  




