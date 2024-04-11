"use strict";
const explanationButton = document.getElementById("explanationButton");
const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");

explanationButton.addEventListener('click', async () => {
    window.location.href = "explanation.html";
});

startButton.addEventListener('click', async () => {
    init_grid();
});

nextButton.addEventListener('click', async () => {
    update(grid);
});

resetButton.addEventListener('click', async () => {
    window.location.href = "explanation.html";
});
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;

function draw() {
    window.requestAnimationFrame(draw);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                ctx.fillRect(i * 10, j * 10, Math.floor(canvas.width / 10), Math.floor(canvas.height / 10));
            } else {
                ctx.strokeRect(i * 10, j * 10, Math.floor(canvas.width / 10), Math.floor(canvas.height / 10));
            }
        }
    }
}

draw();