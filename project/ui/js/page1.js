
/** Prevents scrolling when inside the IDE */

let editorPanel = document.getElementById("editor");
editorPanel.addEventListener("mouseover", hiddenOverflow)
editorPanel.addEventListener("mouseout", visibleOverflow)

function hiddenOverflow() {
  document.body.style.overflow = "hidden";
}
function visibleOverflow() {
  document.body.style.overflow = "visible";
}

let cube = document.getElementsByClassName("cube")[0];

/** Animates the title */
let numberOfTimesTitleClicked = 0;
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
        title1.classList.toggle("title1Party");
        title2.classList.toggle("title2Party");
        if (numberOfTimesTitleClicked++ % 2 == 0) {
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
            numberOfTimesTitleClicked++;
        }
});

/** Animates the ide button */
let numberOfTimesRunClicked = 0;
let ideButton = document.getElementsByClassName("ide-button")[0],
ideButtonBottom = document.getElementsByClassName("ide-button__face--bottom")[0],
ideButtonLeft = document.getElementsByClassName("ide-button__face--left")[0],
ideButtonRight = document.getElementsByClassName("ide-button__face--right")[0],
ideButtonTop = document.getElementsByClassName("ide-button__face--top")[0],
ideButtonFront = document.getElementsByClassName("ide-button__face--front")[0],
ideButtonBack = document.getElementsByClassName("ide-button__face--back")[0];
ideButton.addEventListener("click", () => {
        if (numberOfTimesRunClicked++ % 2 == 0) {
            ideButtonBottom.classList.toggle("ide-button__face--bottom-down");
            ideButtonLeft.classList.toggle("ide-button__face--left-down");
            ideButtonRight.classList.toggle("ide-button__face--right-down");
            ideButtonTop.classList.toggle("ide-button__face--top-down");
            ideButtonFront.classList.toggle("ide-button__face--front-down");
            ideButtonBack.classList.toggle("ide-button__face--back-down");
        }
        else {
            ideButtonBottom.classList.toggle("ide-button__face--bottom-up");
            ideButtonLeft.classList.toggle("ide-button__face--left-up");
            ideButtonRight.classList.toggle("ide-button__face--right-up");
            ideButtonTop.classList.toggle("ide-button__face--top-up");
            ideButtonFront.classList.toggle("ide-button__face--front-up");
            ideButtonBack.classList.toggle("ide-button__face--back-up");
            numberOfTimesRunClicked++;
        }
});

/** Disables arrow key moving window */
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

