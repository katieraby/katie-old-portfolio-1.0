//project cards
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
//left or right quadrants
const topPositionAll = Math.floor(Math.random() * 35);
const leftOrRightPosition = Math.floor(Math.random() * 25);
const leftOrRightPositionMid = Math.floor(Math.random() * 20);

// middle-end quadrant for top value
const topPositionMid = Math.floor(Math.random() * 64 + 36);

const leftCats = document.querySelectorAll(".catsvg__left");
leftCats.forEach(cat => {
  cat.style.setProperty("top", topPositionAll + "vh");
  cat.style.setProperty("left", leftOrRightPosition + "vw");
});

const leftFlowers = document.querySelectorAll(".flowers__left");
leftFlowers.forEach(flower => {
  flower.style.setProperty("top", topPositionMid + "vh");
  flower.style.setProperty("left", leftOrRightPositionMid + "vw");
});

const rightFlowers = document.querySelectorAll(".flowers__right");
rightFlowers.forEach(flower => {
  flower.style.setProperty("top", topPositionAll + "vh");
  flower.style.setProperty("right", leftOrRightPosition + "vw");
});

const rightHeart = document.querySelectorAll(".heart__right");
rightHeart.forEach(heart => {
  heart.style.setProperty("top", topPositionMid + "vh");
  heart.style.setProperty("right", leftOrRightPositionMid + "vw");
});
