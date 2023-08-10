setInterval(att, 100)
setInterval(good, 100)
setInterval(day, 100)

// Dia
function day() {
 const date = new Date();
 document.getElementById("day")
  .innerHTML = date
  .toLocaleDateString();
}

// Hora
function att() {
  const date = new Date();
  // UTC do user
  document.getElementById("hour").innerHTML = date.toLocaleTimeString();
  // UTC-0
  document.getElementById("utc0").innerHTML = date.getUTCHours() + ":" + date.getUTCMinutes() + "<br>Horário Universal"
  // UTC-4
  switch (date.getUTCHours) {
    default:
      document.getElementById("utcny").innerHTML = date.getUTCHours()-4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York"
    break;
    case -1:
      document.getElementById("utcny").innerHTML = "23" + date.getUTCHours()-4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York"
    break;
    case -2:
      document.getElementById("utcny").innerHTML = "22" + date.getUTCHours()-4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York"
    break;
    case -3:
      document.getElementById("utcny").innerHTML = "21" + date.getUTCHours()-4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York"
    break;
    case -4:
      document.getElementById("utcny").innerHTML = "20" + date.getUTCHours()-4 + ":" + date.getUTCMinutes() + "<br>Horário de Nova York"
    break;
  }
}

// Bom Dia, Tarde ou Noite
function good() {
 const date = new Date();
 let hour = date.getHours();

 if (hour > 5 && hour < 12) {
  document.getElementById("good")
   .innerHTML = "Bom Dia!";
 } else if (hour > 11 && hour < 19) {
  document.getElementById("good")
   .innerHTML = "Boa Tarde!";
 } else {
  document.getElementById("good")
   .innerHTML = "Boa Noite!";
 }
}