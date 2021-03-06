
// funcion hora
function actHora(){

    // declaracion de quese dibujara un contenido en 2d
    var canvas = document.getElementById("reloj"),
        ctx = canvas.getContext("2d"),
        radio = canvas.width / 2;


    // Circulo 1
    ctx.beginPath();
    ctx.fillStyle = "darkblue";
    ctx.arc(radio, radio, radio, 0, 2 * Math.PI);
    ctx.fill();


    // NUMEROS
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(radio,radio,10,0,2*Math.PI);
    ctx.fill();

    ctx.font = radio/10 + "px arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middel";
    for (var i=1; i <= 12; i++) {
        ctx.fillText(i,radio+radio*0.9*Math.sin(i*2*Math.PI/12), radio-(radio*0.9*Math.cos(i*2*Math.PI/12)));
    }

    // DECLARACION DE VARIABLES PARA HORAS, MINUTOS Y SEGUNDOS
    var h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds(),
        horaCom = h%12+m/60+s/3600,
        angH = horaCom*2*Math.PI/12,
        angM = m*2*Math.PI/60,
        angS = s*2*Math.PI/60;

    // MANECILLA PARA LA HORA
    ctx.strokeStyle = "white";
    ctx.moveTo(radio,radio);
    ctx.lineTo(radio+radio*0.5*Math.sin(angH), radio-(radio*0.6*Math.cos(angH)));
    ctx.lineWidth = 7;
    ctx.stroke();

    // MANECILLA PARA MINUTOS
    ctx.strokeStyle = "white";
    ctx.moveTo(radio, radio);
    ctx.lineTo(radio + radio * 0.7 * Math.sin(angM), radio - (radio * 0.6 * Math.cos(angM)));
    ctx.lineWidth = 4;
    ctx.stroke();

    // MANECILLA PARA SEGUNDOS
    ctx.strokeStyle = "white";
    ctx.moveTo(radio, radio);
    ctx.lineTo(radio + radio * 0.9 * Math.sin(angS), radio - (radio * 0.6 * Math.cos(angS)));
    ctx.lineWidth = 2;
    ctx.stroke();

}

// INTERVALO PARA QUE SE MUEVA LA MANECILLA DE LOS SEGUNDO Y HAGA ESA TRANSICION DE MOVIMENTO
setInterval(actHora, 1000);