document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.hamburger');
    var overlay = document.getElementById('overlay');

    menuButton.addEventListener('click', function() {
        document.body.classList.toggle('menu-open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        document.body.classList.remove('menu-open');
        overlay.classList.remove('active');
    });
});
