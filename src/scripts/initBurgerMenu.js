const burgerMenuNode = document.querySelector('.burger-menu');
const navLinkNodes = burgerMenuNode.querySelectorAll('nav a');
const burgerButton = document.querySelector('.burger');

function toggleBurgerMenu() {
  burgerMenuNode.classList.toggle('invisible');
  burgerMenuNode.classList.toggle('translate-y-[-100%]');
}

function handleBurgerButton() {
  toggleBurgerMenu();
  navLinkNodes.forEach((navLinkNode) => {
    navLinkNode.addEventListener('click', toggleBurgerMenu);
  });
}

if (burgerButton && burgerMenuNode) {
  burgerButton.addEventListener('click', handleBurgerButton);
}
