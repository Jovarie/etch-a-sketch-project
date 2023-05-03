document.addEventListener('DOMContentLoaded', function() {
    // default size of board
    createBoard(16);
    // eventListener for size input and create board function
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let sizeInput = document.querySelector("#size-input");
        let size = sizeInput.value;
        createBoard(size);
    });
});


let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let sizeInput = document.querySelector("#size-input");
        let size = sizeInput.value;
        createBoard(size);
    });


    // add hover effect to board
    let board = document.querySelector(".board");
    board.addEventListener("mouseover", function(event) {
        // check if the event target is a div element
        if (event.target.matches("div")) {
            // change the background color of the div to black
            event.target.style.backgroundColor = "black";
        }
    });


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
    // this if statement depending on the user input will display a message
    if (input == "") {
        message.innerHTML = "please provide a number";
    } else if (input < 0 || input > 100 ) {
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = "Now let's play!"
        return input;
    }
}