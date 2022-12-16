(function() {
    'use strict'


    // 스크롤 시 header 높이 줄이기
    const $header = document.querySelector('header');
    const $logoImg = document.querySelector('#logo_img');
    const $logoImgMini = document.querySelector('#logo_img_mini');
    window.onscroll = function () {
        if (window.scrollY > 0) {
            $header.classList.add('scrolled');
            $logoImg.style.display = 'none'
            $logoImgMini.style.display = 'block'
        } else {
            $header.classList.remove('scrolled');
            $logoImg.style.display = 'block'
            $logoImgMini.style.display = 'none'
        }
    };


    // 검색창 열고 닫기
    const $searchIcon = document.querySelector('.main_icon .fa-magnifying-glass');
    const $searchBar = document.querySelector('#search_bar');
    const $headerXBtn = document.querySelector('.header_xBtn');

    $searchIcon.addEventListener('click', ()=> {
        $searchBar.classList.toggle('search_open');
        $headerXBtn.style.display='block';
    })

    $headerXBtn.addEventListener('click', ()=> {
        $headerXBtn.style.display='none'
        $searchBar.classList.toggle('search_open');
    })

    // 장바구니 열고 닫기 + 스크롤 방지 + 뒷 배경 어둡게
    const $cartBtn = document.querySelector('.main_icon .fa-cart-shopping');
    const $cartTap = document.querySelector('#cart');
    const $cartXBtn = document.querySelector('#cart_title > button');
    const $cartOverlay = document.querySelector('.cart_overlay');
    const body = document.getElementsByTagName('body')[0];

    $cartBtn.addEventListener('click', () => {
        $cartTap.classList.toggle('cart_active')
        body.classList.toggle('scrollLock');  
        $cartOverlay.style.display = 'block';
    })
    
    $cartXBtn.addEventListener('click', () => {
        $cartOverlay.style.display = 'none';
        $cartTap.classList.toggle('cart_active')
        body.classList.toggle('scrollLock');   
    })
    // 장바구니 버튼
    const COUNTER = document.getElementById('counter');
    const INCREASE = document.getElementById('increase');
    const DECREASE = document.getElementById('decrease');
    const $listTotal = document.getElementById('list_total');
    
    let num = (parseInt(COUNTER.innerHTML));

    function render() {
        COUNTER.innerHTML = num;
    }

    INCREASE.addEventListener ('click', function() {
        num = num + 1;
        render();
    })

    DECREASE.addEventListener ('click', function() {
        num = num - 1;
        render();
    })

    // 모바일 메뉴
    const $hamBtn = document.querySelector('#mobile_btn');
    const $mobileXBtn = document.querySelector('.main_icon .fa-xmark');
    const $mobileTap = document.querySelector('#mobile_menu');


    if($hamBtn) {
        $hamBtn.addEventListener('click', () => {
            $mobileTap.classList.toggle('mobile_menu_active')
            body.classList.toggle('scrollLock');  
        })
    }
    

    // $mobileXBtn.addEventListener('click', () => {
    //     $mobileTap.classList.toggle('mobile_menu_active')
    //     body.classList.toggle('scrollLock');  
    // })

    // 브랜드 스토어 오픈
    const $aside = document.querySelector('aside');
    const $asideBtn = document.querySelector('aside > button');
    
    $asideBtn.addEventListener('click', ()=> {
        $aside.style.display = 'none';
    })
    
    // main title 글자 색 + 이미지 변경
    const shapeColor = document.querySelector('#shape');
    const objImg = document.querySelector('#main_png > img')

    let colorArr = ['#055e52','#f9a02d', '#7eac63', '#ee6f65',  '#a16842'];
    let imgArr = new Array();
    imgArr[0] = 'img/main/main-01.png';
    imgArr[1] = 'img/main/main-02.png';
    imgArr[2] = 'img/main/main-03.png';
    imgArr[3] = 'img/main/main-04.png';
    imgArr[4] = 'img/main/main-05.png';

    let imgIdx = 0;
    let idx = 0;
    if(shapeColor) {
        setInterval(() => {
            shapeColor.style.color = colorArr[idx++];
            if(colorArr.length === idx) { idx = 0; }
    
            objImg.src = imgArr[imgIdx++];
            if(imgArr.length === imgIdx) { imgIdx = 0; }
        }, 1000);
    }


    // con3 categories - mouseover
    const $con3LeftImg = document.querySelector('#con3_product_left .con3_product img');
    const $con3RightImg = document.querySelector('#con3_product_right .con3_product img');
    const $con3LeftNm = document.querySelector('#con3_name_left')
    const $con3RightNm = document.querySelector('#con3_name_right')
    const $con3LeftPrice = document.querySelector('#con3_price_left')
    const $con3RightPrice = document.querySelector('#con3_price_right')

    const cateList2 = document.querySelector('#con3_li_2 li span');
    const cateList3 = document.querySelector('#con3_li_3 li span');
    const cateList4 = document.querySelector('#con3_li_4 li span');
    const cateList5 = document.querySelector('#con3_li_5 li span');
    const cateList6 = document.querySelector('#con3_li_6 li span');

    function cateList1() {
        $con3LeftImg.src = 'img/con3/con3-01-01.png';
        $con3RightImg.src = 'img/con3/con3-01-02.png';
        $con3LeftNm.innerText = 'PH 3½-3 Pale Rose Brass Pendant';
        $con3RightNm.innerText = 'PH Artichoke';
        $con3LeftPrice.innerText = '₩ 2,624,000';
        $con3RightPrice.innerText = '₩ 19,900,000';
    };

    if(cateList2) {
        cateList2.addEventListener('mouseenter', () => {
            $con3LeftImg.src = 'img/con3/con3-02-01.png';
            $con3RightImg.src = 'img/con3/con3-02-02.png';
            $con3LeftNm.innerText = 'VL Studio Table/Floor'
            $con3RightNm.innerText = 'Moonsetter'
            $con3LeftPrice.innerText = '₩ 611,000'
            $con3RightPrice.innerText = '₩ 12,314,000'
        })
        cateList2.addEventListener('mouseleave', () => {
            cateList1();
        })
        
        cateList3.addEventListener('mouseenter', () => {
            $con3LeftImg.src = 'img/con3/con3-03-01.png';
            $con3RightImg.src = 'img/con3/con3-03-02.png';
            $con3LeftNm.innerText = 'Panthella Table 320';
            $con3RightNm.innerText = 'AJ Mini Table';
            $con3LeftPrice.innerText = '₩ 513,000';
            $con3RightPrice.innerText = '₩ 1,338,000';
        })
        cateList3.addEventListener('mouseleave', () => {
            cateList1();
        })
        
        cateList4.addEventListener('mouseenter', () => {
            $con3LeftImg.src = 'img/con3/con3-04-01.png';
            $con3RightImg.src = 'img/con3/con3-04-02.png';
            $con3LeftNm.innerText = 'Flindt Wall';
            $con3RightNm.innerText = 'NJP Wall';
            $con3LeftPrice.innerText = '₩ 1,111,000';
            $con3RightPrice.innerText = '₩ 580,000';
        })
        cateList4.addEventListener('mouseleave', () => {
            cateList1();
        })
        
        cateList5.addEventListener('mouseenter', () => {
            $con3LeftImg.src = 'img/con3/con3-05-01.png';
            $con3RightImg.src = 'img/con3/con3-05-02.png';
            $con3LeftNm.innerText = 'Toldbod 6.1 Wall';
            $con3RightNm.innerText = 'Nyhavn Wall';
            $con3LeftPrice.innerText = '₩ 989,000';
            $con3RightPrice.innerText = '₩ 2,742,000';
        })
        cateList5.addEventListener('mouseleave', () => {
            cateList1();
        })
        
        cateList6.addEventListener('mouseenter', () => {
            $con3LeftImg.src = 'img/con3/con3-06-01.png';
            $con3RightImg.src = 'img/con3/con3-06-02.png';
            $con3LeftNm.innerText = 'PH 3½-2½ GLASS Shade';
            $con3RightNm.innerText = 'Albertslund LED Upgrade Kit';
            $con3LeftPrice.innerText = '₩ 1,684,000';
            $con3RightPrice.innerText = '₩ 989,000';
        })
        cateList6.addEventListener('mouseleave', () => {
            cateList1();
        })
    }
    



    // con5 new arrivals - mouseover
    const $con5 = document.querySelector('#con5');
    const $con5Img = document.querySelector('.con5_img_wrapper img');
    const newList1 = document.querySelector('#con5_li_1 a');
    const newList2 = document.querySelector('#con5_li_2 a');
    const newList3 = document.querySelector('#con5_li_3 a');
    const newList4 = document.querySelector('#con5_li_4 a');
    const newList5 = document.querySelector('#con5_li_5 a');

    newList1.addEventListener('mouseenter', () => {
        $con5.style.backgroundColor = "#f9d0d0";
    })
    newList1.addEventListener('mouseleave', () => {
        $con5.style.backgroundColor = "";
    })

    newList2.addEventListener('mouseenter', () => {
        $con5.style.backgroundColor = "#b4ccd9";
        $con5Img.src = 'img/con5/con5-02.jpg';
        
    })
    newList2.addEventListener('mouseleave', () => {
        $con5.style.backgroundColor = "";
        $con5Img.src = 'img/con5/con5-01.jpg';
    })

    newList3.addEventListener('mouseenter', () => {
        $con5.style.backgroundColor = "#a14102";
        $con5Img.src = 'img/con5/con5-03.jpg';
    })
    newList3.addEventListener('mouseleave', () => {
        $con5.style.backgroundColor = "";
        $con5Img.src = 'img/con5/con5-01.jpg';
    })

    newList4.addEventListener('mouseenter', () => {
        $con5.style.backgroundColor = "#f8f8fa";
        $con5Img.src = 'img/con5/con5-04.jpg';
    })
    newList4.addEventListener('mouseleave', () => {
        $con5.style.backgroundColor = "";
        $con5Img.src = 'img/con5/con5-01.jpg';
    })

    newList5.addEventListener('mouseenter', () => {
        $con5.style.backgroundColor = "#702920";
        $con5Img.src = 'img/con5/con5-05.jpg';
    })
    newList5.addEventListener('mouseleave', () => {
        $con5.style.backgroundColor = "";
        $con5Img.src = 'img/con5/con5-01.jpg';
    })



    // con7 store - mouseover
    const $store = document.querySelectorAll('#con7_store > a')

    for(let i=0; i<$store.length; i++) {
        $store[i].addEventListener('mouseenter', () => {
            console.log($store)
            document.body.style.backgroundColor = "#b4ccd9";
        })
        $store[i].addEventListener('mouseleave', () => {
            console.log($store)
            document.body.style.backgroundColor = "#fff";
        })
    }

    // 뉴스레터 전송 버튼
    const $newsInput = document.querySelector('.email_wrapper input[type="email"]');
    const $newsBtn = document.querySelector('.email_wrapper > button');
    const $newsAlert = document.querySelector('#email_submit')

    $newsBtn.addEventListener('click', e => {
        $newsInput.value = '';
        $newsAlert.style.display = 'block';
    })

    setInterval(() => {
        if($newsAlert.style.display = 'block') {
            $newsAlert.style.display = 'none'
        }
    }, 5000);
})();