const legenda = document.getElementById("legendaID");
const items = document.getElementById("items");
const fas = document.getElementById("fas");
const stars = document.getElementById("stars");
const input = document.getElementById("input");
const inputLink = document.getElementById("input-link");
const depo = document.getElementById("profile-depo");

const fotosPopup = document.getElementById("fotosPopup");
const videosPopup = document.getElementById("videosPopup");
const depoPopup = document.getElementById("depoPopup");

const aboutFotos = document.getElementById("aboutFotos");
const profileFotos = document.getElementById("profile-fotos");

const aboutVideos = document.getElementById("aboutVideos");
const profileVideos = document.getElementById("profile-videos");

items.addEventListener("mouseover", function () {
  legenda.setAttribute("class", "legenda");
});

items.addEventListener("mouseleave", function () {
  legenda.setAttribute("class", "legenda-none");
});

fas.onclick = function () {
  if (localStorage.getItem("star") === "1") {
    localStorage.setItem("star", "0");
    stars.innerText = `⭐ ${localStorage.getItem("star")}`;
  } else {
    localStorage.setItem("star", "1");
    stars.innerText = `⭐ ${localStorage.getItem("star")}`;
  }
};

aboutFotos.onclick = function () {
  fotosPopup.setAttribute("class", "fotos-popup-block");
  setTimeout(function () {
    fotosPopup.setAttribute("class", "fotos-popup");
  }, 2000);
};

aboutVideos.onclick = function () {
  videosPopup.setAttribute("class", "videos-popup-block");
  setTimeout(function () {
    videosPopup.setAttribute("class", "videos-popup");
  }, 2000);
};

profileFotos.onclick = function () {
  fotosPopup.setAttribute("class", "fotos-popup-block");
  setTimeout(function () {
    fotosPopup.setAttribute("class", "fotos-popup");
  }, 2000);
};

profileVideos.onclick = function () {
  videosPopup.setAttribute("class", "videos-popup-block");
  setTimeout(function () {
    videosPopup.setAttribute("class", "videos-popup");
  }, 2000);
};

input.onchange = function () {
  inputLink.setAttribute(
    "href",
    `https://www.google.com/search?q=${input.value}`
  );
};

depo.onclick = function () {
  depoPopup.setAttribute("class", "depo-popup-block");
  setTimeout(function () {
    depoPopup.setAttribute("class", "depo-popup");
  }, 2000);
};

window.onload = () => {
  if (localStorage.hasOwnProperty("star")) {
    stars.innerText = `⭐ ${localStorage.getItem("star")}`;
  }
};
