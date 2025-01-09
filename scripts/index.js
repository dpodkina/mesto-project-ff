// Объявили переменную, куда выведем готовые карточки
const placesList = document.querySelector(".places__list");

function renderCard({ name, link }, deleteCard) {
  //Скопировали шаблон
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  //Установили значения вложенных элементов
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").setAttribute("alt", name);
  // обработчик клика, по которому будет вызван переданный в аргументах колбэк (функция).
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function deleteCard() {
    const cards = cardElement.closest("li");
    cards.remove();
  });
  //возвращаем созданную карточку
  return cardElement;
}

initialCards.map(renderCard).forEach((el) => placesList.append(el));
