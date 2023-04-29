document.addEventListener('DOMContentLoaded', function() {
    // default size of board
    createBoard(16)
    // eventListener for size input and create board function
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // creating the squares
    let numDivs = size * size;
    // This loop creates a set of div elements with the specified number, which can be used to create a grid
    for ( let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        // color of the div
        // div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}

// this function gets the size the user wants their grid to be
function getSize() {
    let input = prompt("what will be the size of your masterpiece?");
    let message = document.querySelector("#message");
    // this if statement depending on the s=user input will display a message
    if (input == "") {
        message.innerHTML = "please provide a number";
    } else if (input < 0 || input > 100 ) {
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = "Now let's play!"
        return input;
    }
}