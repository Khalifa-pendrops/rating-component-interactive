const ratingState = document.querySelector(".rating-state");
const ratingCycle = document.querySelectorAll(".numbers span");
const submitBtn = document.querySelector(".btn");
const thankYou = document.querySelector(".thankyou-state");
const displayNumber = document.getElementById("rate");
const active = document.querySelector(".active");

let clickedNumber = 0;

ratingCycle.forEach((span) => {
  span.addEventListener("click", function (a) {
    if (active) {
      active.classList.remove("active");
    }
    const anyThing = a.target;
    anyThing.classList.add("active");
    clickedNumber = a.target.innerText;
    console.log(clickedNumber);
  });
});

submitBtn.addEventListener("click", function () {
  ratingState.classList.add("hidden");
  thankYou.classList.remove("hidden");
  displayNumber.innerText = clickedNumber;
});
