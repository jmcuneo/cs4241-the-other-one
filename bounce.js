window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 2;
    let dy = -2;



    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        disk()
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
