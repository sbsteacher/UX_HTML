(function() {
    const $header = document.querySelector('#container > div.header');
    
    window.addEventListener('load', e => {    
        fetch('header.html')
        .then(res => res.text())
        .then(html => {
            console.log(html);
            $header.innerHTML = html;
        });
    });
})();