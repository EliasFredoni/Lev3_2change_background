let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let result = document.getElementById("result");

function changetext() {
    console.log("Ändere deine Hintergrundfarbe!");
    result.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}