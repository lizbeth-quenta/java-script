
function mostrarResultado(texto) {
    document.getElementById("resultado").innerHTML = texto;
}

function astroIF() {
    let m = Number(prompt("Ingresa magnitud aparente:"));
    let r = "";

    if (m < 0) r = "Extremadamente brillante";
    else if (m < 1) r = "Muy brillante";
    else if (m < 2) r = "Brillante";
    else if (m < 6) r = "Débil";
    else r = "No visible";

    mostrarResultado("Clasificación: <b>" + r + "</b>");
}

function astroFOR() {
    let n = Number(prompt("¿Cuántas distancias registrarás?"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let d = Number(prompt("Distancia #" + i + " (millones km):"));
        suma += d;
    }

    mostrarResultado("Promedio: <b>" + (suma / n).toFixed(2) + "</b> millones km");
}

function astroWHILE() {
    let diametro;
    let cuenta = 0;

    while (true) {
        diametro = Number(prompt("Ingresa diámetro (0 para terminar):"));
        if (diametro === 0) break;
        if (diametro > 50) cuenta++;
    }

    mostrarResultado("Cráteres > 50 km: <b>" + cuenta + "</b>");
}

function astroSWITCH() {
    let cod = Number(prompt("Ingresa código (1-5):"));
    let nombre = "";

    switch (cod) {
        case 1: nombre = "Estrella"; break;
        case 2: nombre = "Planeta"; break;
        case 3: nombre = "Cometa"; break;
        case 4: nombre = "Asteroide"; break;
        case 5: nombre = "Galaxia"; break;
        default: nombre = "Código inválido";
    }

    mostrarResultado("Resultado: <b>" + nombre + "</b>");
}

function astroDOWHILE() {
    let valor;
    do {
        valor = Number(prompt("Ingresa luz (lux):"));
        if (valor < 5) mostrarResultado("➡ Noche profunda (menos de 5 lux)");
    } while (prompt("¿Registrar otro? (si/no)") !== "no");
}

function ambIF() {
    let aqi = Number(prompt("Ingresa AQI:"));
    let r = "";

    if (aqi <= 50) r = "Bueno";
    else if (aqi <= 100) r = "Moderado";
    else if (aqi <= 150) r = "Dañino (sensibles)";
    else r = "Muy dañino";

    mostrarResultado("Calidad del aire: <b>" + r + "</b>");
}

function ambFOR() {
    let n = Number(prompt("Cantidad de mediciones:"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += Number(prompt("dB #" + i + ":"));
    }

    mostrarResultado("Promedio: <b>" + (suma / n).toFixed(1) + " dB</b>");
}

function ambWHILE() {
    let temp;
    let cuenta = 0;

    while (true) {
        temp = Number(prompt("Temperatura (0 para terminar):"));
        if (temp === 0) break;
        if (temp > 45) cuenta++;
    }

    mostrarResultado("Focos detectados >45°C: <b>" + cuenta + "</b>");
}

function ambSWITCH() {
    let c = Number(prompt("Código (1-4):"));
    let t = "";

    switch (c) {
        case 1: t = "Orgánico"; break;
        case 2: t = "Plástico"; break;
        case 3: t = "Papel/Cartón"; break;
        case 4: t = "Vidrio"; break;
        default: t = "Inválido";
    }

    mostrarResultado("Residuo: <b>" + t + "</b>");
}

function ambDOWHILE() {
    let h;
    do {
        h = Number(prompt("Nivel del río (m):"));
        if (h > 3) mostrarResultado("⚠ Alerta: río peligroso (" + h + " m)");
    } while (prompt("¿Registrar otro? (si/no)") !== "no");
}

function saludIF() {
    let s = Number(prompt("Sistólica:"));
    let d = Number(prompt("Diastólica:"));
    let r = "";

    if (s < 120 && d < 80) r = "Normal";
    else if (s < 130 && d < 80) r = "Elevada";
    else if (s < 140 || d < 90) r = "HTA Grado 1";
    else r = "HTA Grado 2";

    mostrarResultado("Clasificación: <b>" + r + "</b>");
}

function saludFOR() {
    let n = Number(prompt("Número de pacientes:"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += Number(prompt("Temp paciente #" + i + ":"));
    }

    mostrarResultado("Promedio: <b>" + (suma / n).toFixed(1) + "°C</b>");
}

function saludWHILE() {
    let temp;
    let cant = 0;

    while (true) {
        temp = Number(prompt("Temperatura (0 para terminar):"));
        if (temp === 0) break;
        if (temp >= 38) cant++;
    }

    mostrarResultado("Pacientes con fiebre (≥38°C): <b>" + cant + "</b>");
}

function saludSWITCH() {
    let c = Number(prompt("Código (1-4):"));
    let r = "";

    switch (c) {
        case 1: r = "Rojo"; break;
        case 2: r = "Amarillo"; break;
        case 3: r = "Verde"; break;
        case 4: r = "Azul"; break;
        default: r = "Inválido";
    }

    mostrarResultado("Categoría TRIAGE: <b>" + r + "</b>");
}

function saludDOWHILE() {
    let spo2;
    do {
        spo2 = Number(prompt("Saturación SpO2:"));
        if (spo2 < 92) mostrarResultado("⚠ Saturación baja: " + spo2 + "%");
    } while (prompt("¿Registrar otro? (si/no)") !== "no");
}

