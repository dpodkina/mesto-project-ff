//
function render() {
  const placesList = document.querySelector(".places__list");
  initialCards.forEach(renderCard);
  placesList.append(cardElement);
}

//Объявляем функцию, которую нужно вызывать при нажатии на кнопку(удаление)
const callback = () => {
  const cards = document.querySelectorAll(".places__list");
  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  }
};

function renderCard({ name, link, alt }) {
  const content = document.querySelector(".content");
  const deleteCard = content.querySelector(".card__delete-button");
  const cardTemplate = document.querySelector("#card-template").content;
  //1 шаг- Скопировали шаблон
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  //2 шаг - установили значения вложенных элементов
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = (link, (alt = name));
  return (
    (name = ""),
    ((link = ""), (alt = "")),
    //3 шаг - назначили обработчик клика
    deleteCard.addEventListener("click", callback)
  );
}

render();
