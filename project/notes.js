// QUANT: APIs, websockets, synchronous vs asynchronous programming
    /** 
    API: software that connects client to database; google API that translates text messages, might be SLOW
    Websocket: continuous connection
    Distributed computing: system of comoputers on diffr networks passing data to one another — multi player games
    Async Programming, multiple jobs simiultaneously, not threading, runs menial tasks and long running tasks same time
    set tasks in event queue, to indicate when to run certain sub divided tasks and not in one push
    Thread: one flow of execution in a program
    */

const { DirectionalLightShadow } = require("three")



// GENERAL INFO
    FUNCTIONS
    /* let functionName = function(input) {
        ......
    }
    

    functionName = function(parameters) {
        // IMPLEMENT
    }
    */

    3D ROTATION
    /** Think of x as a rod across the screen, y as a rod going down, and x as facing you */
    rotate3d(x, y, z, a), /** where x, y, z are coordinates of rotation, and a is the angle */

// IDS
    /* document.getElementById("name") accesses the variable, and .innerHTML accesses the content
    document.write(input) writes the input onto the webpage
    value refers to an attribute of a tag, while innerHTML refers to the contents between a tag's beginning and end. */


// CLASSES
    /* We use document.getElementsByClassName("className") to access the LIST of classes with that class name.
    NOTE THAT IT IS A LIST, SO WE HAVE TO ACCESS IT AS WE DO A LIST, SAME WITH TAG NAME, so even if there is only one element of that 
    class name, say we want to set the innerHTML of another ID to that of the class name:
    */

   Example:
    document.getElementById("idName").innerHTML = document.getElementsByClassName("className")[0].innerHTML;
    document.getElementsByTagName("div")[0].innerHTML = null;

    // document.getElementsByTagName("div")[0].classList.toggle     toggles between 2 classes given in the function, preferably like open/close


// EVENT LISTENERS
    /**
     * e stands for event
     * 
     * add event listener ("type of listener", function ran)
     * radio.addEventListener("change", changeSide); 
     * 
     * - click, change (radio)
     *      * onkeypress or onkeyhold = functionName(e) sends the signal when the key is pressed
     * keydown: to get the ascii value, var x = e.which || e.keyCode; 
     * 
     * e.clientX and e.clientY show the x and y coordinates whereever the mouse is touching
     */

    /** To have a quick function we just do () => { // function in here } */
     box.forEach(item => { 
         item.addEventListener('click' , () => { item.classList.toggle('box-active') });
     });

    //  touches is a read-only TouchList listing all the Touch objects for touch points that are 
    //  currently in contact with the touch surface, regardless of whether or not they've changed or what their target element was at touchstart time.
    
    