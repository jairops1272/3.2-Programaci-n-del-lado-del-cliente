import { API } from "./api.js";

const miApi = new API("7d1dcc5cf177489b924b4b974a1f0645");

async function cargarDatos() {
    try {
        const ip = await miApi.obtenerIP();
        document.getElementById("ip").textContent = ip;
        
        const geo = await miApi.obtenerGeo(ip);
        
        // Llenar datos de la API
        document.getElementById("continent").textContent = geo.continent_name;
        document.getElementById("city").textContent = geo.city;
        document.getElementById("idioma").textContent = geo.languages.split(',')[0];
        
        // Llenar datos de fecha y hora local
        const ahora = new Date();
        document.getElementById("hora").textContent = ahora.toLocaleTimeString();
        document.getElementById("dia").textContent = ahora.getDate();
        document.getElementById("mes").textContent = ahora.toLocaleString('es', { month: 'long' });
        document.getElementById("anio").textContent = ahora.getFullYear();
        
        // Ciclo del día
        const horaCero = ahora.getHours();
        const ciclo = horaCero >= 6 && horaCero < 18 ? "Día ☀️" : "Noche 🌙";
        document.getElementById("ciclo").textContent = ciclo;

        // Navegador y Dispositivo
        document.getElementById("navegador").textContent = navigator.userAgentData ? navigator.userAgentData.brands[0].brand : "Navegador";
        document.getElementById("dispositivo").textContent = navigator.platform;

    } catch (error) {
        console.error("Error al cargar datos:", error);
    }
}

document.getElementById("btn").addEventListener("click", cargarDatos);
window.addEventListener("load", cargarDatos);