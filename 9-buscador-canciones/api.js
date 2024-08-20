const container = document.querySelector("#resultados");
const buscador = document.querySelector("#buscador");
const textoBusqueda = document.querySelector("#textoBusqueda");
const listaStatus = document.querySelector("#listaStatus");

const canciones = [
    {
        id: 1,
        nombre: 'Waka Waka',
        year: 2010,
        Artista: 'Shakira',
        genero: 'Pop',
        image: 'https://images.genius.com/ef300d73b40f66ccc4ae2aa068c62752.1000x1000x1.png'
    },
    
    
    {
        id: 2,
        nombre: 'Danza Kuduro',
        year: 2010,
        Artista: 'Don Omar',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/f76d810912b9a58a278d4c6869c5f9d4.1000x1000x1.png'
    },
    
    {
        id: 3,
        nombre: 'Pegate',
        year: 2010,
        Artista: 'Wisin & Yandel',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/554f6b3988bb53abfe1dabf931ac7d90.999x999x1.jpg'
    },
    
    {
        id: 4,
        nombre: 'Sorry 4 That Much',
        year: 2024,
        Artista: 'Feid',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/116465aa46becf482ec6d5e03c85a51b.1000x1000x1.png'
    },
    
    {
        id: 5,
        nombre: 'Tararea',
        year: 2017,
        Artista: 'Alcolirykoz',
        genero: 'Rap',
        image: 'https://images.genius.com/08d83ad881bcf47cab7d99127860f108.1000x1000x1.jpg'
    },
    
    {
        id: 6,
        nombre: 'Esencia',
        year: 2023,
        Artista: 'Myke Towers',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/069e14e4730416785f6862e7a61f4849.1000x1000x1.png'
    },
    
    {
        id: 7,
        nombre: 'Fanatica Sensual',
        year: 2018,
        Artista: 'Plan B',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/46e6947c0063c15a145f829641447b3e.1000x1000x1.png'
    },
    
    {
        id: 8,
        nombre: 'Mirame',
        year: 2024,
        Artista: 'Blessd',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/b8149fbb801a3f3e1f7e62c17eb28f34.1000x1000x1.png'
    },
    
    {
        id: 9,
        nombre: 'Luces De Tecno',
        year: 2023,
        Artista: 'Feid',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/47b7b46ed404cc0757255bc17494599e.1000x1000x1.jpg'
    },
    
    {
        id: 10,
        nombre: 'Repent',
        year: 2010,
        Artista: 'Shaggy',
        genero: 'Dancehall',
        image: 'https://images.genius.com/c7ea118897fb049183420f4d3b21dec0.1000x1000x1.png'
    },
    
    {
        id: 11,
        nombre: 'Wind of Change',
        year: 1991,
        Artista: 'Scorpions',
        genero: 'Rock',
        image: 'https://images.genius.com/96e1b600a3f0ff62db477b9748333099.600x600x1.jpg'
    },
    
    {
        id: 12,
        nombre: 'Ambiente',
        year: 2018,
        Artista: 'J Balvin',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/4600ec854c0678d3f15306263964799c.1000x1000x1.jpg'
    },
    
    {
        id: 13,
        nombre: 'Luna',
        year: 2023,
        Artista: 'Feid',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/a6817a29955bc26af0ed704b2e705bee.1000x1000x1.png'
    },
    
    {
        id: 14,
        nombre: 'X',
        year: 2018,
        Artista: 'Nicky Jam - J Balvin',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/9c62ea8756e9de4f09429ae4c49a5d48.1000x1000x1.jpg'
    },
    
    {
        id: 15,
        nombre: 'Brickell',
        year: 2024,
        Artista: 'Feid - Yandel',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/253b655c829f05c250269d160814618c.1000x1000x1.png'
    },
    
    {
        id: 16,
        nombre: 'Sé Morir',
        year: 2019,
        Artista: 'Andres Cepeda',
        genero: 'Pop',
        image: 'https://images.genius.com/af2fa3bce0b772fec93dfad9bd291c01.953x953x1.jpg'
    },
    
    {
        id: 17,
        nombre: 'Pasarela',
        year: 2007,
        Artista: 'Dalmata',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/70109d888833263e2fbc169463162af2.982x982x1.jpg'
    },
    
    {
        id: 18,
        nombre: 'Casanova',
        year: 1982,
        Artista: 'Willie Colón',
        genero: 'Salsa',
        image: 'https://akamai.sscdn.co/uploadfile/letras/albuns/b/0/7/8/2172571711965880.jpg'
    },
    
    {
        id: 19,
        nombre: 'Offline',
        year: 2024,
        Artista: 'Feid - Young Miko',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/a3591ad4173483aed23da1b911689c1b.1000x1000x1.png'
    },
    
    {
        id: 20,
        nombre: 'As It Was',
        year: 2022,
        Artista: 'Harry Styles',
        genero: 'Pop',
        image: 'https://images.genius.com/d98059a0f2afd10b04b912355c0e8ceb.1000x1000x1.png'
    },
    
    {
        id: 21,
        nombre: 'Tightrope',
        year: 2017,
        Artista: 'LP',
        genero: 'Pop',
        image: 'https://images.genius.com/bb8d00de859ba55e929916f7adb35b76.1000x1000x1.jpg'
    },
    
    {
        id: 22,
        nombre: 'Amigos',
        year: 2023,
        Artista: 'J Balvin',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/da5625a47a166c1aee11cc562f768346.1000x1000x1.jpg'
    },
    
    {
        id: 23,
        nombre: 'Aguante',
        year: 2022,
        Artista: 'Feid',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/4d31ad179cd2b577f133cbb0287af431.1000x1000x1.png'
    },
    
    {
        id: 24,
        nombre: 'A Mi',
        year: 2019,
        Artista: 'Rels B',
        genero: 'Rap',
        image: 'https://images.genius.com/72e47b4256e8c673a9eb3610f0bc5e39.1000x1000x1.jpg'
    },
    
    {
        id: 25,
        nombre: 'Vacaxiones',
        year: 2021,
        Artista: 'Feid',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/7b8f8f9162a5988815e0a9c66dc426e9.1000x1000x1.png'
    },
    {
        id: 26,
        nombre: 'Hey Mor',
        year: 2022,
        Artista: 'Feid - Ozuna',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/9792700e4c7eea8342c34ad8fd57e2e3.1000x1000x1.png'
    },
    {
        id: 27,
        nombre: 'Flores en Anonimo',
        year: 2021,
        Artista: 'Eladio Carrion',
        genero: 'Rap',
        image: 'https://images.genius.com/6808bd96e4ee28be6cb856077099f60b.1000x1000x1.png'
    },
    {
        id: 28,
        nombre: 'Martes de Galeria',
        year: 2008,
        Artista: 'De La Gheeto - El Roockie',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/457a71747fce0ba5f905473faf7282e4.619x619x1.jpg'
    },
    {
        id: 29,
        nombre: 'Mbappe',
        year: 2022,
        Artista: 'Eladio Carrion',
        genero: 'Trap',
        image: 'https://images.genius.com/b12714eeb601781790863b460be63ded.1000x1000x1.png'
    },
    {
        id: 30,
        nombre: 'Antonio Banderas',
        year: 2023,
        Artista: 'Arcangel',
        genero: 'Reggaeton',
        image: 'https://images.genius.com/06d03c24336a751b2a6eedcc3f0ca1ab.1000x1000x1.png'
    },
];

function mostrarResultados(resultados) {
    container.innerHTML = "";
    resultados.forEach(cancion => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
            <img src="${cancion.image}" alt="${cancion.nombre}">
            <div class="info">
                <h1>${cancion.nombre}</h1>
                <p><strong>Artista:</strong> ${cancion.Artista}</p>
                <p><strong>Género:</strong> ${cancion.genero}</p>
                <p><strong>Año:</strong> ${cancion.year}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function filtrar(e) {
    e.preventDefault();
    const query = textoBusqueda.value.toLowerCase();
    const generoSeleccionado = listaStatus.value;

    const resultadosFiltrados = canciones.filter(cancion => {
        const coincideConTexto = cancion.nombre.toLowerCase().includes(query) ||
            cancion.Artista.toLowerCase().includes(query) ||
            cancion.genero.toLowerCase().includes(query);

        const coincideConGenero = generoSeleccionado === "Todo" || cancion.genero.toLowerCase() === generoSeleccionado.toLowerCase();

        return coincideConTexto && coincideConGenero;
    });

    mostrarResultados(resultadosFiltrados);
}

buscador.addEventListener("submit", filtrar);

mostrarResultados(canciones);
