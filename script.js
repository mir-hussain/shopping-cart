const iPhonePrice = 1219;
const coverPrice = 59;

document.getElementById("counter1").value = 1;
document.getElementById("counter2").value = 1;

function counterUpdater(counterId, count) {
  const currentValue = parseInt(document.getElementById(counterId).value);
  const newValue = currentValue + count;
  if (newValue < 0) {
    return 0;
  }
  document.getElementById(counterId).value = newValue;
}

function priceUpdater(priceId, product) {
  const currentPrice = parseInt(document.getElementById(priceId).innerText);
  const updatedPrice = currentPrice + product;
  if (updatedPrice < 0) {
    return 0;
  }
  document.getElementById(priceId).innerText = updatedPrice;
}

const addButton = document.querySelectorAll(".add-one");

addButton[0].addEventListener("click", () => {
  counterUpdater("counter1", 1);
  priceUpdater("price1", iPhonePrice);
});
addButton[1].addEventListener("click", () => {
  counterUpdater("counter2", 1);
  priceUpdater("price2", coverPrice);
});

const reduceButton = document.querySelectorAll(".reduce-one");

reduceButton[0].addEventListener("click", () => {
  counterUpdater("counter1", -1);
  priceUpdater("price1", -1 * iPhonePrice);
});

reduceButton[1].addEventListener("click", () => {
  counterUpdater("counter2", -1);
  priceUpdater("price2", -1 * coverPrice);
});

