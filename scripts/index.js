// Объявили переменную, куда выведем готовые карточки
const placesList = document.querySelector(".places__list");

function renderCard({ name, link }) {
  // Скопировали шаблон
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  // Установили значения вложенных элементов
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").setAttribute("alt", name);
  // Обработчик клика, по которому будет вызван переданный в аргументах колбэк (функция).
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);
  return cardElement;
}

// Функция удаления
function deleteCard() {
  const cards = this.parentElement;
  cards.remove();
}

// Массив с данными
initialCards
  .map(renderCard) // Преобразуем в массив элементов
  .forEach((el) => placesList.append(el)); // каждый элемент добавляем в контейнер
