const divContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid')

function createGrids(value){
    value = 16 * 16;
    for(let i = 0; i < value; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell)

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "black";
            })
    }
}
createGrids()

//Add button function from the created HTML tag that runs code so it changes the grid size
//clear the current cells (16x16) and then through the prompt add the new cells, is my logic sound. 
//maximum of 100 for performance

const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', ()=> {
});

function resetGrid(){
    let cell = document.querySelectorAll('.cell');
    cell.forEach(cell => {
      cell.style.backgroundColor = 'white';
    })
    createGrids(value);
}
resetButton.addEventListener('click', resetGrid);


const resizebutton = document.querySelector('.pButton');
resizebutton.addEventListener('click', ()=> {
});

function newGrid(){
    let value = prompt("enter size: ", 16);
     while(value <= 0 || value >= 100 || value === 'undefined'){
        alert('The value has to be higher than 0, lower than 100')
        break;
    }
    createGrids(value)
};
resizebutton.addEventListener('click', newGrid);


divContainer.appendChild(grid);