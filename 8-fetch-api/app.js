const container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(element => {

        console.log(`Name: ${element.name}`)
        console.log(`Username: ${element.username}`)

        //Con JavaScript: Crear un elemento "div" con createElement y asignarle la clase "box"
        //Crear un "h1" con createElement y hacer appendChild al div de clase "box"
        //Crear un "p" con createElement y hacer appendChild al div de clase "box"

        const box = document.createElement('div');
        box.classList.add('box');

        const h1 = document.createElement('h1');
        h1.textContent = element.name;
        box.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = element.username;
        box.appendChild(p);

        container.appendChild(box);
    });
  })

  