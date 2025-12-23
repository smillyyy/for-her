// ===== Move No button randomly =====
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  const top = Math.floor(Math.random() * 80 + 5);
  const left = Math.floor(Math.random() * 80 + 5);
  elm.style.top = top + "%";
  elm.style.left = left + "%";
}

const moveRandom = document.querySelector("#move-random");
if(moveRandom){
  moveRandom.addEventListener("mouseenter", function (e) { moveRandomEl(e.target); });
  moveRandom.addEventListener("click", function (e) { moveRandomEl(e.target); });
}

// ===== Falling Hearts on Yes Page =====
window.addEventListener("load", () => {
  if(document.body.classList.contains("yes-page")){
    for (let i = 0; i < 120; i++) {
      createHeart();
    }
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const emojis = ["❤️", "💋", "😘", "💖", "💗", "💓", "💞", "💕"];
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 6 + 4) + "s";
  heart.style.fontSize = (Math.random() * 15 + 20) + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
    if (document.querySelectorAll('.heart').length < 150) createHeart();
  }, 10000);
}
