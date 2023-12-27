function showNav() {
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
}

/* // Datos de ejemplo para la búsqueda


const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");

// Función para filtrar los resultados según la búsqueda
function filterResults(searchTerm) {
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  displayResults(filteredData);
}

// Función para mostrar los resultados
function displayResults(results) {
  resultsContainer.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    resultsContainer.appendChild(li);

    li.addEventListener("click", () => {
      searchInput.value = result;
      resultsContainer.innerHTML = "";
    });
  });
}

// Event listener para el input de búsqueda
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  if (searchTerm.length > 0) {
    filterResults(searchTerm);
  } else {
    resultsContainer.innerHTML = "";
  }
});

// Función para mostrar los resultados
function displayResults(results) {
  resultsContainer.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    resultsContainer.appendChild(li);

    li.addEventListener("click", () => {
      // Redirigir a una URL relacionada con el resultado seleccionado
      window.location.href = `https://tusitio.com/${result}`; // Reemplaza con tu URL base
    });
  });
}

 */
