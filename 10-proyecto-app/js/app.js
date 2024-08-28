// Array de objetos para almacenar la información de los módulos
const modulos = [
    {
        titulo: "Fundamentos del Bienestar Deportivo",
        descripcion: "Este módulo cubre los conceptos básicos y la estructura del MOOC.",
        duracion: "2 semanas",
        objetivo: "Entender los principios básicos del bienestar deportivo.",
        enlace: "html/ingresar.html"
    },
    {
        titulo: "Desarrollo de habilidades",
        descripcion: "Aprende técnicas esenciales para mejorar tus habilidades en este campo.",
        duracion: "3 semanas",
        objetivo: "Desarrollar habilidades prácticas para aplicar en el área de estudio.",
        enlace: "html/ingresar.html"
    },
    {
        titulo: "Proyecto final",
        descripcion: "Completa un proyecto para poner en práctica todo lo aprendido.",
        duracion: "4 semanas",
        objetivo: "Aplicar conocimientos en un proyecto integral.",
        enlace: "html/ingresar.html"
    }
    // Puedes agregar más módulos aquí
];

// Función para cargar los módulos en la página
function cargarModulos() {
    const container = document.getElementById('modulos-container');
    modulos.forEach(modulo => {
        const moduloDiv = document.createElement('div');
        moduloDiv.classList.add('modulo');
        
        moduloDiv.innerHTML = `
            <h2>${modulo.titulo}</h2>
            <p>${modulo.descripcion}</p>
            <div class="detalle">
                <p><strong>Duración:</strong> ${modulo.duracion}</p>
                <p><strong>Objetivo:</strong> ${modulo.objetivo}</p>
            </div>
            <a href="${modulo.enlace}" class="boton-inscripcion">Ingresar ahora</a>
        `;
        
        container.appendChild(moduloDiv);
    });
}

// Llamar a la función para cargar los módulos al cargar la página
document.addEventListener('DOMContentLoaded', cargarModulos);
