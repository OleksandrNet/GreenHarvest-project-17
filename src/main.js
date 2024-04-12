// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-open');
//   }
// })();


document.addEventListener('DOMContentLoaded', function() {
    const backdrop = document.querySelector('.backdrop');
    const menu = document.querySelector('.mobile-menu');
    const openButton = document.querySelector('[data-modal-open]');
    const closeButton = document.querySelector('[data-modal-close]');
    
    openButton.addEventListener('click', function() {
        openMenu();
    });

    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        closeMenu();
    });

    function openMenu() {
        backdrop.classList.add('is-open');
        menu.classList.add('is-open');
    }

    function closeMenu() {
        backdrop.classList.remove('is-open');
        menu.classList.remove('is-open');
    }
});
