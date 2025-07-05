// Constants
let maxHeight = 700;
let maxWidth = 700;

// Should be able to change these via input
let gridWidth = 16;
let gridHeight = 16;

let definedColors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'black', 'white']
let currentColor = 'black';

let gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = `${maxWidth}px`;
gridContainer.style.height = `${maxHeight}px`;

const btnSetGrid = document.querySelector(".btn-set-grid-size");
btnSetGrid.addEventListener("click", (event) => {
    gridWidthInput = document.getElementById('width-input').value;
    gridHeightInput = document.getElementById('height-input').value;
    gridWidth = gridWidthInput;
    gridHeight = gridHeightInput;
    if ((gridWidthInput <= 0 || gridHeightInput <= 0) || (gridWidthInput > 100 || gridHeightInput > 100)) {
        event.preventDefault();
        event.stopPropagation();
        alert("Please make sure values are between 1 and 100");
    }
    else {
        clearGrid(gridContainer);
        drawGrid();
        addGridListeners();
    }

});

function addGridListeners() {
    let elementsArray = document.querySelectorAll(".square");
    elementsArray.forEach(function(element) {
    element.addEventListener("mouseover", (event) => {
        if (currentColor === 'random') {
            event.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }
        event.target.style.backgroundColor = `${currentColor}`
    }) 
})
}

function addColorListeners() {
    let elementsArray = document.querySelectorAll(".defined-color");
    elementsArray.forEach(function(element) {
    element.addEventListener("click", (event) => {
        currentColor = event.target.title;
        console.log(currentColor);
    })
})
}

function clearGrid(container) {
    while(container.firstChild) {
        container.firstChild.remove();
    }
}

function drawGrid() {
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
}

function setColorValues(color) {
    color.style.width = "50px";
    color.style.height = "50px";
}

function createColorOptions() {
    let colorContainer = document.querySelector('.color-container');
    definedColors.forEach(function(col) {
        let definedColor = document.createElement('div');
        definedColor.className = `defined-color ${col}`;
        definedColor.title = col;
        setColorValues(definedColor);
        definedColor.style.backgroundColor = `${col}`;
        colorContainer.appendChild(definedColor);
    })
    
    let definedColor = document.createElement('div');
    definedColor.className = 'defined-color random-color';
    definedColor.title = 'random';
    setColorValues(definedColor);
    colorContainer.appendChild(definedColor);
}

drawGrid();
addGridListeners();
createColorOptions();
addColorListeners();