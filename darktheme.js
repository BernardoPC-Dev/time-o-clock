let main = document.body;
let button = document.getElementById("solua");
let header = document.getElementById("header");
let divhour = document.getElementById("divhour");
function change() {
    if ( button.className == "lua") {
        console.log("Escuro");
        main.style = "color: white; background-color: #363957;";
        button.src = "img/sol.png";
        button.className = "sol";
        header.style = "color: black; background-color: white;";
        divhour.style = "border: solid 1px white;"
    } else {
        console.log("Claro");
        main.style = "color: black; background-color: #EDEFE5;";
        button.src = "img/lua.png";
        button.className = "lua";
        header.style = "color: white; background-color: #363957;";
        divhour.style = "border: solid 1px black;"

    }
}