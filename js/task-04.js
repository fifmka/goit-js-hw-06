const counterNum = document.querySelector("#value");
const buttonDescr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');

buttonDescr.addEventListener("click", onDescrBtnClick);
buttonIncr.addEventListener("click", onIncrBtnClick);

let counterValue = 0;
function onDescrBtnClick(event) {
  counterValue -= 1;
  counterNum.textContent = counterValue;
}
function onIncrBtnClick(event) {
  counterValue += 1;
  counterNum.textContent = counterValue;
}
