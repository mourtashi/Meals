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
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer VhFimigloJ2SEO2jv0EB03DW2sxkBakq7NM0CaeM' // Replace with your actual OpenAI API key
      },
      body: JSON.stringify({
        prompt: JSON.stringify(payload), // Use the user inputs as a prompt
        max_tokens: 150
        // Additional parameters based on the chosen model
      })
    });

    // Process the response
    if (response.ok) {
      try {
        const jsonResponse = await response.json();
        console.log("API response received:", jsonResponse);

        // Process the response based on the structure of GPT-3 responses
        const generatedText = jsonResponse.choices[0].text;

        // ... (rest of the code for handling the generated text)
      } catch (error) {
        console.error('Error parsing JSON from response body:', error);
        alert('Something went wrong!');
      }
    } else {
      console.error('HTTP error:', response.status);
      alert('Something went wrong!');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    alert('Something went wrong!');
  }
}
