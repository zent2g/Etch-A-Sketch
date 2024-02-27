const divContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid')

function createGrids(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell)
    }
}
createGrids(16, 16)

divContainer.appendChild(grid);