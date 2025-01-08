// Объявили переменную, куда выведем готовые карточки
const placesList = document.querySelector(".places__list");

function renderCard({ name, link }) {
  //Скопировали шаблон
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  //Установили значения вложенных элементов
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  cardElement.setAttribute("alt", name);
  // обработчик клика, по которому будет вызван переданный в аргументах колбэк (функция).
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);
  //возвращаем созданную карточку
  return cardElement;
}

//Функция удаления
function deleteCard() {
  const cards = this.parentElement;
  cards.remove();
}

initialCards.map(renderCard, deleteCard).forEach((el) => placesList.append(el));
