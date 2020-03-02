const cards = document.querySelectorAll(".card");
console.log(cards);

function transition(event) {
  console.log(event);
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

cards.forEach(card => card.addEventListener("click", transition));
