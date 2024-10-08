// открытие попапа
export function openModal(modal) {
  modal.classList.add('popup_is-animated');
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleKeyDown);
  modal.addEventListener('click', handleOutside);
}

// закрытие попапа Esc
function handleKeyDown(evt) {
  if (evt.key === 'Escape') {
      const popupIsOpen = document.querySelector('.popup_is-opened');
      closeModal(popupIsOpen);
  }
};
  
// закрытие попапа нажатием на оверлей
function handleOutside (evt) {
  if (evt.target === evt.currentTarget) {
      closeModal(evt.currentTarget);
  }
};

// закрытие попапа
export function closeModal (modal) {
  modal.classList.remove('popup_is-opened');
  modal.removeEventListener('click', handleOutside);
  document.removeEventListener('keydown', handleKeyDown);
};

export function handleCloseModal(evt) {
    
  const closeModalFromButton = evt.target.closest('.popup');
      closeModal(closeModalFromButton);
};