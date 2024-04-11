function drawCircle(x,y,color = "#AFAFAF" ){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    const grad=ctx.createLinearGradient(0,0, 280,0);
    grad.addColorStop(0, "#D52D00");
    grad.addColorStop(1, "#A30262");
    //grad.addColorStop(2, "#FF9A56");
    /* grad.addColorStop(2, "#D162A4");
    grad.addColorStop(3, "#B55690");
    grad.addColorStop(4, "");
 */

    ctx.arc(x,y,30,0,2*Math.PI)
    ctx.strokeStyle = grad; 
    ctx.lineWidth=4;
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x,y, 30,0,Math.PI * 2, false);
    ctx.fillStyle = "#A020F0";
    const grad2 =ctx.createLinearGradient(0,0, 280,0);
    grad.addColorStop(0, "#A30262");
    grad.addColorStop(1, "#D52D00");
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = "#EEE";
    ctx.fill();
    ctx.closePath();
    ctx.arc(x,y,10,0,2*Math.PI)
    ctx.strokeStyle = grad; 
    ctx.lineWidth=2;
    ctx.stroke();
    ctx.closePath();
    
}


let randomColor = () => Math.floor(Math.random()*16777215).toString(16)
window.onload = () => {
    drawCircle(320,44, randomColor())
    
    

  }