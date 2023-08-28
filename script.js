// Function to go to Step 2
function goToStep2() {
    // You may add validations or save the data before moving to the next step
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  }
  
  // Function to go to Step 3
  function goToStep3() {
    // You may add validations or save the data before moving to the next step
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
  }
  
  // Function to show meal plan
  function showMealPlan() {
    const mealPlanDiv = document.getElementById('meal-plan');
    const diet = document.getElementById('diet').value;
  
    let mealPlan = [];
  
    switch (diet) {
      case 'highProtein':
        mealPlan = ["Breakfast: Scrambled eggs", "Lunch: Chicken salad", "Dinner: Grilled steak"];
        break;
      case 'keto':
        mealPlan = ["Breakfast: Keto pancakes", "Lunch: Caesar salad", "Dinner: Grilled salmon"];
        break;
      case 'lowCalorie':
        mealPlan = ["Breakfast: Fruit salad", "Lunch: Vegetable soup", "Dinner: Grilled chicken"];
        break;
      case 'vegetarian':
        mealPlan = ["Breakfast: Oatmeal", "Lunch: Veggie burger", "Dinner: Stir-fried tofu"];
        break;
      case 'vegan':
        mealPlan = ["Breakfast: Vegan smoothie", "Lunch: Lentil soup", "Dinner: Chickpea curry"];
        break;
      case 'glutenFree':
        mealPlan = ["Breakfast: Gluten-free muffin", "Lunch: Quinoa salad", "Dinner: Grilled fish"];
        break;
      case 'paleo':
        mealPlan = ["Breakfast: Eggs and avocado", "Lunch: Grilled chicken", "Dinner: Steak and vegetables"];
        break;
      case 'mediterranean':
        mealPlan = ["Breakfast: Greek yogurt", "Lunch: Falafel wrap", "Dinner: Seafood paella"];
        break;
      default:
        mealPlan = ["No meal plan available"];
    }
  
    const listHTML = mealPlan.map(meal => `<li>${meal}</li>`).join("");
    mealPlanDiv.innerHTML = `<ul>${listHTML}</ul>`;
  }
  