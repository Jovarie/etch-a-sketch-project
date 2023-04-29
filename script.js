document.addEventListener('DOMContentLoaded', function() {
    createBoard(16)
    console.log("hi");
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `${size}, 1fr)`;
    board.style.gridTemplateRows = `${size}, 1fr)`;

    // creating the squares
    let numDivs = size * size;

    for ( let i = 0; i < numDivs; i++) {
        
    }
}