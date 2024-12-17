"use strict";

const result = document.getElementById("result");
const error = document.getElementById("error-message");
const calculateMaturity =
  // Attach event listner to calculate button
  document
    .getElementById("calculateBtn")
    .addEventListener("click", function () {
      // Prevent default action
      // get the input values from the form elements.
      const principle = parseFloat(document.getElementById("principle").value);

      const intrest = parseFloat(document.getElementById("intrestrate").value);

      const tenure = parseFloat(document.getElementById("tenure").value);

      if (principle && intrest && tenure !== "") {
        // Perform the calculation

        const maturityAmount =
          (principle * (principle * intrest * tenure)) / 100;

        if (!result.classList.contains("hidden")) {
          result.innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
        } else {
          result.innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
          result.classList.remove("hidden");
          error.classList.add("hidden");
        }
      } else {
        result.classList.add("hidden");
        error.classList.remove("hidden");
        error.style.textAlign = "center";
        error.style.color = "red";
      }
    });
