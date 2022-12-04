/** Bubble Sort */
// let bubbleSort = function(a) {
//         let result = false;
//         while (result == false) {
//         for (let i = 0; i < a.length - 1; i++) {
//             let count = 0
//             for (let j = 0; j < a.length - 1; j++) {
//                 if (a[j] > a[j + 1]) {
//                     let tmp = a[j]
//                     a[j] = a[j + 1]
//                     a[j + 1] = tmp
//                     count++
//                 }  
//             }
//             if (count == 0) {
//                 result = true;
//             } 
//         }
//     }
//     return a;
// }
// let a = [5, 6, 7, 4, 3, 2, 1];

/** Animates the title */
let numberOfTimesClicked = 0;
let title1 = document.getElementsByClassName("mainTitle1")[0];
let title2 = document.getElementsByClassName("mainTitle2")[0];
let cubeButton = document.getElementsByClassName("cube-button")[0],
    cubeButtonBottom = document.getElementsByClassName("cube-button__face--bottom")[0],
    cubeButtonLeft = document.getElementsByClassName("cube-button__face--left")[0],
    cubeButtonRight = document.getElementsByClassName("cube-button__face--right")[0],
    cubeButtonTop = document.getElementsByClassName("cube-button__face--top")[0],
    cubeButtonFront = document.getElementsByClassName("cube-button__face--front")[0],
    cubeButtonBack = document.getElementsByClassName("cube-button__face--back")[0];

cubeButton.addEventListener("click", () => {
        title1.classList.toggle("titleBox-animate");
        title2.classList.toggle("titleBox-animate");
        if (numberOfTimesClicked++ % 2 == 0) {
            cubeButtonBottom.classList.toggle("cube-button__face--bottom-down");
            cubeButtonLeft.classList.toggle("cube-button__face--left-down");
            cubeButtonRight.classList.toggle("cube-button__face--right-down");
            cubeButtonTop.classList.toggle("cube-button__face--top-down");
            cubeButtonFront.classList.toggle("cube-button__face--front-down");
            cubeButtonBack.classList.toggle("cube-button__face--back-down");
            cubeButtonFront.innerHTML = ":D";
        }
        else {
            cubeButtonBottom.classList.toggle("cube-button__face--bottom-up");
            cubeButtonLeft.classList.toggle("cube-button__face--left-up");
            cubeButtonRight.classList.toggle("cube-button__face--right-up");
            cubeButtonTop.classList.toggle("cube-button__face--top-up");
            cubeButtonFront.classList.toggle("cube-button__face--front-up");
            cubeButtonBack.classList.toggle("cube-button__face--back-up");
            cubeButtonFront.innerHTML = "again?";
            numberOfTimesClicked++;
        }
});

// // /** Rotates the cube with drag */
let cube = document.getElementsByClassName("cube")[0];
// let mouseDown = false,
//         mouseX = 0,
//         mouseY = 0,
//         rotX = 0,
//         rotY = 0;

//     let onMouseDown = function (evt) {
//         mouseDown = true;
//         mouseX = evt.clientX;
//         mouseY = evt.clientY;
//         cubeButtonFront.innerHTML = "down";
//     }
//     let onMouseMove = function (evt) {
//         if (!mouseDown) return;
//         let deltaX = evt.clientX - mouseX,
//             deltaY = evt.clientY - mouseY;
//         mouseX = evt.clientX;
//         mouseY = evt.clientY;
//         rotateScene(deltaX, deltaY);
//         cubeButtonFront.innerHTML = "moving";
//     }
//     let onMouseUp = function (evt) {
//         mouseDown = false;
//         cubeButtonFront.innerHTML = "up";
//     }
//     let click = function (evt) {
//         cubeButtonFront.innerHTML = evt.clientX + " " + evt.clientY;
//     }

//     document.addEventListener('mousedown', onMouseDown, false);
//     document.addEventListener('mousemove', onMouseMove, false);
//     document.addEventListener('mouseup', onMouseUp, false);

//     function rotateScene(deltaX, deltaY) {
//     rotY -= deltaY * 0.5;
//     rotX += deltaX * 0.5;
//     cube.style.transform = "rotateX(" + rotY + "deg) rotateY(" + rotX + "deg)";
// }

/** Disables arrow key moving window */
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);



var xAngle = 0, yAngle = 0;
window.addEventListener('keydown', function(e) {
  switch(e.keyCode) {

    case 37: // left
      yAngle -= 35;
      break;

    case 38: // up
      xAngle += 35;
      break;

    case 39: // right
      yAngle += 35;
      break;

    case 40: // down
      xAngle -= 35;
      break;
  };

  cube.style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);