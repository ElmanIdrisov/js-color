const list = document.querySelectorAll('.box');


list.forEach ((element) => {
    
    element.addEventListener('click', () => {
        list.forEach ((elem) => {
            elem.style.background = '#ccc';
        })
        element.style.background = '#aaa';
    });
});