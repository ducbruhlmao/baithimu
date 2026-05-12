document.addEventListener("DOMContentLoaded", function () {
  console.log("JS OK");

  const path = window.location.pathname.toLowerCase();

  if (path.includes("thongbao")) {
    setActive("thongbao");
  } else if (path.includes("trandau")) {
    setActive("trandau");
  } else if (path.includes("tapluyen")) {
    setActive("tapluyen");
  } else if (path.includes("benle")) {
    setActive("benle");
  } else if (path.includes("taitro")) {
    setActive("taitro");
  }

  loadPage(1);

  document.querySelectorAll(".video-item").forEach((item) => {
    item.addEventListener("click", function () {
      const id = this.getAttribute("data-id");

      this.innerHTML = `
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/${id}?autoplay=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      `;
    });
  });
});

function setActive(id) {
  document.querySelectorAll(".submenu a").forEach((a) => {
    a.classList.remove("active");
  });

  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function loadPage(page) {
  document.querySelectorAll(".page").forEach((p) => {
    p.style.display = "none";
  });

  const current = document.getElementById("page" + page);
  if (current) current.style.display = "block";

  document.querySelectorAll(".trang a").forEach((a) => {
    a.classList.remove("active");
  });

  const btn = document.querySelectorAll(".trang a")[page - 1];
  if (btn) btn.classList.add("active");
}

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