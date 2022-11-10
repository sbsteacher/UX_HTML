(function() {
    'use strict';
    const $contents = document.querySelector('#contents');

    const savedJson = localStorage.getItem('item');
    const itemObj = JSON.parse(savedJson);

    $contents.innerHTML = itemObj.BZ_NM;

})();