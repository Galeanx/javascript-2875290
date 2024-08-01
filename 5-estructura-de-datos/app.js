const container = document.querySelector ('.container')

peliculas.forEach(element => {
let card = document.createElement('div')

card.innerHTML = `
    <div class="card">
        <img src="${element.image}"
alt="Imagen de la tarjeta" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${element.nombre}</h2>
            <p class="card-description">
                Año: ${element.year} <br>
                Artista: '${element.Artista}' <br>
                Género: '${element.genero}'</p>
        </div>
    </div>
    `
    container.appendChild(card)
} )