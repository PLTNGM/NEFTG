"use strict";

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const body = document.body;
    
    console.log('Scroll position:', window.scrollY); // Для отладки
    
    if (window.scrollY > 50) {
        header.classList.add('small');
        body.classList.add('small-header');
        console.log('Header minimized'); // Для отладки
    } else {
        header.classList.remove('small');
        body.classList.remove('small-header');
        console.log('Header normal'); // Для отладки
    }
});

// Проверяем при загрузке если уже прокручено
window.addEventListener('load', function() {
    const header = document.getElementById('header');
    const body = document.body;
    
    if (window.scrollY > 50) {
        header.classList.add('small');
        body.classList.add('small-header');
    }
});