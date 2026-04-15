export class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async obtenerIP() {
        const res = await fetch("https://api.ipify.org/?format=json");
        const data = await res.json();
        return data.ip;
    }

    async obtenerGeo(ip) {
        const res = await fetch(
            `https://api.ipgeolocation.io/ipgeo?apiKey=${this.apiKey}&ip=${ip}`
        );
        const data = await res.json();
        console.log("Datos de geolocalización:", data);
        return data;
    }
}