// Variables to hold user data
let age, exercisePerWeek, currentWeight, targetWeight, targetWeightUnit, numMonths, dietPreference, weightBarChart;

function validateInput(input) {
  return input !== null && input !== undefined && input !== "";
}

function goToStep2() {
  age = document.getElementById('age').value;

  if (!validateInput(age)) {
    alert("Please enter your age.");
    return;
  }

  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

function goToStep3() {
  exercisePerWeek = document.getElementById('exercisePerWeek').value;

  if (!validateInput(exercisePerWeek)) {
    alert("Please select the amount of exercise per week.");
    return;
  }

  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
}

function goToStep4() {
  currentWeight = document.getElementById('current-weight').value;
  currentWeightUnit = document.getElementById('current-weight-unit').value;// Capture the weight unit
  
  if (!validateInput(currentWeight)) {
    alert("Please enter your current weight.");
    return;
  }
  
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'block';
}

function createWeightBarChart() {
  const label = `Weight (${targetWeightUnit})`;
  const weightCtx = document.getElementById('weightBarChart').getContext('2d');

  if (weightBarChart) {  // Destroy the previous chart if it exists
    weightBarChart.destroy();
  }

  weightBarChart = new Chart(weightCtx, {
    type: 'bar',
    data: {
      labels: ['Current Weight', 'Target Weight'],
      datasets: [{
        label: label,
        data: [currentWeight, targetWeight],
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
      }],
    },
  });
}

function goToStep5() {
  targetWeight = document.getElementById('target-weight').value;
  targetWeightUnit = document.getElementById('target-weight-unit').value;  // Capture the weight unit
  
  if (!validateInput(targetWeight)) {
    alert("Please enter your target weight.");
    return;
  }
  
  document.getElementById('step4').style.display = 'none';
  document.getElementById('step5').style.display = 'block';
  
  createWeightBarChart();  // Call this function here
}

function goToStep6() {
  numMonths = document.getElementById('numMonths').value;

  if (!validateInput(numMonths)) {
    alert("Please enter the number of months to achieve your goal.");
    return;
  }

  document.getElementById('step5').style.display = 'none';
  document.getElementById('step6').style.display = 'block';
}

function showMealPlan() {
  dietPreference = document.getElementById('diet').value;

  if (!validateInput(dietPreference)) {
    alert("Please choose a diet plan.");
    return;
  }

  // Simulating the API call with a mock meal plan for now
  const mockMealPlan = `
    - Breakfast: Toast and eggs
    - Lunch: Grilled chicken and rice
    - Dinner: Steak and potatoes
    - Snack: Apple slices`;

  document.getElementById('meal-plan').innerHTML = mockMealPlan;
}
