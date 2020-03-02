const cards = document.querySelectorAll(".card");

function transition() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

cards.forEach(card => card.addEventListener("click", transition));

//scripts for randomising positions of SVGs
//left quadrant
const topPositionLeft = Math.floor(Math.random() * 35);
const leftPositionLeft = Math.floor(Math.random() * 25);
const leftPositionMidLeft = Math.floor(Math.random() * 20);

// middle-end left quadrant for top value
const topPositionMidLeft = Math.floor(Math.random() * 64 + 36);

const leftCats = document.querySelectorAll(".catsvg__left");
leftCats.forEach(cat => {
  cat.style.setProperty("top", topPositionLeft + "vh");
  cat.style.setProperty("left", leftPositionLeft + "vw");
});

const leftFlowers = document.querySelectorAll(".flowers__left");
leftFlowers.forEach(flower => {
  flower.style.setProperty("top", topPositionMidLeft + "vh");
  flower.style.setProperty("left", leftPositionMidLeft + "vw");
});
