// Global variable
let color = "black";

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
        div.addEventListener("mouseover", colorDiv)
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

function colorDiv () {
    // if random button is selected choose a random color using hsl random color generator
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = 'black'
    }
}

function setColor (colorChoice) {
     color = colorChoice;
}
// resets the colors by selecting all the divs and changing their color's to white
function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}