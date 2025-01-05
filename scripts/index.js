//main
const content = document.querySelector(".content");
//Секция с карточками places page__section
const places = content.querySelector(".places");
// Объявили переменную, куда выведем готовые карточки
const placesList = places.querySelector(".places__list");
// TEMPLATE
const cardTemplate = document.querySelector("#card-template").content;
//Кнопка удаления карточки
const deleteButton = cardTemplate.querySelector(".card__delete-button");

function render() {
  //Метод массива
  initialCards.forEach(renderCard);
}
render();

function renderCard({ name, link }, deleteCard) {
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
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function deleteCard() {
      const cards = document.querySelectorAll(".card");
      for (let i = 0; i < cards.length; i--) {
        cards[i].remove();
      }
    });

  return placesList.append(cardElement);
}
