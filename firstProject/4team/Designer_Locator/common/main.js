(function () {
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

    $searchIcon.addEventListener('click', () => {
        $searchBar.classList.toggle('search_open');
        $headerXBtn.style.display = 'block';
    })

    $headerXBtn.addEventListener('click', () => {
        $headerXBtn.style.display = 'none'
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

    console.log(COUNTER)
    let num = (parseInt(COUNTER.innerHTML));

    function render() {
        COUNTER.innerHTML = num;
    }

    INCREASE.addEventListener('click', function () {
        num = num + 1;
        render();
    })

    DECREASE.addEventListener('click', function () {
        num = num - 1;
        render();
    })

    // 뉴스레터 전송 버튼
    const $newsInput = document.querySelector('.email_wrapper input[type="email"]');
    const $newsBtn = document.querySelector('.email_wrapper > button');
    const $newsAlert = document.querySelector('#email_submit')

    $newsBtn.addEventListener('click', e => {
        $newsInput.value = '';
        $newsAlert.style.display = 'block';
    })

    setInterval(() => {
        if ($newsAlert.style.display = 'block') {
            $newsAlert.style.display = 'none'
        }
    }, 5000);




})();