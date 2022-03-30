// Etch-a-Sketch App 
// Created using TOP 
// Michael Schroeder

const grid = document.querySelector('.container');
const big = document.querySelector('.bigger');
const normal = document.querySelector('.normal');
const reset = document.querySelector('.reset');
const box = document.createElement('div');


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
    resetGrid();
})

// Creates our grid using 16 divs
function drawNormal(){
    for (let i = 1; i < 257; i++) {
        if (i > 256){
            console.log("ahhh");
            i == 257;
        }
        const box = document.createElement('div');
        grid.appendChild(box);
    }
}

function drawBigger(){
    for (let i = 1; i < 1025; i++) {
        const box = document.createElement('div');
        grid.appendChild(box);
      }
}

function resetGrid(){
    for (let i = 1; i < 5555; i++) {
        grid.removeChild(grid.lastChild);
      }
}