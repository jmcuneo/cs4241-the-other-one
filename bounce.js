window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const ballRadius = 10;
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 4;
    let dy = -1;



    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        disk()

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
          }
        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    function disk(){
        //Ivy's code replaces this:
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function startGame() {
        const interval = setInterval(draw, 10);
    }

    startGame()


         
}
