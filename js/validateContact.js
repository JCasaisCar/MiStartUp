"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validar Nombre
        const name = document.getElementById("name");
        if (name.value.trim().length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            valid = false;
        }

        // Validar Correo Electrónico
        const email = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert("Por favor, introduce un correo electrónico válido.");
            valid = false;
        }

        // Validar Mensaje
        const message = document.getElementById("message");
        if (message.value.trim().length < 10) {
            alert("El mensaje debe contener al menos 10 caracteres.");
            valid = false;
        }

        // Evitar el envío si hay errores
        if (!valid) {
            event.preventDefault();
        }
    });
});
