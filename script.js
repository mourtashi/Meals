// Variables to hold user data
let age, exercisePerWeek, currentWeight, targetWeight, currentWeightUnit, targetWeightUnit, numMonths, dietPreference;

// Validate function
function validateInput(input) {
  return input !== null && input !== undefined && input !== "";
}

// Function to toggle blur overlay and blur content
function toggleBlurOverlay(show) {
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('content-to-blur');
  
  if (show) {
    overlay.classList.add('blur-overlay');
    content.classList.add('blur-content');
  } else {
    overlay.classList.remove('blur-overlay');
    content.classList.remove('blur-content');
  }
}


// Async function to show meal plan
async function showMealPlan() {
  try {
    // Show the loading spinner and blur overlay
    document.getElementById('loading-spinner').style.display = 'block';
    toggleBlurOverlay(true);

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
      toggleBlurOverlay(false);
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

    // Make the API call
    const response = await fetch('https://27fpsmseak.execute-api.us-east-2.amazonaws.com/testing1/myre', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'VhFimigloJ2SEO2jv0EB03DW2sxkBakq7NM0CaeM'
      },
      body: JSON.stringify(payload)
    });

    // Hide the loading spinner and blur overlay
    document.getElementById('loading-spinner').style.display = 'none';
    toggleBlurOverlay(false);

    // Process the response
    if (response.ok) {
      const jsonResponse = await response.json();
      const parsedMealPlan = JSON.parse(jsonResponse.body);
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
    // Hide the loading spinner and blur overlay
    document.getElementById('loading-spinner').style.display = 'none';
    toggleBlurOverlay(false);
    console.error('There was a problem with the fetch operation:', error);
  }
}
