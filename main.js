let currentState = "brush";

addDiv(10);
updateState();
brush();

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

  toolButtons.forEach((button) => {
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

  canvas.addEventListener("mousedown", function (event) {});
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
