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

  // Prepare the payload for the API call
  const payload = {
    age: age,
    currentWeight: currentWeight,
    targetWeight: targetWeight,
    exercisePerWeek: exercisePerWeek,
    numMonths: numMonths,
    dietPreference: dietPreference
  };

  // Define the API endpoint
  const apiEndpoint = "https://s8hirlccnh.execute-api.us-east-2.amazonaws.com/Test2/mealplan";

  // Make the API call
  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Uncomment this line if you have an API key: 'x-api-key': 'YOUR_AWS_API_KEY'
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    // Handle successful response. Display the meal plan here.
    document.getElementById('meal-plan').innerHTML = data.mealPlan; // Assuming 'mealPlan' is a field in the API response
    document.getElementById('meal-plan-container').style.display = 'block';
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
    alert("There was an error generating your meal plan. Please try again.");
  });
}
