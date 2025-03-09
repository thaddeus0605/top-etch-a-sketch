const container = document.querySelector(".container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

drawGrid(); 

function drawGrid() {
   drawRows(16);
   drawColumns(16);
}

function drawRows(rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function drawColumns(cellNum) {
    for(i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";

            
        }
    }
}



