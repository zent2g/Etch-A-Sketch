const divContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid')

const resetButton = document.querySelector('.resetButton');
const resizebutton = document.querySelector('.pButton');

let value = 16;
function createGrids(value){
    for(let i = 0; i < value; i++){
        for(let i = 0; i < value; i++){
            const cell = document.createElement('div');
            cell.className = 'cell'
            grid.appendChild(cell)
        }
    }
    function getRandomColor(max) {
        return Math.floor(Math.random() * max);
    }
    function cellChange(){
        let cellSize = (940/value) + "px";
        let cells = document.querySelectorAll(".cell");
            
        cells.forEach((cell) => {
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            })
        })
    }
    cellChange()
}
createGrids()


//Add button function from the created HTML tag that runs code so it changes the grid size
//clear the current cells (16x16) and then through the prompt add the new cells, is my logic sound. 
//maximum of 100 for performance

function getRandomColor(max) {
    return Math.floor(Math.random() * max);
}
    let cellSize = (940/value) + "px";
    let cells = document.querySelectorAll(".cell");
    let rgb = document.querySelector("#rgb");
    rgb.addEventListener("click",() => {
        cells.forEach((cell) => cell.addEventListener("mouseover",() => {
            cell.style.backgroundColor = `rgb(${getRandomColor(256)},${getRandomColor(256)},${getRandomColor(256)})`;
        }))
    })
        
    cells.forEach((cell) => {
        cell.style.width = cellSize;
        cell.style.height = cellSize;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
    })

resetButton.addEventListener('click', ()=> {
});
function resetGrid(){
    let cell = document.querySelectorAll('.cell');
        cell.forEach(cell => {
        grid.removeChild(cell)
    })
}
resetButton.addEventListener('click', resetGrid);

resizebutton.addEventListener('click', ()=> {
});
function newGrid(){
    value = prompt("Enter the grid size you want", '16');
     while(value <= 0 || value >= 100){
        value = alert('The value has to be higher than 0, lower than 100')
    }
    createGrids(value)
};
resizebutton.addEventListener('click', newGrid);

divContainer.appendChild(grid);