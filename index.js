const track = document.querySelector(".track");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const cards = document.querySelectorAll(".card");

const visibleCards = 3;
const cardWidth = cards[0].offsetWidth + 30;

let index = 0;

// clone first 3 cards
for(let i = 0; i < visibleCards; i++){
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
}

const allCards = document.querySelectorAll(".card");

nextBtn.addEventListener("click", () => {

    index++;

    track.style.transition = "transform 0.5s ease";

    track.style.transform =
      `translateX(-${index * cardWidth}px)`;

    // when reach cloned cards
    if(index === cards.length){

        setTimeout(() => {

            track.style.transition = "none";

            index = 0;

            track.style.transform =
              `translateX(0px)`;

        }, 500);
    }
});
// prev button 
prevBtn.addEventListener("click", () => {

    if(index <= 0){

        track.style.transition = "none";

        index = cards.length;

        track.style.transform =
          `translateX(-${index * cardWidth}px)`;

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                index--;

                track.style.transition =
                  "transform 0.5s ease";

                track.style.transform =
                  `translateX(-${index * cardWidth}px)`;

            });

        });

    } else {

        index--;

        track.style.transition =
          "transform 0.5s ease";

        track.style.transform =
          `translateX(-${index * cardWidth}px)`;

    }

});