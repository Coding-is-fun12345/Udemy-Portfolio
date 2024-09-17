const dobInput = document.getElementById("dob");
const calculatorBtn = document.getElementById(".calculator-btn");
const resultDiv = document.getElementById("result");
calculatorBtn.addEventListener("click", function () {
  const dob = new Date(dobInput.value);
  const ageInMs = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  resultDiv.innerHTML = `your age is ${age} years.`;
});
