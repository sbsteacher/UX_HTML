(function() {
    'use strict';

    const $header = document.querySelector('#container .header');
    console.log($header);

    fetch('header.html')
    .then(res => res.text())
    .then(txt => {
        $header.innerHTML = txt;
    });

})();