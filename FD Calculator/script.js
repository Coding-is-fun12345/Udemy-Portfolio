function calculateMaturityAmount() {
  // Get input values from the form elements

  const principle = parseFloat(document.getElementById("principle").value);
  const intetrestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  //  Perform the calculation
  const maturityAmount =
    (principle * (principle * intetrestRate * tenure)) / 100;

  //   Display the Result
  document.getElementById(
    "result"
  ).innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Attach the event listener to the calculate Button
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturityAmount);
