const formulario = document.querySelector('.formulario')
const username = document.querySelector('.username')
const password = document.querySelector('.password')



//Inicio de sesion

function validarUsuario (e){
    e.preventDefault();

    let currentUser = JSON.parse( localStorage.getItem('user') )
    console.log(currentUser.userName)
    console.log(currentUser.userPass)

    console.log(Boolean(username.value === currentUser.userName));
    console.log(Boolean(password.value === currentUser.userPass));

    if(username.value === currentUser.userName && password.value === currentUser.userPass){
        console.log('Felicidades puedes entrar 🔥')
        window.location = "./userpage.html"
        console.log
    }else{
        console.log('Siga intentando parcerito 🥵')
    }

    formulario.reset()
}

formulario.addEventListener('submit', validarUsuario)


























































/* let nombre = 'José'
let items = ['uno', 'dos', 'tres', 'cuatro','cinco']
let pelicula = {
    id: 10,
    nombre: 'Repent',
    year: 2010,
    Artista: 'Shaggy',
    genero: 'Dancehall',
    image: 'https://images.genius.com/c7ea118897fb049183420f4d3b21dec0.1000x1000x1.png'

}

function agregarStorage (key, value){
    if(typeof value === 'string'){
        localStorage.setItem(key,value)
        
    }else{
        localStorage.setItem( key,JSON.stringify(value) )
    }
 }

agregarStorage ('nombre', nombre)
agregarStorage ('carrito', items)
agregarStorage ('pelicula', pelicula)

function obtenerDatos (){
    let nombreUsuario = localStorage.getItem('nombre')
    let carritoUsuario = JSON.parse(localStorage.getItem('carrito') )
    let peliculaUsuario = JSON.parse(localStorage.getItem('pelicula') )

    console.log(carritoUsuario, typeof carritoUsuario)

    carritoUsuario.forEach(item => {
        console.log(item) 


})

}

obtenerDatos ()

function borrarItem (item){
    localStorage.removeItem(item)
}

/* 
borrarItem ('pelicula')
borrarItem ('nombre')
borrarItem ('carrito')
borrarItem ('name')
 */

/* function borrarTodo (){
    localStorage.clear()
}

borrarTodo ()

document.getElementById('formularioInicioSesion').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensajeError = document.getElementById('mensajeError');

    if (usuario === 'admin' && contrasena === 'password123') {
        mensajeError.textContent = 'Inicio de sesión exitoso';
        mensajeError.style.color = 'green';
    } else {
        mensajeError.textContent = 'Usuario o contraseña incorrectos';
    }
}); */ 