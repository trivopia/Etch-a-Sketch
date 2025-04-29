let currentState = "brush";

addDiv(10);
updateState();
brush();
eraser();
reset();
toggleBorder();

function addDiv(n) {
  let canvas = document.querySelector(".canvas");

  for (let i = 0; i < n * n; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");

    newSquare.style.width = `${40 / n}rem`;
    newSquare.style.height = `${40 / n}rem`;
    canvas.append(newSquare);
  }
}

function updateState() {
  let toolButtons = document.querySelectorAll(".tools button, .colors button");
  const excludedClasses = [
    "toggleBorder",
    "setColor",
    "randomMode",
    "darkerMode",
  ];

  toolButtons.forEach((button) => {
    if (excludedClasses.some((cls) => button.classList.contains(cls))) {
      return;
    }

    button.addEventListener("click", function () {
      currentState = button.classList[0];
      console.log(currentState);
    });
  });
}

function brush() {
  let mouseState;
  let canvas = document.querySelector(".canvas");

  canvas.addEventListener("mousedown", function (event) {
    mouseState = true;
    if (currentState === "brush" && event.target.classList.contains("square")) {
      event.target.classList.add("brushed");
    }
  });

  document.addEventListener("mouseup", function () {
    mouseState = false;
  });

  canvas.addEventListener("mouseover", function (event) {
    if (
      currentState === "brush" &&
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
    if (
      currentState === "eraser" &&
      event.target.classList.contains("square")
    ) {
      mouseState = true;
      event.target.classList.remove("brushed");
    }
  });

  canvas.addEventListener("mouseover", function (event) {
    if (
      currentState === "eraser" &&
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

function reset() {
  let resetBtn = document.querySelector(".reset");
  let squares = document.querySelectorAll(".square");

  resetBtn.addEventListener("click", function () {
    squares.forEach((square) => {
      square.classList.remove("brushed");
    });
    currentState = "brush";
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
