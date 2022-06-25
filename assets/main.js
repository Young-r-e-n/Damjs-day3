// *** Write your code here*
const  appendNumber = (number) => {
    document.getElementById("result").value += number;
}
const clearScreen = () => {
   document.getElementById("result").value = ""
}
const calculate = () => {
   var p = document.getElementById("result").value;
   var q = eval(p);
   document.getElementById("result").value = q;
}