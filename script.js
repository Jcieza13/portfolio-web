let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que oculta el menú una vez que se selecciona una opción
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


document.querySelectorAll('.proyecto').forEach((proyecto) => {
    proyecto.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = proyecto;
        const { offsetX: x, offsetY: y } = e;

        // Calcula la posición relativa del cursor dentro del recuadro
        const centerX = width / 2;
        const centerY = height / 2;

        // Calcula la diferencia entre el centro y la posición del cursor
        const deltaX = (x - centerX) / centerX; // Valor entre -1 y 1
        const deltaY = (y - centerY) / centerY; // Valor entre -1 y 1

        // Aplica una pequeña inclinación basada en la posición del cursor
        proyecto.style.transform = `rotateX(${deltaY * 15}deg) rotateY(${deltaX * 15}deg)`;
    });

    // Restablece la inclinación cuando el cursor sale del recuadro
    proyecto.addEventListener('mouseleave', () => {
        proyecto.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

// Agregar animaciones a los íconos de Technical Skills
document.addEventListener('DOMContentLoaded', () => {
    // Animaciones para los íconos de habilidades técnicas
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        const icon = item.querySelector('.skill-icon'); // Selecciona el ícono dentro del contenedor

        // Efecto al pasar el mouse
        item.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)'; // Aumenta el tamaño del ícono
            icon.style.transition = 'transform 0.3s ease, filter 0.3s ease'; // Transición suave
            icon.style.filter = 'drop-shadow(0 0 10px #1CB698)'; // Agrega un resplandor
        });

        // Efecto al quitar el mouse
        item.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)'; // Restaura el tamaño original
            icon.style.filter = 'none'; // Elimina el resplandor
        });
    });

    // Configuración de EmailJS para el formulario de contacto
    (function () {
        emailjs.init("4OT6TMlcmc4eU3Jzu"); // Tu clave pública de EmailJS
    })();

    // Manejo del envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se recargue

            // Capturar los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const tema = document.getElementById('tema').value;
            const mensaje = document.getElementById('mensaje').value;

            const params = {
                user_name: nombre,
                user_email: email,
                subject: tema,
                message: mensaje
            };

            // Enviar el correo usando EmailJS
            emailjs.send('service_i5928dv', 'template_jjvvr0e', params)
                .then(function (response) {
                    console.log('Mensaje enviado con éxito:', response);
                    alert('Tu mensaje ha sido enviado correctamente');
                }, function (error) {
                    console.log('Error al enviar el mensaje:', error);
                    alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
                });
        });
    }
});