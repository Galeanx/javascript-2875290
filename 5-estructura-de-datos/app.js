const movies = [
    { author: 'Autor 1', name: 'Película 1', year: 2020, image: 'https://via.placeholder.com/200x300' },
    { author: 'Autor 2', name: 'Película 2', year: 2021, image: 'https://via.placeholder.com/200x300' },
    // Añade más películas aquí
];

const movieContainer = document.getElementById('movieContainer');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img');
    img.src = movie.image;
    card.appendChild(img);
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    
    const title = document.createElement('h3');
    title.textContent = movie.name;
    cardContent.appendChild(title);
    
    const author = document.createElement('p');
    author.textContent = `Autor: ${movie.author}`;
    cardContent.appendChild(author);
    
    const year = document.createElement('p');
    year.textContent = `Año: ${movie.year}`;
    cardContent.appendChild(year);
    
    card.appendChild(cardContent);
    movieContainer.appendChild(card);
});

// Añade más películas al array movies hasta tener 30
while (movies.length < 30) {
    movies.push({
        author: `Autor ${movies.length + 1}`,
        name: `Película ${movies.length + 1}`,
        year: 2020 + movies.length % 5,
        image: 'https://via.placeholder.com/200x300'
    });
}

movieContainer.innerHTML = '';
movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img');
    img.src = movie.image;
    card.appendChild(img);
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    
    const title = document.createElement('h3');
    title.textContent = movie.name;
    cardContent.appendChild(title);
    
    const author = document.createElement('p');
    author.textContent = `Autor: ${movie.author}`;
    cardContent.appendChild(author);
    
    const year = document.createElement('p');
    year.textContent = `Año: ${movie.year}`;
    cardContent.appendChild(year);
    
    card.appendChild(cardContent);
    movieContainer.appendChild(card);
});
