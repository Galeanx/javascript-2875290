// index.js

function iniciarSesion() {
    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Verificar si los datos existen en localStorage
    const usuarioRegistrado = localStorage.getItem('usuario');
    const contraseñaRegistrada = localStorage.getItem('contraseña');

    if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
        // Redirigir a la página principal o a otro lugar
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir a otra página si es necesario
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
