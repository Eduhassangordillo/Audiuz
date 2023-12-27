function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmarPassword = document.getElementById("confirmarPassword").value;
    let errorMessage = document.getElementById("error-message");

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        errorMessage.innerHTML = "Por favor, ingrese su nombre.";
        return false;
    }

    // Validar formato de email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = "Por favor, ingrese un email válido.";
        return false;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
        errorMessage.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmarPassword) {
        errorMessage.innerHTML = "Las contraseñas no coinciden.";
        return false;
    }

    // Si todas las validaciones pasan, limpiar el mensaje de error y permitir el envío del formulario
    errorMessage.innerHTML = "";
    alert("Formulario enviado con éxito"); // Puedes cambiar esto por el envío real del formulario
}