// Variables to hold user data
let age, exercisePerWeek, currentWeight, targetWeight, numMonths, dietPreference;

function goToStep2() {
  age = document.getElementById('age').value;
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

function goToStep3() {
  exercisePerWeek = document.getElementById('exercisePerWeek').value;
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
}

function goToStep4() {
  currentWeight = document.getElementById('current-weight').value;
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'block';
}

function goToStep5() {
  targetWeight = document.getElementById('target-weight').value;
  document.getElementById('step4').style.display = 'none';
  document.getElementById('step5').style.display = 'block';
}

function goToStep6() {
  numMonths = document.getElementById('numMonths').value;
  document.getElementById('step5').style.display = 'none';
  document.getElementById('step6').style.display = 'block';
}

function showMealPlan() {
  dietPreference = document.getElementById('diet').value;

  // Here, you would send the data to AWS and OpenAI's API
  // Simulating the API call with a mock meal plan for now
  const mockMealPlan = `
    - Breakfast: Toast and eggs
    - Lunch: Grilled chicken and rice
    - Dinner: Steak and potatoes
    - Snack: Apple slices`;

  document.getElementById('meal-plan').innerHTML = mockMealPlan;
}

// The actual implementation for sending the data to AWS and OpenAI's API would depend on the libraries and SDKs you're using
