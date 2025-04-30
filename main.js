let toolState = "brush";
let colorState;

addToCanvas();
updateToolState();
updateColorState();
brush();
eraser();
clear();
toggleBorder();

function createSquares(n) {
  let canvas = document.querySelector(".canvas");
  canvas.innerHTML = "";

  for (let i = 0; i < n * n; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");

    newSquare.style.width = `${40 / n}rem`;
    newSquare.style.height = `${40 / n}rem`;
    canvas.append(newSquare);
  }
}

function addToCanvas() {
  let setButton = document.querySelector(".set");
  let slider = document.querySelector(".slider");
  let canvasSizeUI = document.querySelector(".canvasSizeValue");

  slider.addEventListener("input", function () {
    canvasSizeUI.textContent = `${slider.value} x ${slider.value}`;
  });

  setButton.addEventListener("click", function () {
    console.log(slider.value);
    createSquares(slider.value);
  });
}

function updateToolState() {
  let toolButtons = document.querySelectorAll(".toolButtons button");

  toolButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList[0] === "clear") {
        toolState = "brush";
        console.log(`Canvas cleared. Current Tool: brush`);
        return;
      } else {
        toolState = button.classList[0];
        console.log(`Current Tool: ${toolState}`);
      }
    });
  });
}

function updateColorState() {
  let colorButtons = document.querySelectorAll(".colorButtons button");

  colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      colorState = button.classList[0];
      console.log(`Current Color: ${colorState}`);
    });
  });
}

function brush() {
  let mouseState;
  let canvas = document.querySelector(".canvas");

  canvas.addEventListener("mousedown", function (event) {
    mouseState = true;
    if (toolState === "brush" && event.target.classList.contains("square")) {
      event.target.classList.add("brushed");
    }
  });

  document.addEventListener("mouseup", function () {
    mouseState = false;
  });

  canvas.addEventListener("mouseover", function (event) {
    if (
      toolState === "brush" &&
      mouseState &&
      event.target.classList.contains("square")
    ) {
      event.target.classList.add("brushed");
    }
  });
}

function eraser() {
  let mouseState;
  let canvas = document.querySelector(".canvas");

  canvas.addEventListener("mousedown", function (event) {
    if (toolState === "eraser" && event.target.classList.contains("square")) {
      mouseState = true;
      event.target.classList.remove("brushed");
    }
  });

  canvas.addEventListener("mouseover", function (event) {
    if (
      toolState === "eraser" &&
      mouseState === true &&
      event.target.classList.contains("square")
    ) {
      event.target.classList.remove("brushed");
    }
  });

  canvas.addEventListener("mouseup", function () {
    mouseState = false;
  });
}

function clear() {
  let clearBtn = document.querySelector(".clear");
  let squares = document.querySelectorAll(".square");

  clearBtn.addEventListener("click", function () {
    squares.forEach((square) => {
      square.classList.remove("brushed");
    });
    toolState = "brush";
  });
}

function toggleBorder() {
  let toggleBtn = document.querySelector(".toggleBorder");
  let squares = document.querySelectorAll(".square");

  toggleBtn.addEventListener("click", function () {
    squares.forEach((square) => {
      if (!square.classList.contains("borderNone")) {
        square.classList.add("borderNone");
      } else {
        square.classList.remove("borderNone");
      }
    });
  });
}

/** old paint function 
*
function paint() {
  let mouseState;

  document.addEventListener("mousedown", function () {
    mouseState = true;
  });
  document.addEventListener("mouseup", function () {
    mouseState = false;
  });

  let container = document.querySelector(".container");

  container.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("square")) {
      event.target.classList.add("painted");
    }
  });

  container.addEventListener("mouseover", function (event) {
    if (mouseState && event.target.classList.contains("square")) {
      event.target.classList.add("painted");
    }
  });
}
 */

/** hover function without event delegation
*
function hover() {
  let squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("hover");
    });

    squares[i].addEventListener("mouseout", function () {
      setTimeout(() => {
        squares[i].classList.remove("hover");
      }, 50);
    });
  }
}
*/

/** hover function with event delegation
*
function hover() {
  let container = document.querySelector(".container");

  container.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("square")) {
      event.target.classList.add("hover");
    }
  });

  container.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("square")) {
      setTimeout(() => {
        event.target.classList.remove("hover");
      }, 100);
    }
  });
}
*/
