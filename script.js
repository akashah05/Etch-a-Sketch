const grid = document.querySelector("#container");
const rowsInput = document.querySelector("#rows");
const colsInput = document.querySelector("#cols");
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

let isMouseDown = false;


function createGrid(rows, cols) {
    grid.innerHTML = "";

    
    const cellWidth = grid.clientWidth / cols;
    const cellHeight = grid.clientHeight / rows;

    for (let i = 0; i < rows * cols; i++) {
        let colorArray = ["red", "black", "blue", "green", "brown", "violet"];
        let select = Math.floor(Math.random() * colorArray.length);
        let randomColor = colorArray[select];

        const div = document.createElement("div");
        div.style.width = `${cellWidth}px`;
        div.style.height = `${cellHeight}px`;

        div.addEventListener("mousedown", () => {
            isMouseDown = true;
            div.style.backgroundColor = randomColor;
        });

        div.addEventListener("mousemove", () => {
            if (isMouseDown) {
                div.style.backgroundColor = randomColor;
            }
        });

        div.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        grid.appendChild(div);
    }
}


submitBtn.addEventListener("click", () => {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);

    if (rows > 0 && rows <= 100 && cols > 0 && cols <= 100) {
        createGrid(rows, cols);
    } else {
        alert("Please enter valid numbers for rows and columns (1 to 100).");
    }
});


clearBtn.addEventListener("click", () => {
    grid.innerHTML = "";
    rowsInput.value = "";
    colsInput.value = "";
});


