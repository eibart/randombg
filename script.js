var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonR = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";

}
// onLoad same as User defined
window.onload = setGradient;

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomBG = "rgb(" + r + "," + g + "," + b + ")";
    var r1 = Math.floor(Math.random() * 256);
    var g1 = Math.floor(Math.random() * 256);
    var b1 = Math.floor(Math.random() * 256);
    var randomBG1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
console.log(randomBG, randomBG1);
    body.style.background = "linear-gradient(to right, "+ randomBG + ", " + randomBG1;    
    css.textContent = "RandomColorCode: " + body.style.background;
  }

    // oude code = geen variable
    // let red, green, blue;
    // red = Math.floor(Math.random() * 256);
    // green = Math.floor(Math.random() * 256);
    // blue = Math.floor(Math.random() * 256);
  
    // let color = `rgb(${red}, ${green}, ${blue})`;
    // console.log(color);

  

buttonR.addEventListener("click", generateColor);



