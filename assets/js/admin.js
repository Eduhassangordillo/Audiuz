function obtenerDatos() {
  const usuario = localStorage.getItem("user");
  console.log(usuario)
  if (usuario) {
    document.getElementById("user").innerHTML = `Bienvenido a tu centro de control, "${usuario}"`;
  }
}

window.addEventListener("load", function () {
  obtenerDatos();
});



let canciones = []


function mostrarFormulario() {
  // Mostrar el formulario para agregar una nueva canción
  document.getElementById('formularioCancion').style.display = 'block';
}

function añadirCancion() {
  // Obtener los valores de los campos de entrada
  let nombre = document.getElementById('nombreCancion').value;
  let artista = document.getElementById('artistaCancion').value;

  // Crear un nuevo objeto de canción
  let nuevaCancion = {
      nombre: nombre,
      artista: artista
  };

  // Agregar la nueva canción a la lista de canciones
  canciones.push(nuevaCancion);

  // Actualizar la tabla de canciones
  actualizarTablaCanciones();
}
document.getElementById('formularioCancion').addEventListener('submit', function(event) {
  // Prevenir la acción por defecto del formulario
  event.preventDefault();

  // Llamar a la función añadirCancion
  añadirCancion();
});
function actualizarTablaCanciones() {
  // Obtener la referencia del elemento body
  let tablaCanciones = document.getElementById('tablaCanciones');
  let CuerpoTablaCanciones = document.getElementById('CuerpoTablaCanciones');

  // Vaciar la tabla
  CuerpoTablaCanciones.innerHTML = '';

  // Recorrer la lista de canciones
  for (let i = 0; i < canciones.length; i++) {
      // Insertar una fila en el cuerpo de la tabla
      let fila = CuerpoTablaCanciones.insertRow();

      // Insertar una celda para cada atributo de la canción
      let celdaNombre = fila.insertCell();
      let celdaArtista = fila.insertCell();
      let celdaAcciones = fila.insertCell();

      // Crear los botones de editar y eliminar
      let botonEditar = document.createElement('button');
      botonEditar.textContent = 'Editar';
      botonEditar.onclick = function() { editarCancion(i); };
      let botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.onclick = function() { eliminarCancion(i); };

      // Agregar la información a cada celda
      celdaNombre.innerHTML = canciones[i].nombre;
      celdaArtista.innerHTML = canciones[i].artista;
      celdaAcciones.appendChild(botonEditar);
      celdaAcciones.appendChild(botonEliminar);
  }
}

function eliminarCancion(index) {
  // Elimina la canción del array de canciones
  canciones.splice(index, 1);

  // Actualiza la tabla de canciones
  actualizarTablaCanciones();
}

function editarCancion(index) {
  console.log("Índice de la canción a editar: ", index);
  console.log("Canción a editar: ", canciones[index]);
  // Obtén la canción a editar
  let cancion = canciones[index];

  // Rellena los campos de entrada con los datos de la canción
  document.getElementById('nombreCancionEditar').value = cancion.nombre;
  document.getElementById('artistaCancionEditar').value = cancion.artista;

  // Guarda el índice de la canción que se está editando
  document.getElementById('indiceCancionEditar').value = index;

  // Muestra el formulario de edición
  document.getElementById('formularioEditar').style.display = 'block';
}

function guardarCambios() {
  // Obtén el índice de la canción que se está editando
 let index = document.getElementById('indiceCancionEditar').value;

  // Crea un objeto con los nuevos datos de la canción
 let cancionEditada = {
    nombre: document.getElementById('nombreCancionEditar').value,
    artista: document.getElementById('artistaCancionEditar').value
  };

  // Reemplaza la canción en el array de canciones con la canción editada
  canciones[index] = cancionEditada;

  // Oculta el formulario de edición
  document.getElementById('formularioEditar').style.display = 'none';

  // Actualiza la tabla de canciones
  actualizarTablaCanciones();
}