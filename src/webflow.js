console.log("hi");

const clothingColor = document.querySelector("#clothing-color");
const food = document.querySelector("#food");
const bandNameText = document.querySelector("#band-name-text");
const form = document.querySelector("#band-name-form");

function generateBandName(clothingColor, lastFoodEaten) {
  // Your code here
  // Initialize bandName to an empty string
  let bandName = "";

  // Function to capitalize the first letter of each word
  function capitalizeFirstLetter(word) {
    if (typeof word !== "string" || !word) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Construct the band name
  bandName =
    "The " +
    capitalizeFirstLetter(clothingColor) +
    " " +
    capitalizeFirstLetter(lastFoodEaten);

  return bandName;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
  const bandName = generateBandName(clothingColor.value, food.value);
  console.log(bandName);
  bandNameText.textContent = bandName;
});
