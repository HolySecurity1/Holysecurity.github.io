document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        console.log('Nav Toggle and Menu found'); // Debug message

        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
            navToggle.classList.toggle('close');
            console.log('Nav Toggle clicked'); // Debug message
        });
    } else {
        console.log('Nav Toggle or Menu not found'); // Debug message
    }
});
