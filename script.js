const container = document.getElementById("gridContainer");
const resizeBtn = document.getElementById("resizeBtn");
let gridSize = 16;

function createGrid(size) {
    container.innerHTML = "";
    let squareSize = 600 / size;
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = "rgba(0, 0, 0, 0)";
        square.addEventListener("mouseover", changeColor);
        container.appendChild(square);
    }
}


function changeColor(event) {
    let square = event.target;
    let currentColor = square.style.backgroundColor;
    if (currentColor.includes("rgba")) {
        let match = currentColor.match(/rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/);
        if (match) {
            let opacity = parseFloat(match[4]) + 0.1;
            square.style.backgroundColor = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${opacity})`;
        }
    } else {
        let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        square.style.backgroundColor = randomColor;
    }
}

resizeBtn.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (max 100):", gridSize);
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.")
        }
    }
});

createGrid(gridSize);