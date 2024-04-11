window.onload = () => {
    const canvas = document.getElementById("canvas"),
    canvasLeft = canvas.offsetLeft,
    canvasTop = canvas.offsetTop,
    context = canvas.getContext("2d");


    canvas.addEventListener('click', function(event) {
        var xVal = event.pageX - canvasLeft;
        var yVal = event.pageY - canvasTop;
        //console.log("Location: (" + xVal + ", " + yVal + ")");
        drawShape(context, xVal, yVal);
    })
}

function drawShape(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
