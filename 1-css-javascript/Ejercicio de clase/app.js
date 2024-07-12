var reiniciarBtn = document.getElementById('reiniciar');
document.getElementById('enviar').addEventListener('click', function() {
    var busqueda = document.getElementById('busqueda').value;
    var circulo = document.getElementById('circulo');
    
    // Cambiar el color del círculo al valor ingresado
    circulo.style.backgroundColor = busqueda;
    circulo.style.marginLeft = '600px' ;
});
    reiniciarBtn.addEventListener('click', function() {

        circulo.style.backgroundColor = 'black'
        circulo.style.marginLeft = '0px'
    });