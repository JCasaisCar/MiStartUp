"use strict";
        $('#calendar').fullCalendar({
            locale: 'es',  // Configura el idioma a español
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month'
            },
            events: [
                { start: '2025-02-10', end: '2025-02-10', reserved: true },
                { start: '2025-02-15', end: '2025-02-15', reserved: true }
            ],
            dayClick: function(date, jsEvent, view) {
                $('#fecha').val(date.format());
            }
        });

        // Configuración de los servicios en función del parámetro "paquete" en la URL
        const urlParams = new URLSearchParams(window.location.search);
        const paquete = urlParams.get('paquete');
        if (paquete) {
            const select = document.getElementById('servicios');
            switch (paquete) {
                case 'bodas':
                    select.value = 'bodas';
                    break;
                case 'corporativo':
                    select.value = 'corporativo';
                    break;
                case 'menu':
                    select.value = 'menu';
                    break;
            }
        }
