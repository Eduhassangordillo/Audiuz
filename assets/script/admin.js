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

function actualizarTablaCanciones() {
  // Obtener la referencia del elemento body
  let tablaCanciones = document.getElementById('tablaCanciones');

  // Vaciar la tabla
  tablaCanciones.innerHTML = '';

  // Crear el encabezado de la tabla
  let thead = tablaCanciones.createTHead();
  let filaEncabezado = thead.insertRow();
  let encabezadoNombre = filaEncabezado.insertCell();
  let encabezadoArtista = filaEncabezado.insertCell();
  let encabezadoAcciones = filaEncabezado.insertCell();
  encabezadoNombre.innerHTML = "Canción";
  encabezadoArtista.innerHTML = "Artista";
  encabezadoAcciones.innerHTML = "Acciones";

  // Recorrer la lista de canciones
  for (let i = 0; i < canciones.length; i++) {
      // Insertar una fila en la tabla
      let fila = tablaCanciones.insertRow();

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

function editarCancion(id) {
  // Editar una canción existente en la tabla
  // Aquí necesitarás acceder a los datos de la canción con el id dado y actualizarlos
}

function eliminarCancion(id) {
  // Eliminar una canción existente de la tabla
  // Aquí necesitarás eliminar los datos de la canción con el id dado
}