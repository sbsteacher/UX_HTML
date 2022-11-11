(function() {
    'use strict';

    const $swiperWrapper = document.querySelector('.swiper-wrapper');

    function getData() {
        const url = 'https://picsum.photos/v2/list?limit=10';
        fetch(url)
        .then(res => res.json())
        .then(makeList)
    }

    function makeList(res) {
        res.forEach(makeItem);

        const swiper = new Swiper('.swiper', {        
            //direction: 'horizontal',
            //loop: true,
                   
            pagination: { el: '.swiper-pagination', },
                  
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
                  
            scrollbar: { el: '.swiper-scrollbar', },
        });
    }

    function makeItem(item) {
        console.log(item);
        const div = document.createElement('div');
        $swiperWrapper.appendChild(div);
        //div.className = 'swiper-slide';
        div.classList.add('swiper-slide');

        const width = parseInt(item.width * 0.1);
        const height = parseInt(item.height * 0.1);
        const imgSrc = `https://picsum.photos/id/${item.id}/${width}/${height}`;
        div.innerHTML = `
            <img src="${imgSrc}" alt="작가는 ${item.author}입니다.">
        `;

    }
    getData();
})();