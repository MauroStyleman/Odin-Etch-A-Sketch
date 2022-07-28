
function createRaster(size){
    let board = document.querySelector('#board');
    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows  = `repeat(${size},1fr)`

    for (let i = 0; i < `${size*size}`; i++){
        let tile = document.createElement('div');
        tile.style.backgroundColor ='grey'
        tile.style.border ='black 0.5px solid'
        board.insertAdjacentElement('beforeend',tile)
        board.appendChild(tile)
    }
}
createRaster(10)