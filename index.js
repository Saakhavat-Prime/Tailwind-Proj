let onOffBtn = document.querySelector('.on-offbtn');
let onOff = document.querySelector('.on-off');

onOffBtn.addEventListener('click', () => {
  onOff.classList.toggle('translate-x-8');
  onOffBtn.classList.toggle('bg-green-500');
});

// SLIDER
const track = document.querySelector(".track");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const cards = document.querySelectorAll(".set");

let index = 0;
const visible = 3;
const cardWidth = cards[0].getBoundingClientRect().width + 24;

// clone
for (let i = 0; i < visible; i++) {
  track.appendChild(cards[i].cloneNode(true));
}

nextBtn.addEventListener("click", () => {
  index++;
  track.style.transition = "0.5s";
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  if (index === cards.length) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      track.style.transform = "translateX(0)";
    }, 500);
  }
});

prevBtn.addEventListener("click", () => {
  if (index <= 0) {
    track.style.transition = "none";
    index = cards.length;
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        index--;
        track.style.transition = "0.5s";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
      });
    });
  } else {
    index--;
    track.style.transition = "0.5s";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});