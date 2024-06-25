document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const gridSize = 16; // You can change this value to any number to adjust the grid size dynamically
    const squareSize = 40; // Size of each square in pixels

    container.style.width = `${gridSize * squareSize}px`;
    container.style.height = `${gridSize * squareSize}px`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
        container.appendChild(square);
    }
});
