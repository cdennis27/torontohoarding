const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const menuButton = document.querySelector('.menuButton')

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleButton.classList.toggle('close');
    menuButton.classList.toggle('close');
console.log(menuButton.classList);
    const isOpened = menuButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        menuButton.setAttribute('aria-expanded', 'true');

    }
    else {
        menuButton.setAttribute('aria-expanded', 'false');
    }
});