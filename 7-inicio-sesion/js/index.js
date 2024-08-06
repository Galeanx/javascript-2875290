function validarFormulario() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    const usuarioRegistrado = localStorage.getItem('usuario');
    const contraseñaRegistrada = localStorage.getItem('contraseña');

    if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
        alert('Inicio de sesión exitoso');
        return true;
    } else {
        alert('Usuario o contraseña incorrectos');
        return false;
    }

    

}