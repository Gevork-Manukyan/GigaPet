// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {name: null, weight:"??", happiness:"??"};

$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
   
  // Prompt user for name
  while (pet_info.name === null) {
      pet_info.name = prompt("Enter your pet name")
  }
  pet_info.weight = getRandomInt(100)
  pet_info.happiness = getRandomInt(10)

  updatePetInfoInHtml()

})

function getRandomInt(upperLimit) {
  return Math.floor(Math.random() * (upperLimit - 1)) + 1;
}

function clickedTreatButton() {
  pet_info.happiness += 0.5
  pet_info.weight += 10


  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  pet_info.happiness += 0.5
  pet_info.weight -= 5

  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  pet_info.happiness -= 0.8
  pet_info.weight -= 10

  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();  
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {

  if (pet_info.happiness < 0) {
    // message
    pet_info.happiness = 0
  }

  if (pet_info.weight < 0) {
    // message
    pet_info.weight = 0
  }
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
}
  