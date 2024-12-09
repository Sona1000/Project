document.addEventListener('DOMContentLoaded', () => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const sideMenu = document.querySelector('.side-menu');
        const overlay = document.querySelector('.overlay');

        hamburgerMenu.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
});
