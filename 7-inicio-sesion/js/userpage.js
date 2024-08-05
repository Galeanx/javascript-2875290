// index.js

function iniciarSesion() {
    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Verificar si los datos existen en localStorage
    const usuarioRegistrado = localStorage.getItem('usuario');
    const contraseñaRegistrada = localStorage.getItem('contraseña');

    if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
        // Redirigir a userpage.html si el inicio de sesión es exitoso
        window.location.href = '../html/userpage.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
