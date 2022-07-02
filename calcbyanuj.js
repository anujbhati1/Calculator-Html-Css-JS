console.log("This is JS Calculator");

let resultDisplay = document.getElementById("calc-display");

//This is for calculating the equation
function result() {
  let pdis = document.getElementById("calc-display").innerHTML;
  if (pdis !== "") {
    let total = eval(pdis);
    if (!Number.isInteger(total)) {
      total = total.toFixed(2);
    }
    document.getElementById("calc-display").innerHTML = total;
  }
}
function btnBack() {
  resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
}

//This is for clearing the display
function clr() {
  let clrs = (document.getElementById("calc-display").innerHTML = "");
}

//This is for functioning of the buttons
function btnLeftb() {
  resultDisplay.innerText += document.getElementById("btn-leftb").innerHTML;
}
function btnRightb() {
  resultDisplay.innerText += document.getElementById("btn-rightb").innerHTML;
}
function btn1() {
  resultDisplay.innerText += document.getElementById("btn1").innerHTML;
}
function btn2() {
  resultDisplay.innerText += document.getElementById("btn2").innerHTML;
}
function btn3() {
  resultDisplay.innerText += document.getElementById("btn3").innerHTML;
}
function btn4() {
  resultDisplay.innerText += document.getElementById("btn4").innerHTML;
}
function btn5() {
  resultDisplay.innerText += document.getElementById("btn5").innerHTML;
}
function btn6() {
  resultDisplay.innerText += document.getElementById("btn6").innerHTML;
}
function btn7() {
  resultDisplay.innerText += document.getElementById("btn7").innerHTML;
}
function btn8() {
  resultDisplay.innerText += document.getElementById("btn8").innerHTML;
}
function btn9() {
  resultDisplay.innerText += document.getElementById("btn9").innerHTML;
}
function btn0() {
  resultDisplay.innerText += document.getElementById("btn0").innerHTML;
}
function btnDot() {
  resultDisplay.innerText += document.getElementById("btn-dot").innerHTML;
}
function btnPls() {
  resultDisplay.innerText += document.getElementById("btn-pls").innerHTML;
}
function btnMns() {
  resultDisplay.innerText += document.getElementById("btn-mns").innerHTML;
}
function btnStr() {
  resultDisplay.innerText += document.getElementById("btn-str").innerHTML;
}
function btnDvd() {
  resultDisplay.innerText += document.getElementById("btn-dvd").innerHTML;
}
