setInterval(att, 100)
setInterval(good, 100)
setInterval(day, 100)
setInterval(falt, 100)

// Faltam

function falt() {
    const date = new Date();
    let ps = date.getSeconds();
    let pm = date.getMinutes();
    let ph = date.getHours();
    let pwd = date.getDay();
    let pd = date.getDate();
    let mon = date.getMonth();
    let year = date.getFullYear();
    let dayMon = 0;
    let dayYear = 365;
    let dayNumYear = 0;
   
    switch (mon) {
     case 0:
      dayNumYear = pd
      break;
     case 1:
      dayNumYear = pd + 31
      break;
     case 2:
      dayNumYear = pd + 59
      break;
     case 3:
      dayNumYear = pd + 90
      break;
     case 4:
      dayNumYear = pd + 120
      break;
     case 5:
      dayNumYear = pd + 151
      break;
     case 6:
      dayNumYear = pd + 181
      break;
     case 7:
      dayNumYear = pd + 212
      break;
     case 8:
      dayNumYear = pd + 243
      break;
     case 9:
      dayNumYear = pd + 273
      break;
     case 10:
      dayNumYear = pd + 304
      break;
     case 11:
      dayNumYear = pd + 334
      break;
    }
   
    if (mon == 0, 2, 4, 6, 7, 9,
     11) {
     dayMon = 31
    } else if (mon == 1) {
     dayMon = 28
    } else {
     dayMon = 30
    }
    if (year % 4 == 0 && year % 100 !=
     0 && mon != 1 || year % 400 == 0 &&
     mon != 1) {
     dayYear = 366
    }
    if (year % 4 == 0 && year %
     100 != 0 && mon == 1 || year % 400 ==
     0 && mon >= 1) {
     dayNumYear++
    }
   
    document.getElementById("pmm")
     .innerHTML = 60 - ps + " segundos";
    document.getElementById("ph")
     .innerHTML = 60 - pm + " minutos";
    document.getElementById("pd")
     .innerHTML = 24 - ph + " horas";
    document.getElementById("pw")
     .innerHTML = 7 - pwd + " dias";
    document.getElementById("pm")
     .innerHTML =
     dayMon - pd + " dias";
    document.getElementById("py")
     .innerHTML =
     dayYear - dayNumYear + " dias";
   }

// Tempo para

function timeTo() {
  let date = new Date();
  
  let day = document.getElementById("inputDay").value;
  let month = document.getElementById("inputMonth").value;
  month--
  let atDay = date.getDate();
  let atMonth = date.getMonth();
  let atYear = date.getFullYear();
  
  let checkMonth = month - atMonth;
  let checkDay = atDay - day;
  if (atDay > day) {
    if (atMonth == 0, 2, 4, 6, 7, 9, 11) {
      checkDay = 31 - checkDay;
     } else if (atMonth == 1) {
      if (atYear % 0 && atYear != 100 ||
       atYear == 400) {
       checkDay = 29 - checkDay
      } else {
       checkDay = 28 - checkDay
      }
     } else if (atMonth == 3,
      5, 8, 10) {
      checkDay = 30 - checkDay;
     }
     checkMonth--
    }
  if (checkDay < 0) {
     checkDay = checkDay * -1
    }
  if (checkMonth < 0) {
     document.getElementById("TimeToP")
      .innerHTML = "Esse dia já passou!";
    } else if (checkMonth == 0) {
     document.getElementById("TimeToP")
      .innerHTML = "Faltam " + checkDay +
      " dias!";
    } else {
     document.getElementById("TimeToP")
      .innerHTML = "Faltam " +
      checkMonth +
      " meses e " + checkDay + " dias!";
    }
   }