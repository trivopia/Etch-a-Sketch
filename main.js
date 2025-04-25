addDiv(10);
paint();

function addDiv(n) {
  let container = document.querySelector(".container");

  for (let i = 0; i < n * n; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");

    newSquare.style.width = `${40 / n}rem`;
    newSquare.style.height = `${40 / n}rem`;
    container.append(newSquare);
  }
}

function paint() {
  let mouseState;
  let container = document.querySelector(".container");

  container.addEventListener("mousedown", function (event) {
    mouseState = true;
    if (event.target.classList.contains("square")) {
      event.target.classList.add("painted");
    }
  });

  document.addEventListener("mouseup", function () {
    mouseState = false;
  });

  container.addEventListener("mouseover", function (event) {
    if (mouseState && event.target.classList.contains("square")) {
      event.target.classList.add("painted");
    }
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
