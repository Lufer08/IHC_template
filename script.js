function registrarUsuario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    // Añade aquí los demás campos que necesites validar
    var mensajeDiv = document.getElementById('mensaje');

    if (nombre === '' || apellido === '' /* ... */) {
        mensajeDiv.textContent = 'Por favor, completa todos los campos';
        mensajeDiv.style.color = 'red';
    } else {
        window.location.href = 'index.html';
        // Aquí podrías incluir más lógica para el registro, como enviar los datos a un servidor
    }
    
}
function iniciarUsuario() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Añade aquí los demás campos que necesites validar
    var mensajeDiv = document.getElementById('mensaje');

    if (email === '' || password === '' /* ... */) {
        mensajeDiv.textContent = 'Correo o contraseña invalidos';
        mensajeDiv.style.color = 'red';
    } else {
        window.location.href = 'index.html';
        // Aquí podrías incluir más lógica para el registro, como enviar los datos a un servidor
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    const botonAbrirFormulario = document.getElementById('boton-abrir-formulario');
    const formulario = document.getElementById('formulario-reseña');
    const botonEnviarReseña = document.getElementById('enviar-reseña');
    const contenedorReseñas = document.getElementById('contenedor-reseñas');

    // Reseñas preexistentes
    const reseñasIniciales = [
        { nombre: 'Carlos', reseña: 'Excelente artículo, muy informativo.' },
        { nombre: 'Lucía', reseña: 'Me encantó, espero leer más sobre este tema.' },
        { nombre: 'Miguel', reseña: 'Interesante, pero me gustaría más detalle.' }
    ];

    reseñasIniciales.forEach(function(reseña) {
        agregarReseña(reseña.nombre, reseña.reseña);
    });

    function agregarReseña(nombre, texto) {
        const div = document.createElement('div');
        div.className = 'reseña';
        div.innerHTML = `<strong>${nombre}</strong><br>${texto}`;
        contenedorReseñas.appendChild(div);
    }

    botonAbrirFormulario.addEventListener('click', function() {
        formulario.style.display = 'block';
    });

    window.addEventListener('click', function(event) {
        if (event.target == formulario) {
            formulario.style.display = 'none';
        }
    });

    botonEnviarReseña.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const reseñaTexto = document.getElementById('reseña').value;

        if (nombre && reseñaTexto) {
            agregarReseña(nombre, reseñaTexto);
            document.getElementById('nombre').value = '';
            document.getElementById('reseña').value = '';
            formulario.style.display = 'none';
        }
    });
});

