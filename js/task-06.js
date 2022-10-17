const inputEl = document.querySelector("#validation-input");
console.dir(inputEl);
inputEl.addEventListener("blur", onInputDataEntry);
const testLength = inputEl.getAttribute("data-length");

function onInputDataEntry(event) {
  inputEl.classList.remove("valid", "invalid");
  if (event.currentTarget.value.length == testLength) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
