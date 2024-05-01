"use strict";
//
window.onload = init;
// value we know
const principal = document.getElementById("principalAmount");
const interestRate = document.getElementById("interestrate");
const loanTerm = document.getElementById("numbersOfYears");
//buttons
const calculate =document.getElementById("calculaterBtn");
const reset =document.getElementById("resetBtn");
//
const output =document.getElementById("output");

function init (){
  calculaterBtn.onclick = calculaterBtnclicked;
  resetBtn.onclick =resetBtnclicked;
}

//P= r(1+r)^n /(1 + r)^n -1
let principalAmount;
let numbersOfyears;
let interestrate;
output = principalAmount *(interestrate*(1+interestrate)**)
