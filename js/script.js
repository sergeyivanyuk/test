window.addEventListener('DOMContentLoaded', () => {
    // mobile menu
    const menu = document.querySelector('.menu__list'),
          menuOpen = document.querySelector('.menu-open'),
          menuClose = document.querySelector('.menu-close');
    
    function openMenu() {
        menuOpen.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.add('active');
            menuOpen.classList.add('active');
            menuClose.classList.add('active');
        });
    }
    function closeMenu() {
        menuClose.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.remove('active');
            menuOpen.classList.remove('active');
            menuClose.classList.remove('active');
        });
    }
    
    openMenu();
    closeMenu();

    // modal
    const modal = document.querySelector('.popup'),
          closeModal = document.querySelector('.close-popup'),
          openModal = document.querySelector('.open-popup');


    function modalOpen() {
        openModal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    }
    function modalClose() {
        closeModal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
        });
    }
    
    modalOpen();
    modalClose();
});