const container = document.querySelector("#container")
let squareColor = 'black';
let border = "solid 1px black";

function createGrid(num) {
    if (num > 100) {
        return "Too many squares (max 100).";
    } else {
        for (let i = 1; i <= num; i++) {
            const subContainer = document.createElement("div");
            for (let j = 1; j <= num; j++) {
                const square = document.createElement("div");
                square.setAttribute("class", "square")
                square.style.border = border;
                square.style.width = 500/num + "px";
                square.style.height = 500/num + "px";
                subContainer.appendChild(square);
                };
            container.appendChild(subContainer);
        };        
    }

};

createGrid(16);

const sqr = document.querySelectorAll(".square");
sqr.forEach(square => {
    square.addEventListener("mouseover", () => {
    square.style.backgroundColor = squareColor;
    });
});

const size = document.querySelector("#size");

size.addEventListener("click", () => {
    newSquares = prompt("Enter number of squares:");
    while (container.firstChild) {
        container.firstChild.remove();
    }

    createGrid(newSquares);
    const sqr = document.querySelectorAll(".square");
    sqr.forEach(square => {
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = squareColor;
        });
    });
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
})

const color = document.querySelector("#color");

color.addEventListener("click", () => {
    squareColor = prompt("Enter square color:");
})

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", function() {
    if (this.checked) {
        const squares = document.querySelectorAll(".square");
        border = "solid 1px black";
        squares.forEach(square => {
            square.style.border = "solid 1px black";
        });
    } else {
        const squares = document.querySelectorAll(".square");
        border = "";
        squares.forEach(square => {
            square.style.border = "";
        });       
    }
})