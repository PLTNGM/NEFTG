"use strict";

// хедер
window.addEventListener('scroll', function() {
    // УБИРАЕМ эту проверку:
    // if (window.innerWidth <= 768) return;
    
    const header = document.getElementById('header');
    const body = document.body;
    
    console.log('Scroll position:', window.scrollY);
    
    if (window.scrollY > 50) {
        header.classList.add('small');
        body.classList.add('small-header');
        console.log('Header minimized');
    } else {
        header.classList.remove('small');
        body.classList.remove('small-header');
        console.log('Header normal');
    }
});

// Проверяем при загрузке если уже прокручено
window.addEventListener('load', function() {
    // УБИРАЕМ эту проверку:
    // if (window.innerWidth <= 768) return;
    
    const header = document.getElementById('header');
    const body = document.body;
    
    if (window.scrollY > 50) {
        header.classList.add('small');
        body.classList.add('small-header');
    }
});



// счетчик подписчиков

(function() {
    'use strict';
    
    const CONFIG = {
        channel: 'NEFTGG',
        updateInterval: 300000, // 5 минут
        fallbackCount: 2089
    };
    
    async function getSubscribers() {
        // Метод 1: tg.i-c-a.su (самый надежный)
        try {
            const response = await fetch(`https://tg.i-c-a.su/json/${CONFIG.channel}`);
            const data = await response.json();
            if (data.members_count > 0) return data.members_count;
        } catch (error) {
            console.log('Метод 1 не сработал');
        }
        
        // Метод 2: telegram-widget
        try {
            const response = await fetch(`https://telegram-widget.vercel.app/api/channel?username=${CONFIG.channel}`);
            const data = await response.json();
            if (data.members > 0) return data.members;
        } catch (error) {
            console.log('Метод 2 не сработал');
        }
        
        return CONFIG.fallbackCount;
    }
    
    async function updateCounter() {
        const element = document.getElementById('subscribersCount');
        if (element) {
            const count = await getSubscribers();
            element.textContent = count;
            console.log('✅ Подписчиков:', count);
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        updateCounter();
        setInterval(updateCounter, CONFIG.updateInterval);
    });
})();

