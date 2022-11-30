(function() {
    const $spanList = document.querySelectorAll('.sidebar span');
    const $viewList = document.querySelectorAll('.p-relative > div');
        
    $spanList.forEach(item => {
        item.addEventListener('click', e => {
            $viewList.forEach(subItem => {
                subItem.classList.toggle('d-none', 
                subItem.dataset.view !== e.target.dataset.view);
            });
        });
    });
    

})();