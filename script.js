// Variables to hold user data
let age, exercisePerWeek, currentWeight, targetWeight, currentWeightUnit, targetWeightUnit, numMonths, dietPreference;

function validateInput(input) {
  return input !== null && input !== undefined && input !== "";
}

function showMealPlan() {
  // Capture all inputs at once
  age = document.getElementById('age').value;
  exercisePerWeek = document.getElementById('exercisePerWeek').value;
  currentWeight = document.getElementById('current-weight').value;
  currentWeightUnit = document.getElementById('current-weight-unit').value;
  targetWeight = document.getElementById('target-weight').value;
  targetWeightUnit = document.getElementById('target-weight-unit').value;
  numMonths = document.getElementById('numMonths').value;
  dietPreference = document.getElementById('diet').value;

  // Validate all inputs
  if (!validateInput(age) || !validateInput(exercisePerWeek) || !validateInput(currentWeight) || !validateInput(targetWeight) || !validateInput(numMonths) || !validateInput(dietPreference)) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulating the API call with a mock meal plan for now
  const mockMealPlan = `
    - Breakfast: Toast and eggs
    - Lunch: Grilled chicken and rice
    - Dinner: Steak and potatoes
    - Snack: Apple slices`;

  // Display meal plan
  document.getElementById('meal-plan').innerHTML = mockMealPlan;
  document.getElementById('meal-plan-container').style.display = 'block';
}
