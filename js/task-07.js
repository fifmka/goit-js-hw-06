const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputDataEntry);
function onInputDataEntry(event) {
  textEl.style.fontSize = `${this.value}px`;
}
