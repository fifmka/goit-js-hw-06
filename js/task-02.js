const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = [];
ingredients.forEach((elem) => {
  const liEl = document.createElement("li");
  liEl.textContent = elem;
  liEl.classList.add("item");
  list.push(liEl);
});
console.log(list);

const ulEl = document.querySelector("#ingredients");
console.log(ulEl);
ulEl.append(...list);
