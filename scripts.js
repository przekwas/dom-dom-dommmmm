document.addEventListener("DOMContentLoaded", function () {
    //making my life easier
    let body = document.body;

    //create a button, add text to it, put it in the body
    let squareButton = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    squareButton.appendChild(btnText);
    squareButton.style.display = "block";
    body.appendChild(squareButton);

    //function to add a square with mouseover effect
    function squareAdder() {
        //creates a div with class box, id's the boxes based on how many there are on screen
        let square = document.createElement("div");
        square.className = "box";
        let divCounter = document.getElementsByTagName("div").length;
        square.id = divCounter;

        //gives each div with class box a blank h1 element named idTag w/ style
        let idTag = document.createElement("h1");
        idTag.style.textShadow = "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white, 1px 1px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white";
        square.appendChild(idTag);
        let idNumber = document.createTextNode(square.id);

        //slaps the box to the page
        body.appendChild(square);

        //makes the square have a mouseover effect to add its id
        square.addEventListener("mouseover", function () {
            idTag.appendChild(idNumber);
        })
        //makes the square have a mouseout effect to remove its id
        square.addEventListener("mouseout", function () {
            idTag.removeChild(idNumber);
        })
        //makes the square change to a random background color when clicked
        square.addEventListener("click", function () {
            //generate 3 random numbers between 0-255 for rgb values
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            //puts the 3 values into a rgb(r,g,b) string
            let randomRGB = "rgb(" + r + "," + g + "," + b + ")";
            //applies the bg color as a random rgb color to the square
            square.style.backgroundColor = randomRGB;
        })

        //makes the square have a dbl click to remove itself
        square.addEventListener("dblclick", function () {
            //checks to see if square id number is even AND if it has any element on the right
            if (divCounter % 2 === 0 && square.nextSibling == null) {
                alert("There ain't no square after that to remove, yo!");
            //checks to see if the square id number is just even AND if its not zero, then remove the next square as an action
            } else if (divCounter % 2 === 0 && divCounter !== 0) {
                body.removeChild(square.nextElementSibling);
            }
            //check to make sure user doesnt delete the click button
            if (square.previousSibling.nodeName === "BUTTON") {
                alert("There ain't no square before that to remove, yo!");
            //checks to see if square id number is odd and remove the number before it as an action
            } else if (divCounter % 2 !== 0) {
                body.removeChild(square.previousSibling);
            } 
        })
    }

    //click button to make a box
    squareButton.addEventListener("click", function () {
        squareAdder();
    })
})