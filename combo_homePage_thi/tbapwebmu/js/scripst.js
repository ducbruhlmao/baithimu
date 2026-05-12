function toggleCard(header) {
  let card = header.parentElement;

  let allCards = document.querySelectorAll(".card");

  allCards.forEach(function (item) {
    if (item !== card) {
      item.classList.remove("active");
    }
  });

  card.classList.toggle("active");
}

function showTeam(btn) {
  document.getElementById("team").style.display = "grid";
  document.getElementById("coach").style.display = "none";
  document
    .querySelectorAll(".menu button")
    .forEach((b) => b.classList.remove("active"));

  btn.classList.add("active");
}

function showCoach(btn) {
  document.getElementById("team").style.display = "none";
  document.getElementById("coach").style.display = "grid";
  document
    .querySelectorAll(".menu button")
    .forEach((b) => b.classList.remove("active"));

  btn.classList.add("active");
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

