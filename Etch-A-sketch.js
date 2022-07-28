let color = 'black';
let mouseCondition = false
let borderCondition = true
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)
function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

function createRaster(size) {
    let board = document.querySelector('#board');
    let tile = board.querySelectorAll('div');
    tile.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < `${size * size}`; i++) {
        let tile = document.createElement('div');
        tile.addEventListener('mouseover', colorTile)
        tile.addEventListener('mouseup', colorTile)
        tile.style.backgroundColor = 'white';

        board.insertAdjacentElement('beforeend', tile);
    }
}

function changeSize(size) {
    if (size >= 1 && size <= 100) {
        createRaster(size);
    } else {
        alert("Size needs to be between 1 and 100");
    }
}


function colorTile() {
    if (mouseCondition) {
        if (color === 'rainbow') {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        } else {
            this.style.backgroundColor = color
        }
    }
}

function changeColor(choice) {
    color = choice
}

function resetBoard() {
    let board = document.querySelector('#board');
    let tile = board.querySelectorAll('div');
    tile.forEach((div) => div.style.backgroundColor = 'white');
}
function  showBorders(){
    let board = document.querySelector('#board');
    let tile = board.querySelectorAll('div');
    if(borderCondition === true){
    tile.forEach((div) => div.style.border = "1px solid #24272e");
        document.querySelector("body").addEventListener('click', () => {
            borderCondition = false
        });
    }
    if (borderCondition === false){
        tile.forEach((div) => div.style.border = "0px solid black");
        document.querySelector("body").addEventListener('click', () => {
            borderCondition = true
        });
    }
}

document.querySelector("body").addEventListener('mousedown', () => {
    mouseCondition = true
});
document.querySelector("body").addEventListener('mouseup', () => {
    mouseCondition = false
});

createRaster(16)