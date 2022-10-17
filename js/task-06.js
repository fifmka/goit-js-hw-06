const inputEl = document.querySelector("#validation-input");
console.dir(inputEl);
inputEl.addEventListener("blur", onInputDataEntry);
function onInputDataEntry(event) {
  if (event.currentTarget.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
