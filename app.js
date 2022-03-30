// Etch-a-Sketch App 
// Created using TOP 
// Michael Schroeder

const grid = document.querySelector('.container');
const big = document.querySelector('.bigger');
const normal = document.querySelector('.normal');
const reset = document.querySelector('.reset');
const div = document.createElement('div');


// listens for user click to change to 32x32
big.addEventListener('click', () => {
    console.log("click!");
    drawBigger();
})

normal.addEventListener('click', () => {
    console.log("click!");
    drawNormal();
})

reset.addEventListener('click', () => {
    console.log("click!");
    resetGrid();
})


// Creates our grid using 16 divs
function drawNormal(){
    for (let i = 1; i < 257; i++) {
        // if (i > 256){
        //     console.log("we are here..");
        //     return 'Grid is too large!';
        // }
        const div = document.createElement('div');
        grid.appendChild(div);
    }
}

function drawBigger(){
    for (let i = 1; i < 1025; i++) {
        const div = document.createElement('div');
        grid.appendChild(div);
      }
}

function resetGrid(){
    for (let i = 1; i < 257; i++) {
        grid.removeChild(grid.lastChild);
      }
}