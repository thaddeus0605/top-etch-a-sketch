let gridSize = 16; // Default grid size
let squareSize = 40; // Default square size

const changeGridBtn = document.querySelector("button");

// Set default 16x16 grid on page load.
document.addEventListener("DOMContentLoaded", () => {
    changeGrid(gridSize, squareSize);
});

const changeGrid = (gridSizeNum, squareSizeNum) => {
    const container = document.querySelector('.container');
    
    // Clear existing grid
    container.innerHTML = '';

    // Set container dimensions
    container.style.width = `${gridSizeNum * squareSizeNum}px`;
    container.style.height = `${gridSizeNum * squareSizeNum}px`;

    // Create and append new squares
    for (let i = 0; i < gridSizeNum * gridSizeNum; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSizeNum}px`;
        square.style.height = `${squareSizeNum}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
};

changeGridBtn.addEventListener('click', () => {
    const changePrompt = parseInt(prompt('Please enter a grid number less than 100'), 10);
    if (!isNaN(changePrompt) && changePrompt > 0 && changePrompt < 100) {
        changeGrid(changePrompt, squareSize);
    } else {
        alert('Invalid input. Please enter a number between 1 and 99.');
    }
});
