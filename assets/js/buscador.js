// Datos de ejemplo para la búsqueda con artistas
const data = [
  {
    artist: "Bizarrap",
    img: "../img/img-music/fruto.jpeg",
    song: "Fruto",
    page: "../pages/pages-music/fruto.html",
  },
  {
    artist: "Kidd keo",
    img: "../img/img-music/ma vie.jpeg",
    song: "Ma vie",
    page: "../pages/pages-music/maVie.html",
  },
  {
    artist: "Milo j",
    img: "../img/img-music/milagosa.jpeg",
    song: "Milagrosa",
    page: "../pages/pages-music/milagrosa.html",
  },
  {
    artist: "Taiu",
    img: "../img/img-music/rera vez.jpeg",
    song: "Rara vez",
    page: "../pages/pages-music/raraVez.html",
  },
  {
    artist: "Lil Mosey",
    img: "../img/img-music/blueberry.jpeg",
    song: "Blueberry Faygo",
    page: "../pages/pages-music/blueberry.html",
  },
  {
    artist: "Lil Mosey",
    img: "../img/img-music/noticed.jpeg",
    song: "Noticed",
    page: "../pages/pages-music/noticed.html",
  },
  {
    artist: "Central Cee",
    img: "../img/img-music/oneup.jpeg",
    song: "One Up",
    page: "../pages/pages-music/oneUp.html",
  },
  // Agrega más datos de canciones con sus respectivos artistas
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");
const containerMusic = document.querySelector(".container_music");

// Función para filtrar los resultados según la búsqueda por artista o canción
function filterResults(searchTerm) {
  const filteredData = data.filter(
    (item) =>
      item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.song.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.page.toLowerCase().includes(searchTerm.toLowerCase())
  );
  displayResults(filteredData);
}

// Función para mostrar los resultados en el contenedor container_music
function displayResults(results) {
  containerMusic.innerHTML = "";
  results.forEach((result) => {
    const musicLink = document.createElement("a");
    musicLink.classList.add("music");
    musicLink.href = `./assets/pages/pages-music/${result.song.replace(
      /\s/g,
      ""
    )}.html`;

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img");
    const img = document.createElement("img");
    img.src = `./assets/img/${result.img}`; // Ajustar la ruta a las imágenes
    img.alt = "";
    imgDiv.appendChild(img);

    const nombreDiv = document.createElement("div");
    nombreDiv.classList.add("nombre");
    const h4 = document.createElement("h4");
    h4.textContent = result.song;
    const p = document.createElement("p");
    p.textContent = result.artist;
    nombreDiv.appendChild(h4);
    nombreDiv.appendChild(p);

    musicLink.appendChild(imgDiv);
    musicLink.appendChild(nombreDiv);

    containerMusic.appendChild(musicLink);
  });
}

// Event listener para el input de búsqueda
searchInput.addEventListener("input", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  if (searchTerm.length > 0) {
    filterResults(searchTerm);
  } else {
    resultsList.innerHTML = "";
  }
});

// Funciones para dispositivos móviles
function searchMobile() {
  const searchInputMobile = document.getElementById("searchInputMobile");

  searchInputMobile.addEventListener("input", (e) => {
    e.preventDefault();
    const searchTerm = searchInputMobile.value;
    if (searchTerm.length > 0) {
      filterResults(searchTerm);
    } else {
      resultsList.innerHTML = "";
    }
  });
}

// Llamar a la función de búsqueda para dispositivos móviles
searchMobile();
