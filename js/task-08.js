const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("Всі поля повинні бути заповнені");
  } else {
    formData.forEach((value, name) => {
      console.log(name, value);
      event.currentTarget.reset();
    });
  }
}
