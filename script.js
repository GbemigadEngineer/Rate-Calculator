"use strict";
const calculateMaturity = function () {
  // get the input values from the form elements.
  const principle = parseFloat(document.getElementById("principle").value);

  const intrest = parseFloat(document.getElementById("intrestrate").value);

  const tenure = parseFloat(document.getElementById("tenure").value);

  // Perform the calculation

  const maturityAmount = principle * (principle * intrest * tenure) / 100;

  // display the result

  document.getElementById(
    "result"
  ).innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
};

// Attach event listner to calculate button
document 
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturity);
