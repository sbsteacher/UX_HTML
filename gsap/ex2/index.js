(function() {
    'use strict';
    setTimeout(function() {
        
        gsap.to(".box1", { duration: 3, x: 200, opacity: 0.2, ease: 'steps(10)', delay: 2,});

        gsap.to(".box2", { duration: 3, x: 200, rotate: 720, scale: 1.3,});

        gsap.to(".box3", { duration: 10, x: 200, y: 400, ease: 'elastic', backgroundColor: 'red', width: 300, fontSize: 60});

    }, 2000);
    
})();