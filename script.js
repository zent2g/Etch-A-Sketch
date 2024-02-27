const divContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid')

function createGrids(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell)
        }
    }
}

createGrids();

divContainer.appendChild(grid);