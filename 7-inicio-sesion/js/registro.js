// registro.js

function registrarUsuario() {
    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario-registro').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña-registro').value;

    // Guardar los datos en localStorage
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('email', email);
    localStorage.setItem('contraseña', contraseña);

    // Redirigir al index.html
    window.location.href = '../index.html';
}