
function registrarUsuario() {
    const usuario = document.getElementById('usuario-registro').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña-registro').value;

    localStorage.setItem('usuario', usuario);
    localStorage.setItem('email', email);
    localStorage.setItem('contraseña', contraseña);

    window.location.href = '../index.html';
}