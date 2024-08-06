function validarFormulario() {
    // Aquí puedes validar el formulario antes de enviar
    // Por ejemplo, verificar que las credenciales sean correctas
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Verificar si los datos existen en localStorage
    const usuarioRegistrado = localStorage.getItem('usuario');
    const contraseñaRegistrada = localStorage.getItem('contraseña');

    if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
        alert('Inicio de sesión exitoso');
        // Permitir el envío del formulario
        return true;
    } else {
        alert('Usuario o contraseña incorrectos');
        // Evitar el envío del formulario
        return false;
    }

    

}