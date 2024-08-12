const container = document.querySelector('.container')

let url = 'https://rickandmortyapi.com/api/character'
fetch(url)
.then( response => response.json() )
.then( data => {
    data.results.forEach(element => {
        let box = document.createElement('div')
        box.classList.add('box')

        box.innerHTML = `
        <img src = "${element.image}" width='200'>
        <p>${element.name}</p>
        `
        container.appendChild(box)

    });

})