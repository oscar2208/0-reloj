var canvas = document.getElementById("reloj"),
    ctx = canvas.getContext("2d"),
    radio = canvas.width/2;

ctx.beginPath();
ctx.fillStyle = "darkred";
ctx.arc(radio,radio,radio,0,2*Math.PI);
ctx.fill();