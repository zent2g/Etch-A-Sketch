const divContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid')

function createGrids(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell)

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "black";
            })
    }
}
createGrids(16, 16)

//Add button function from the created HTML tag that runs code so it changes the grid size
//maximum of 100 for performance

const button = document.querySelector('.pButton')
button.onclick = function() {
    prompt('Write the grid size you want')
}

divContainer.appendChild(grid);