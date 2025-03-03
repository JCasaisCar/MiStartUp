document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const fecha = document.getElementById("fecha");
    const servicios = document.getElementById("servicios");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validar Nombre Completo
        if (nombre.value.trim().length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            valid = false;
        }

        // Validar Correo Electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert("Por favor, introduce un correo electrónico válido.");
            valid = false;
        }

        // Validar Fecha Seleccionada
        if (fecha.value.trim() === "") {
            alert("Por favor, selecciona una fecha en el calendario.");
            valid = false;
        }

        // Validar Selección de Servicios
        if (servicios.value.trim() === "") {
            alert("Por favor, selecciona un servicio para la reserva.");
            valid = false;
        }

        // Evitar el envío si hay errores
        if (!valid) {
            event.preventDefault();
        }
    });

    // Configuración del calendario y selección de fecha
    $(document).ready(function () {
        $("#calendar").fullCalendar({
            locale: "es",
            selectable: true,
            select: function (start) {
                fecha.value = moment(start).format("YYYY-MM-DD");
            }
        });
    });
});