function inicioSesion() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("/assets/json/user.json")
    .then((response) => response.json())
    .then((users) => {
      const usuarioLogueado = users.find(
        (user) => user.username === username && user.password === password
      );
      console.log(usuarioLogueado, "user");

      if (usuarioLogueado) {
        localStorage.setItem("user", username);
        Swal.fire({
          title: "Bienvenido",
          text: "Ingrersaste correctamente",
          icon: "success",
        });

        setTimeout(function () {
          window.location.href = "admin.html";
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o contraseña incorrectos",
        });
      }
    });
}

function obtenerDatos() {
  const usuario = localStorage.getItem("user");
  if (usuario) {
    document.getElementById(
      "user"
    ).innerHTML = `Bienvenido a tu centro de control ${usuario}`;
  } 
}

function cerrarSesion() {
  localStorage.removeItem("user");

  Swal.fire({
    title: "Cerraste sesión",
    text: "Vuelvas prontooo",
    icon: "success",
  });

  setTimeout(function () {
    window.location.href = "login.html";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", function () {
  obtenerDatos();
});
