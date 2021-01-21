/*Настраиваем попап Big-screen*/
const bigPicPopup = document.querySelector(".popup_big-pic");
const popupCloseBtn = document.querySelector(".popup__close-button");
const bigImageOpen = bigPicPopup.querySelector("img");


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
function openImagePopup(e) {
    const image = e.currentTarget.src;
    bigImageOpen.src = image
    openPopup(bigPicPopup);
}


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