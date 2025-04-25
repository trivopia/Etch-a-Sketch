addDiv(10);
hover();
click();

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

function click() {
  let square = document.querySelectorAll(".square");
  square.forEach(function (square) {
    square.addEventListener("mousedown", function () {
      square.classList.add("clicked");
    });
  });
}
