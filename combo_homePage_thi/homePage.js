// thanh menu mobile
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

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