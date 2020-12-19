// ~~~~~~~~~~~~~~~~~ query selectors  ~~~~~~~~~~~~~~~~~~~~~~~~
var addARecipeButton = document.querySelector("#add-recipe");
var letsCookButton = document.querySelector("#lets-cook");
var clearButton = document.querySelector("#clear-button");

// ~~~~~~~~~~~~~~~~~ event listeners ~~~~~~~~~~~~~~~~~~~~~~~~
addARecipeButton.addEventListener("click", addARecipe);
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

function generateRecipe() {

}

function clearRecipe() {

}

function addARecipe() {

}
