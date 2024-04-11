"use strict";
const explanationButton = document.getElementById("explanationButton");
const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");

explanationButton.addEventListener('click', async () => {
    window.location.href = "explanation.html";
});

startButton.addEventListener('click', async () => {

});

nextButton.addEventListener('click', async () => {

});

resetButton.addEventListener('click', async () => {
    window.location.href = "explanation.html";
});
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;

let items = [[0, 1, 1, 0], [1, 0, 0, 1], [0, 0, 0, 0], [1, 0, 1, 1]];
draw = function () {
    window.requestAnimationFrame(draw);

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            if (items[i][j] === 1) {
                ctx.strokeRect(i * 10, j * 10, Math.floor(canvas.width / 10), Math.floor(canvas.height / 10));
            }
        }
    }
}

draw();