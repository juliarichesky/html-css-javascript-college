function change() {
    var lampada = document.getElementById("lamp");
    if(lampada.src.match("off")) {
        lampada.src = "assets/img/lamp_on.gif"
    }
    else {
        lampada.src = "assets/img/lamp_off.gif"
    }
}