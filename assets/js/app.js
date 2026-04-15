const ipText = document.getElementById("ip");
const button = document.getElementById("btn");

async function obtenerIP() {
    try {
        const response = await fetch("https://api.ipify.org/?format=json");
        const data = await response.json();

        // Mostrar en pantalla
        ipText.textContent = data.ip;

        // Mostrar en consola
        console.log("Tu IP pública es:", data.ip);

    } catch (error) {
        ipText.textContent = "Error al obtener IP";
        console.error("Error:", error);
    }
}

// Evento del botón
button.addEventListener("click", obtenerIP);

// Opcional: cargar automáticamente al abrir
obtenerIP();