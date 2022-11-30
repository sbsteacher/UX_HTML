(function() {

    const $main = document.querySelector('main');    
    const $container = document.querySelector('.container');
    const scrollSpeed = 0.05;
    let offset = 0;


    function smoothScroll(){
        offset += (window.pageXOffset - offset) * scrollSpeed
        const scroll = "translateX(-"+offset+"px) translateZ(0) "
        $main.style.transform = scroll;

        raf = requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
})();