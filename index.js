const calculateBMIBtn = document.querySelector(".js-calculate-bmi");
const displayBMIResult = document.querySelector(".js-display-result");
const displayBMIRanges = document.querySelector(".js-display-ranges");
const warningMessage = "";

function calculatBodyMassIndex() {
  const userWeight = document.querySelector(".js-input-weight");
  const userHeight = document.querySelector(".js-input-height");
  const weightValue = Number(userWeight.value);
  const heightValue = Number(userHeight.value);

  const bodyMassIndex = (
    weightValue /
    ((heightValue * weightValue) / 10000)
  ).toFixed(2);
  console.log(typeof bodyMassIndex);
  if (weightValue === 0 || heightValue === 0) {
    displayBMIResult.innerHTML = `<p class="warning-msg">Please Fill the above fields</p>`;
  } else {
    displayBMIResult.innerHTML = `BMI Value : ${bodyMassIndex}`;
  }
  let rangesOfBodyMassIndex = "";

  if (weightValue === 0 || heightValue === 0) {
    displayBMIRanges.innerHTML = `<p>Invalid Input Provided...</p>`;
  } else {
    if (bodyMassIndex < 18.6) {
      rangesOfBodyMassIndex = "Under Weight";
    } else if (bodyMassIndex >= 18.6 && bodyMassIndex < 24.9) {
      rangesOfBodyMassIndex = "Normal Range";
    } else if (bodyMassIndex > 24.9) {
      rangesOfBodyMassIndex = "Overweight";
    }
    displayBMIRanges.innerHTML = `BMI Range : ${rangesOfBodyMassIndex}`;
    console.log(rangesOfBodyMassIndex);
    userWeight.value = "";
    userHeight.value = "";
  }

  // console.log(bodyMassIndex);
}

calculateBMIBtn.addEventListener("click", () => {
  calculatBodyMassIndex();
});
