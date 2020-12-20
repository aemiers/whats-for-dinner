// ~~~~~~~~~~~~~~~~~ query selectors  ~~~~~~~~~~~~~~~~~~~~~~~~
var addARecipeButton = document.querySelector("#add-recipe");
var letsCookButton = document.querySelector("#lets-cook");
var clearButton = document.querySelector("#clear-button");
var youShouldMake = document.querySelector(".output-saying")
var recipePlaceHolder = document.querySelector(".recipe-name");
var potImage = document.querySelector(".pot-icon");
var sideRadio = document.querySelector("#side");
var mainDishRadio = document.querySelector("#main-dish");
var dessertRadio = document.querySelector("#dessert");
var entireMealRado = document.querySelector("#entire-meal");
var userChoice = document.querySelector("#input-section");
var mealOne = document.querySelector(".recipe-name-one");
var mealTwo = document.querySelector(".recipe-name-two");
var mealThree = document.querySelector(".recipe-name-three");

// ~~~~~~~~~~~~~~~~~ event listeners ~~~~~~~~~~~~~~~~~~~~~~~~
// addARecipeButton.addEventListener("click", addARecipe);
letsCookButton.addEventListener("click", generateRecipe);
clearButton.addEventListener("click", clearRecipe);

// ~~~~~~~~~~~~~~~~~ global variables ~~~~~~~~~~~~~~~~~~~~~~~~
var savedRecipes = [];
var currentRecipe;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function toggleHidden(element) {
  element.classList.toggle("hidden");
}

function deactivateReactivate(element) {
  element.classList.toggle("disabled");
}

function showHide() {
  toggleHidden(potImage);
  toggleHidden(recipePlaceHolder);
  toggleHidden(youShouldMake);
  toggleHidden(clearButton);
}

function generateRecipe() {
  event.preventDefault();
  deactivateReactivate(letsCookButton);
  showHide();
  for (var i = 0; i < userChoice.length; i++) {
    if (sideRadio.checked) {
      recipePlaceHolder.innerText = sides[getRandomIndex(sides)];
    } else if (mainDishRadio.checked) {
      recipePlaceHolder.innerText = mains[getRandomIndex(mains)];
    } else if (dessertRadio.checked) {
      recipePlaceHolder.innerText = desserts[getRandomIndex(desserts)];
    }
  }
}

function clearRecipe() {
  showHide();
  deactivateReactivate(letsCookButton);
}
