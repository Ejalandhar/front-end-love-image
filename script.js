const bodyEl = document.querySelector("body");
const MAX_ELEMENTS = 100;

function createHeart(x, y) {
  const spanEl = document.createElement("span");
  const size = Math.random() * 100;
  const hue = Math.floor(Math.random() * 360);
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";
  spanEl.style.filter = `hue-rotate(${hue}deg)`;
  document.body.appendChild(spanEl);

  setTimeout(() => spanEl.remove(), 3000);

  const allSpans = document.querySelectorAll("span");
  if (allSpans.length > MAX_ELEMENTS) {
    allSpans[0].remove();
  }
}

bodyEl.addEventListener("mousemove", (event) => {
  createHeart(event.clientX, event.clientY);
});

bodyEl.addEventListener("click", (event) => {
  for (let i = 0; i < 10; i++) {
    createHeart(event.clientX, event.clientY);
  }
});
