// Variables to hold user data
let age, exercisePerWeek, currentWeight, targetWeight, currentWeightUnit, targetWeightUnit, numMonths, dietPreference;

function validateInput(input) {
  return input !== null && input !== undefined && input !== "";
}

async function showMealPlan() {
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

  // Construct the payload
  const payload = {
    age: age,
    exercisePerWeek: exercisePerWeek,
    currentWeight: currentWeight,
    targetWeight: targetWeight,
    numMonths: numMonths,
    dietPreference: dietPreference
  };

  try {
    // Make the API call
    const response = await fetch('https://27fpsmseak.execute-api.us-east-2.amazonaws.com/testing1/myre', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'VhFimigloJ2SEO2jv0EB03DW2sxkBakq7NM0CaeM'
      },
      body: JSON.stringify(payload)
    });

    // Process the response
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("API response received:", jsonResponse);

      const parsedMealPlan = JSON.parse(jsonResponse.body);  // Parsing the body to get the meal plan
      const rawMealPlan = parsedMealPlan.meal_plan;
  
      // Formatting the meal plan
      let formattedMealPlan = rawMealPlan
        .replace("Breakfast:", "<strong>Breakfast:</strong><ul><li>")
        .replace("Lunch:", "</li></ul><strong>Lunch:</strong><ul><li>")
        .replace("Dinner:", "</li></ul><strong>Dinner:</strong><ul><li>")
        .replace("Snack:", "</li></ul><strong>Snack:</strong><ul><li>");
  
      // Replace each food separator '-' with a new list item
      formattedMealPlan = formattedMealPlan.replace(/-\s*(.+?)(?=-|$)/g, (_, item) => `<li>${item}</li>`);
  
      // Close the last unordered list
      formattedMealPlan += "</ul>";

      document.getElementById('meal-plan').innerHTML = formattedMealPlan;
      document.getElementById('meal-plan-container').style.display = 'block';
  
    } else {
      alert('Something went wrong!');
    }

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
