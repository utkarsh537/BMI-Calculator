const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const ageInput = document.querySelector('#age');
const result = document.querySelector('#results');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(heightInput.value, 10);
  const weight = parseInt(weightInput.value, 10);
  const age = parseInt(ageInput.value);

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please give a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<strong>Your BMI is ${bmi}</strong>`;
  }
});
