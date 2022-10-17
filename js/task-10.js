function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]');
console.dir(input);
const btnCreate = document.querySelector("[data-create]");

const btnDestroy = document.querySelector("[data-destroy]");

const div = document.querySelector("#boxes");

btnCreate.addEventListener("click", getAmount);
btnDestroy.addEventListener("click", destroyBoxes);

function getAmount(event) {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  console.log(amount);
  let boxes = [];
  const boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let newBoxSize = boxSize + i * 10;
    const newDiv = `<div style="width: ${newBoxSize}px; height: ${newBoxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxes.push(newDiv);
  }

  div.insertAdjacentHTML("beforeend", boxes.join(""));
}

function destroyBoxes() {
  div.innerHTML = "";
  input.value = "";
}
