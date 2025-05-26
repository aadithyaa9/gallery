document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    const closeBtn = document.querySelector('.close-btn');
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            galleryItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                } else {item.style.display = 'none';
                }
            });
        });
    });
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const imgAlt = item.querySelector('img').alt;
            const caption = item.querySelector('.caption') ? item.querySelector('.caption').textContent : imgAlt;
            fullscreenImg.src = imgSrc;
            fullscreenImg.alt = imgAlt;
            fullscreenCaption.textContent = caption;
            fullscreenOverlay.classList.add('active'); 
        });
    });
    closeBtn.addEventListener('click', () => {
        fullscreenOverlay.classList.remove('active');
    });
    fullscreenOverlay.addEventListener('click', (e) => {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.classList.remove('active');
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
            fullscreenOverlay.classList.remove('active');
        }
    });
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