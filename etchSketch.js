// Constants
let maxHeight = 800;
let maxWidth = 800;

// Should be able to change these via input
let gridWidth = 64;
let gridHeight = 64;

let gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = `${maxWidth}px`;
gridContainer.style.height = `${maxHeight}px`;

// Create rows within the grid
for (let i = 0; i < gridHeight; i++) {
    let row = document.createElement('div')
    row.className = 'row';
    // For each row, create the appropriate number of square
    for (let j = 0; j < gridWidth; j++) {
        let square = document.createElement('div');

        // First find how much each square should use in the grid
        squareWidth = maxWidth / gridWidth;
        squareHeight = maxHeight / gridHeight;
        // If the width and height aren't equal, divs won't be square
        // This can avoided by using the smaller of the two values
        squareWidth > squareHeight ? squareWidth = squareHeight : squareHeight = squareWidth;

        square.className = 'square';
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;
        
        row.appendChild(square);
    }
    gridContainer.appendChild(row);
}