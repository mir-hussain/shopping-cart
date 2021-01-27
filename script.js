const iPhonePrice = 1219;
const coverPrice = 59;
const iPhoneTax = 390;
const coverTax = 6;

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

function priceUpdater(priceId, product, productTax) {
  const currentPrice = parseInt(document.getElementById(priceId).innerText);

  const updatedPrice = currentPrice + product;
  if (updatedPrice < 0) {
    return 0;
  }
  document.getElementById(priceId).innerText = updatedPrice;

  const subTotal = parseInt(document.getElementById("sub-total").innerText);
  const updatedSubTotal = subTotal + product;
  document.getElementById("sub-total").innerText = updatedSubTotal;

  const tax = parseInt(document.getElementById("tax").innerText);
  const updatedTax = tax + productTax;
  document.getElementById("tax").innerText = updatedTax;
}

const addButton = document.querySelectorAll(".add-one");

addButton[0].addEventListener("click", () => {
  counterUpdater("counter1", 1);
  priceUpdater("price1", iPhonePrice, iPhoneTax);
});
addButton[1].addEventListener("click", () => {
  counterUpdater("counter2", 1);
  priceUpdater("price2", coverPrice, coverTax);
});

const reduceButton = document.querySelectorAll(".reduce-one");

reduceButton[0].addEventListener("click", () => {
  counterUpdater("counter1", -1);
  priceUpdater("price1", (-1 * iPhonePrice), (-1 * iPhoneTax));
});

reduceButton[1].addEventListener("click", () => {
  counterUpdater("counter2", -1);
  priceUpdater("price2", (-1 * coverPrice), (-1 * coverTax));
});
