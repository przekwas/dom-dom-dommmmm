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
        let idText = document.createTextNode(square.id);

        //slaps the box to the page
        body.appendChild(square);

        //makes the square have a mouseover effect to add its id
        square.addEventListener("mouseover", function () {
            idTag.appendChild(idText);
        })
        //makes the square have a mouseout effect to remove its id
        square.addEventListener("mouseout", function () {
            idTag.removeChild(idText);
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
    }

    //click button to make a box
    squareButton.addEventListener("click", function () {
        squareAdder();
    })
})