// *** Write your code here*
const  appendNumber = (number) => {
    document.getElementById("result").innerHTML += number;
}
function clear(blank) {
   blank=" ";
   document.getElementById("result").innerHTML += blank;
}

function add() {
   document.getElementById("result").innerHTML += "+";
}
function subtract() {
   document.getElementById("result").innerHTML += "-";
}
function multiply() {
   document.getElementById("result").innerHTML += "*";
}
function division() {
   document.getElementById("result").innerHTML += "/";
}

function total() {
     var egal = eval(document.getElementById('result').innerHTML);
     document.getElementById('result').innerHTML = egal;
 }