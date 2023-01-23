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

let cube = document.getElementsByClassName("cube")[0];

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
    cubeButtonBack = document.getElementsByClassName("cube-button__face--back")[0],
    ideButton = document.getElementsByClassName("ide-button")[0],
    ideButtonBottom = document.getElementsByClassName("ide-button__face--bottom")[0],
    ideButtonLeft = document.getElementsByClassName("ide-button__face--left")[0],
    ideButtonRight = document.getElementsByClassName("ide-button__face--right")[0],
    ideButtonTop = document.getElementsByClassName("ide-button__face--top")[0],
    ideButtonFront = document.getElementsByClassName("ide-button__face--front")[0],
    ideButtonBack = document.getElementsByClassName("ide-button__face--back")[0];

cubeButton.addEventListener("click", () => {
        title1.classList.toggle("title1Party");
        title2.classList.toggle("title2Party");
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

/** Get coordinates when clicking */
// document.addEventListener("click", function(e) {
//   title1.innerHTML = e.clientX + " " + e.clientY;
// })

/** Disables arrow key moving window */
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

/** Moves Unit Cube with arrow keys */
var xAngle = 0, yAngle = 0;
window.addEventListener('keydown', function(e) {
  switch(e.keyCode) {

    // left
    case 37: 
      yAngle -= 35;
      break;

    // up
    case 38:
      xAngle += 35;
      break;

    // right
    case 39:
      yAngle += 35;
      break;

    // down
    case 40: 
      xAngle -= 35;
      break;
  };
  cube.style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});


/** Page 1 */
ideButton.addEventListener("click", () => {
  // $.ajax({
  //   url: "/project/php/compiler.php",
  //   method: "POST",

  //   data: {
  //     language: $("#languages").val(),
  //     code: editorPanel.getSession().getValue()
  //   },

  //   success: function(response) {
  //     $(".outputPanel").text(response)
  //   }
  // })
        if (numberOfTimesClicked++ % 2 == 0) {
            ideButtonBottom.classList.toggle("ide-button__face--bottom-down");
            ideButtonLeft.classList.toggle("ide-button__face--left-down");
            ideButtonRight.classList.toggle("ide-button__face--right-down");
            ideButtonTop.classList.toggle("ide-button__face--top-down");
            ideButtonFront.classList.toggle("ide-button__face--front-down");
            ideButtonBack.classList.toggle("ide-button__face--back-down");
            ideButtonFront.innerHTML = ":D";
        }
        else {
            ideButtonBottom.classList.toggle("ide-button__face--bottom-up");
            ideButtonLeft.classList.toggle("ide-button__face--left-up");
            ideButtonRight.classList.toggle("ide-button__face--right-up");
            ideButtonTop.classList.toggle("ide-button__face--top-up");
            ideButtonFront.classList.toggle("ide-button__face--front-up");
            ideButtonBack.classList.toggle("ide-button__face--back-up");
            ideButtonFront.innerHTML = "again?";
            numberOfTimesClicked++;
        }
});
