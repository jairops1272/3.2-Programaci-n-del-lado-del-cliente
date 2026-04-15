const ipText = document.getElementById("ip");
const continentText = document.getElementById("continent");
const cityText = document.getElementById("city");
const button = document.getElementById("btn");

const API_KEY = "7d1dcc5cf177489b924b4b974a1f0645";

// 1. Obtener IP pública
async function obtenerIP() {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    return data.ip;
}

// 2. Obtener geolocalización
async function obtenerGeolocalizacion(ip) {
    const response = await fetch(
        `https://api.ipgeolocation.io/v3/ipgeo?apiKey=${API_KEY}&ip=${ip}`
    );

    const data = await response.json();

    // Mostrar en consola (TODO el JSON)
    console.log("Geolocation completa:", data);

    return data;
}

// 3. Función principal
async function cargarDatos() {
    try {
        ipText.textContent = "Cargando...";
        continentText.textContent = "...";
        cityText.textContent = "...";

        const ip = await obtenerIP();
        ipText.textContent = ip;

        const geo = await obtenerGeolocalizacion(ip);

        // Extraer datos específicos
        continentText.textContent = geo.location.continent_name;
        cityText.textContent = geo.location.city;

    } catch (error) {
        console.error("Error:", error);
        ipText.textContent = "Error";
        continentText.textContent = "Error";
        cityText.textContent = "Error";
    }
}

// Evento botón
button.addEventListener("click", cargarDatos);

// Cargar automáticamente
cargarDatos();