document.addEventListener('DOMContentLoaded', function () {
    const entradaTarea = document.getElementById('nueva-tarea');
    const botonAgregar = document.getElementById('boton-agregar');
    const listaTareas = document.getElementById('lista-tareas');
    const botonBorrarTodo = document.getElementById('boton-borrar-todo');

    botonAgregar.addEventListener('click', function () {
        const textoTarea = entradaTarea.value.trim();
        if (textoTarea !== '') {
            const elementoLista = document.createElement('li');
            elementoLista.className = 'tarea';
            elementoLista.innerHTML = `
                <span>${textoTarea}</span>
                <button class="boton-borrar">x</button>
            `;
            listaTareas.appendChild(elementoLista);
            entradaTarea.value = '';
            agregarEventosTarea(elementoLista);
        }
    });

    function agregarEventosTarea(tareaElemento) {
        const textoTarea = tareaElemento.querySelector('span');
        const botonBorrar = tareaElemento.querySelector('.boton-borrar');

        textoTarea.addEventListener('click', function () {
            tareaElemento.classList.toggle('completada');
        });

        botonBorrar.addEventListener('click', function () {
            tareaElemento.remove();
        });
    }

    botonBorrarTodo.addEventListener('click', function () {
        listaTareas.innerHTML = '';
    });
});
