document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-contacto");
    
    if (!formulario) return; 

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); 
        
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        
        const errNombre = document.getElementById("error-nombre");
        const errEmail = document.getElementById("error-email");
        const errMensaje = document.getElementById("error-mensaje-txt");
        const exitoAlerta = document.getElementById("exito-formulario");

        errNombre.textContent = "";
        errEmail.textContent = "";
        errMensaje.textContent = "";
        exitoAlerta.textContent = "";

        let formularioValido = true;

        if (nombre === "") {
            errNombre.textContent = "El nombre o alias es obligatorio para el trato.";
            formularioValido = false;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errEmail.textContent = "El correo es indispensable para contactarte.";
            formularioValido = false;
        } else if (!regexEmail.test(email)) {
            errEmail.textContent = "Por favor ingresa un formato de correo seguro.";
            formularioValido = false;
        }

        if (mensaje === "") {
            errMensaje.textContent = "Debes proveer las especificaciones del envío.";
            formularioValido = false;
        }

        if (formularioValido) {
            exitoAlerta.textContent = "✓ Solicitud encriptada con éxito. Frank Martin se pondrá en contacto pronto si acepta las condiciones.";
            formulario.reset();
        }
    });
});