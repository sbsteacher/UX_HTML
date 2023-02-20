(function(){
  'use strict';
    // 상단 돋보기 _내려오는 검색창
    const searchIcon=document.querySelector('.search');
    const slideSearch=document.querySelector('.desk_search');
    searchIcon.addEventListener('click',()=>{
      slideSearch.classList.toggle('active_search');
    })

      // 슬라이딩 메뉴
  document.addEventListener("DOMContentLoaded",function(){
    const $menuBtn=document.querySelector('#menuBtn2');
    const $menuContain=document.querySelector('.slide-menu');
    $menuBtn.addEventListener('click',()=>{
      if($menuContain.classList.contains('slide-on')){
        $menuContain.classList.remove('slide-on');
      }else{
        $menuContain.classList.add('slide-on')
      }
    })
  
    const $menuBtnPc=document.querySelector('#menuBtn_pc');
    $menuBtnPc.addEventListener('click',()=>{
      if($menuContain.classList.contains('slide-on')){
        $menuContain.classList.remove('slide-on');
      }else{
        $menuContain.classList.add('slide-on')
      }
    })
    const $closeBtn=document.querySelector('.slide-menu__close');
    const $closeBtnPc=document.querySelector('.slide-menu__close_pc');
    $closeBtn.addEventListener('click',()=>{
      if($menuContain.classList.contains('slide-on')){
        $menuContain.classList.remove('slide-on');
      }
    })
    $closeBtnPc.addEventListener('click',()=>{
      if($menuContain.classList.contains('slide-on')){
        $menuContain.classList.remove('slide-on');
      }
    })
    })
    

})();