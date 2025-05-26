document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    const closeBtn = document.querySelector('.close-btn');
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            themeSwitch.checked = true;
        }
    } else {body.classList.add('light-mode');
    }
     themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});