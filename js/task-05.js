const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputDataEntry);
function onInputDataEntry(event) {
  if (event.target.value.length > 0) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
}
