// const initialCards = [
//     {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
    // {
    //   name: 'Байкал',
    //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    // },
    // {
    //     name: 'Архыз',
    //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    //   },
    //   {
    //     name: 'Челябинская область',
    //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    //   },
    //   {
    //     name: 'Иваново',
    //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    //   },
    //   {
    //     name: 'Камчатка',
    //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    //   },
  // ];



const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#photo-gallery').content;

/*Настраиваем попап Big-screen*/
const bigPicPopup = document.querySelector(".popup_big-pic");
const popupCloseBtn = bigPicPopup.querySelector(".popup__close-button");
const imageCard = document.querySelector(".photo-gallery__item");
const bigImageOpen = bigPicPopup.querySelector(".popup__img-big");
const PicPopupContainer = document.querySelector(".photo-gallery__container");



// функция создания карточки с фото
function createCard(itemArr) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImg = cardElement.querySelector('.photo-gallery__item');
    cardImg.src = itemArr.link;
    return cardElement;
  }


/* Открываем попап */
function openPopup(popup) {
    popup.classList.add('popup_opened');
    addPopupCloseHandler(popup); /*закрываем клавишей esc и клик по оверлей */
}

/*Закрывающая попап */
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    removePopupHandler(popup); /*удаляем обработчик клавиши esc и клик по оверлей */
}

/*Настраиваем попап Big-screen*/
cardContainer.onclick = function openImagePopup(e) {
    bigImageOpen.src = e.target.src
    openPopup(bigPicPopup);
}

// cardContainer.addEventListener('click', function () {
//     openPopup(bigPicPopup);
//     bigImageOpen.src = imageCard.src;
//   });


popupCloseBtn.addEventListener("click", function () {
    closePopup(bigPicPopup);
});


/*Функция, закрывающая попап по Escape или при клике по оверлею*/
function closePopupEscOverLay(evt) {
    const popupOpened = document.querySelector('.popup_opened');

    if (evt.key === 'Escape' || evt.target === popupOpened) {
        closePopup(popupOpened);
    }
}

/*Навешиваем обработчики для закрытия попапа по Escape и по клику по оверлею*/
function addPopupCloseHandler(popup) {
    document.body.addEventListener('keyup', closePopupEscOverLay);
    popup.addEventListener('click', closePopupEscOverLay);
}

/*Удаляем обработчики*/
function removePopupHandler(popup) {
    document.body.removeEventListener('keyup', closePopupEscOverLay);
    popup.removeEventListener('click', closePopupEscOverLay);
}

initialCards.forEach(function (item) {
    const newCard = createCard(item);
    cardContainer.prepend(newCard);
  })
