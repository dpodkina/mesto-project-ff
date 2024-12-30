//Добавили карточки на страницу

// Объявили переменную, где будут храниться карточки
const placesList = document.querySelector(".places__list");

const cardInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

function render() {
  cardInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  placesList.append(cardElement);
}

render();

//Удаление карточек

const content = document.querySelector(".content");

const deleteCard = content.querySelector(".card__delete-button");

deleteCard.addEventListener("click", function () {
  const cards = document.querySelectorAll(".places__list");
  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  }
});
