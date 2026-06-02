const calendar = document.getElementById("calendar");

const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popupTitle");

const popupMessage = document.getElementById("popupMessage");

const closeBtn = document.getElementById("closeBtn");

fetch("./messages.json")

  .then(response => response.json())

  .then(data => {

    const today = new Date();

    Object.keys(data).forEach(date => {

      const card = document.createElement("div");

      card.classList.add("day-card");

      const unlockDate = new Date(date);

      card.innerHTML = `
  <h3>${data[date].title}</h3>

  <p>${date}</p>

  <div style="font-size:55px;margin:15px 0;">
    ${today >= unlockDate ? "💌" : "🔒"}
  </div>

  <p>
    ${today >= unlockDate
      ? "Click to open 💌"
      : "Locked"}
  </p>
`;
      if (today >= unlockDate) {

        card.addEventListener("click", () => {

          popup.classList.remove("hidden");

          popupTitle.innerText = data[date].title;

          popupMessage.innerText = data[date].message;

        });

      } else {

        card.classList.add("locked");

      }

      calendar.appendChild(card);

    });

  })

  .catch(error => {

    console.error(error);

    calendar.innerHTML = `
      <p>Failed to load messages 💔</p>
    `;

  });

closeBtn.addEventListener("click", () => {

  popup.classList.add("hidden");

});

window.addEventListener("click", (e) => {

  if (e.target === popup) {

    popup.classList.add("hidden");

  }

});

/* Floating Hearts */

const heartsContainer = document.querySelector('.hearts');

for(let i=0;i<40;i++){

  const heart = document.createElement('div');

  heart.classList.add('heart');

  heart.innerHTML = '💖';

  heart.style.left = Math.random()*100 + 'vw';

  heart.style.animationDuration =
    (6 + Math.random()*10) + 's';

  heart.style.fontSize =
    (15 + Math.random()*25) + 'px';

  heart.style.animationDelay =
    Math.random()*10 + 's';

  heartsContainer.appendChild(heart);
}

/* MUSIC PLAYER */

const musicBtn = document.getElementById('musicBtn');

const bgMusic = document.getElementById('bgMusic');

let isPlaying = false;

musicBtn.addEventListener('click',()=>{

  if(!isPlaying){

    bgMusic.play();

    musicBtn.innerHTML='💖';

    isPlaying=true;

  }else{

    bgMusic.pause();

    musicBtn.innerHTML='🎵';

    isPlaying=false;

  }

});

/* CURSOR HEART TRAIL */

document.addEventListener('mousemove',(e)=>{

  const heart=document.createElement('div');

  heart.classList.add('cursor-heart');

  heart.innerHTML='💖';

  heart.style.left=e.clientX+'px';

  heart.style.top=e.clientY+'px';

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },1000);

});

/* SHOOTING STARS */

function createShootingStar(){

  const star=document.createElement('div');

  star.classList.add('shooting-star');

  star.style.left=Math.random()*window.innerWidth+'px';

  star.style.top=Math.random()*300+'px';

  document.body.appendChild(star);

  setTimeout(()=>{
    star.remove();
  },2000);

}

setInterval(createShootingStar,4000);
