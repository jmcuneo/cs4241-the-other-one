"use strict";
let grid = []

for (let i = 0; i < 10; i++) {
    let row = []

    for (let j = 0; j < 10; j++) {
        // row.push(i+j)
        row.push(parseInt(Math.random() > .5))
    }
    grid.push(row)
}

function count_neighbors(grid, x, y) {
    let count = 0
    // let neighborhood = []
    // neighborhood.push([gird[x-1][y-1], gird[x][y-1], gird[x+1][y-1]])
    // neighborhood.push([gird[x-1][y], gird[x+1][y]])
    // neighborhood.push([gird[x-1][y+1], gird[x][y+1], gird[x+1][y+1]])
    count += gird[x - 1][y - 1]
    count += gird[x][y - 1]
    count += gird[x + 1][y - 1]
    count += gird[x - 1][y]
    count += gird[x + 1][y]
    count += gird[x - 1][y + 1]
    count += gird[x][y + 1]
    count += gird[x + 1][y + 1]

    return count
}


function update(grid) {
    let new_grid = []
}

