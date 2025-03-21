var dayElement = document.getElementById("day");
var hourElement = document.getElementById("hour");
var utc0Element = document.getElementById("utc0");
var utcnyElement = document.getElementById("utcny");
var goodElement = document.getElementById("good");
setInterval(att, 100);
setInterval(good, 100);
setInterval(day, 100);
//Erro
function er() {
    console.error("Something's null");
}
// Dia
function day() {
    var date = new Date();
    if (dayElement) {
        dayElement.innerHTML = date.toLocaleDateString();
    }
    else {
        er();
    }
}
// Hora
function att() {
    var date = new Date();
    // UTC do user
    if (hourElement) {
        hourElement.innerHTML = date.toLocaleTimeString();
    }
    else {
        er();
    }
    // UTC-0
    if (utc0Element) {
        utc0Element.innerHTML = date.getUTCHours() + ":" + date.getUTCMinutes() + "<br>Horário Universal";
    }
    else {
        er();
    }
    // UTC-4
    switch (date.getUTCHours()) {
        default:
            if (utcnyElement) {
                utcnyElement.innerHTML = date.getUTCHours() - 4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York";
            }
            else {
                er();
            }
            break;
        case -1:
            if (utcnyElement) {
                utcnyElement.innerHTML = 23 + date.getUTCHours() - 4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York";
            }
            else {
                er();
            }
            break;
        case -2:
            if (utcnyElement) {
                utcnyElement.innerHTML = 22 + date.getUTCHours() - 4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York";
            }
            else {
                er();
            }
            break;
        case -3:
            if (utcnyElement) {
                utcnyElement.innerHTML = 21 + date.getUTCHours() - 4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York";
            }
            else {
                er();
            }
            break;
        case -4:
            if (utcnyElement) {
                utcnyElement.innerHTML = 20 + date.getUTCHours() - 4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York";
            }
            else {
                er();
            }
            break;
    }
}
// Bom Dia, Tarde ou Noite
function good() {
    var date = new Date();
    var hour = date.getHours();
    if (hour > 5 && hour < 12 && goodElement) {
        goodElement.innerHTML = "Bom Dia!";
    }
    else if (hour > 11 && hour < 19 && goodElement) {
        goodElement.innerHTML = "Boa Tarde!";
    }
    else if (!goodElement) {
        er();
    }
    else {
        goodElement.innerHTML = "Boa Noite!";
    }
}
