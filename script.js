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
        <h3>${date}</h3>
        <p>${today >= unlockDate ? "💌 Open" : "🔒 Locked"}</p>
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
