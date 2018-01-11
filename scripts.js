document.addEventListener("DOMContentLoaded", function () {
    //making my life easier
    let body = document.body;

    //create a button, add text to it, put it in the body
    let squareButton = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    squareButton.appendChild(btnText);
    squareButton.style.display = "block";
    body.appendChild(squareButton);

    //click button to make a box
    squareButton.addEventListener("click", function () {
        let square = document.createElement("div");
        square.className = "box";
        body.appendChild(square);
    })

})