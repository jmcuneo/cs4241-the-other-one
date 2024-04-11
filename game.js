let grid = []

function init_grid() {

    for (let i = 0; i < 10; i++) {
        let row = []
        
        for (let j = 0; j < 10; j++) {
            // row.push(i+j)
            row.push(Math.round(Math.random()))
        }
        grid.push(row)
    }
    return grid
}


function count_neighbors(grid, x, y) {
    let count = 0
    // let neighborhood = []
    // neighborhood.push([gird[x-1][y-1], gird[x][y-1], gird[x+1][y-1]])
    // neighborhood.push([gird[x-1][y], gird[x+1][y]])
    // neighborhood.push([gird[x-1][y+1], gird[x][y+1], gird[x+1][y+1]])
    
    // count += grid[x-1][y-1]
    // count += grid[x][y-1]
    // count += grid[x+1][y-1]
    // count += grid[x-1][y]
    // count += grid[x+1][y]
    // count += grid[x-1][y+1]
    // count += grid[x][y+1]
    // count += grid[x+1][y+1]


    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            let coord_x = x + i
            let coord_y = y + j
            if (coord_x >= 0 && coord_x < 10 && coord_y >= 0 && coord_y < 10) {
                count += grid[coord_x][coord_y];
            }
        }
    }

    return count
}


function update(grid) {
    let new_grid = []
    for (let i = 0; i < 10; i++) {
        let new_row = []
        for (let j = 0; j < 10; j++) {
            let num_neib = count_neighbors(grid, i, j)
            if (grid[i][j] === 1) {
                if (num_neib < 2 || num_neib > 3) {
                    new_row.push(0)
                } else {
                    new_row.push(1)
                }
            } else {
                if (num_neib === 3) {
                    new_row.push(1);
                } else {
                    new_row.push(0);
                }
            }
        }
        new_grid.push(new_row)
    }
    console.log(new_grid)
    return new_grid
}



grid = init_grid()
console.log(grid)

for (let i = 0; i < 10; i++) {
    grid = update(grid)
    console.log(grid)
}


