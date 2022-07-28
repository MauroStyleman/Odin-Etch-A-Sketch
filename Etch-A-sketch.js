
function createRaster(size){
    let board = document.querySelector('#board');
    let tile = board.querySelectorAll('div');
    tile.forEach((div) =>div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows  = `repeat(${size},1fr)`;

    for (let i = 0; i < `${size*size}`; i++){
        let tile = document.createElement('div');
        tile.style.backgroundColor ='grey';
        tile.style.border ='black 0.5px solid';
        board.insertAdjacentElement('beforeend',tile);
    }
}
function changeSize(size){
    if(size >=1 && size <=200) {
        createRaster(size);
    }
    else {
        alert("Size needs to be between 1 and 200");
    }
}
createRaster(16)
