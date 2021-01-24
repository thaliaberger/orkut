const legenda = document.getElementById("legendaID");
const items = document.getElementById("items");
const fas = document.getElementById("fas");
const stars = document.getElementById("stars");
const input = document.getElementById("input");
const inputLink = document.getElementById("input-link");
const depo = document.getElementById("profile-depo");

const aboutFotos = document.getElementById("aboutFotos");
const profileFotos = document.getElementById("profile-fotos");

const aboutVideos = document.getElementById("aboutVideos");
const profileVideos = document.getElementById("profile-videos");

const fotosSeta = document.getElementById("fotos-seta");
const videosSeta = document.getElementById("videos-seta");
const deposSeta = document.getElementById("depos-seta");

const fotosPopup = document.getElementById("fotosPopup");
const videosPopup = document.getElementById("videosPopup");
const depoPopup = document.getElementById("depoPopup");

const verDepos = document.getElementById("ver-depos");
const verVideos = document.getElementById("ver-videos");
const verFotos = document.getElementById("ver-fotos");

verDepos.onclick = function () {
  depoPopup.setAttribute("class", "depo-popup-block");
  setTimeout(function () {
    depoPopup.setAttribute("class", "depo-popup");
  }, 2000);
};

verFotos.onclick = function () {
  fotosPopup.setAttribute("class", "fotos-popup-block");
  setTimeout(function () {
    fotosPopup.setAttribute("class", "fotos-popup");
  }, 2000);
};

verVideos.onclick = function () {
  videosPopup.setAttribute("class", "videos-popup-block");
  setTimeout(function () {
    videosPopup.setAttribute("class", "videos-popup");
  }, 2000);
};

fotosSeta.onclick = function () {
  if (fotosSeta.getAttribute("class") === "right") {
    fotosSeta.setAttribute("class", "bottom");
  } else {
    fotosSeta.setAttribute("class", "right");
  }
};

videosSeta.onclick = function () {
  if (videosSeta.getAttribute("class") === "right") {
    videosSeta.setAttribute("class", "bottom");
  } else {
    videosSeta.setAttribute("class", "right");
  }
};

deposSeta.onclick = function () {
  if (deposSeta.getAttribute("class") === "right") {
    deposSeta.setAttribute("class", "bottom");
  } else {
    deposSeta.setAttribute("class", "right");
  }
};

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
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

aboutVideos.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

profileFotos.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

profileVideos.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

depo.onclick = function () {
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

input.onchange = function () {
  inputLink.setAttribute(
    "href",
    `https://www.google.com/search?q=${input.value}`
  );
};

window.onload = () => {
  if (localStorage.hasOwnProperty("star")) {
    stars.innerText = `⭐ ${localStorage.getItem("star")}`;
  }
};
