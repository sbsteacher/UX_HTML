(function() {
    'use strict';
    const $contents = document.querySelector('#contents');

    const savedJson = localStorage.getItem('item');
    const itemObj = JSON.parse(savedJson);

    const div = document.createElement('div');
    div.innerHTML = `
        <h3>${itemObj.BZ_NM}</h3>
        <div>${itemObj.GNG_CS}</div>
    `;
    $contents.appendChild(div);

})();