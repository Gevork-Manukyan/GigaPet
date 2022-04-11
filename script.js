const petArray = []

$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.calculus-button').click(clickedCalculusButton);
    $('.duplicate').click(clickedDuplicate);
    $('.clearBtn').click(clickedClear)

  if (petArray.length === 0)
    petArray.push( new createNewPet() )

  updatePetInfoInHtml()
})

function createNewPet() {
  // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
  this.name = null

  while (this.name === null) {
      this.name = prompt("Enter your pet name")
  }
  
  this.weight = getRandomInt(100)
  this.happiness = getRandomInt(10)
  this.smartness = getRandomInt(6)
  this.prestige = 0
}

function getRandomInt(upperLimit) {
  return Math.floor(Math.random() * (upperLimit - 1)) + 1;
}

function clickedTreatButton() {
  if (pet_info.happiness <= 19.5 && pet_info.weight <= 180) {
    pet_info.happiness += 0.5
    pet_info.weight += 20

    addToTextBox(`${pet_info.name}: Yummy bruv. Can I get some more?`)
  } else {
    addToTextBox(`${pet_info.name}: If I eat any more I will burst`)
  }


  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  if (pet_info.happiness <= 19.5 && pet_info.weight >= 5) {
    pet_info.happiness += 0.5
    pet_info.weight -= 5

    addToTextBox(`${pet_info.name}: Whoopy! That was fun!`)
  } else {
    addToTextBox(`${pet_info.name}: No playing! I'm tired.`)
  }

  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  if (pet_info.happiness >= 0.5 && pet_info.weight >= 10) {
    pet_info.happiness -= 0.5
    pet_info.weight -= 10

    addToTextBox(`${pet_info.name}: Great workout. Feeling pumped.`)
  } else {
    addToTextBox(`${pet_info.name}: I'm too sore for this.`)
  }

  checkAndUpdatePetInfoInHtml();
}

function clickedCalculusButton() {
  if (pet_info.happiness >= 5) {
    pet_info.smartness = Math.round((pet_info.smartness + 0.2) * 10) / 10
    pet_info.happiness -= 5

    addToTextBox(`${pet_info.name}: Ah yes, I love calculus.`)
  } else {
    addToTextBox(`${pet_info.name}: Stop torturing me!`)
  }

  checkAndUpdatePetInfoInHtml();
}

function clickedDuplicate () {
  if (pet_info.smartness >= 20) {
    pet_info.smartness -= 20
    pet_info.prestige++

    addToTextBox(`${pet_info.name}: I have trancended REALITY!!!`)
    createNewPet()
  } else {
    addToTextBox(`${pet_info.name}: Excuse me?`)
  }
}

function clickedClear() {
  $("p").remove(".text-item")
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();  
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {

  if (pet_info.happiness < 0) {
    // message
    pet_info.happiness = 0
  } else if (pet_info.happiness > 20) {
    // message
    pet_info.happiness = 20
  }

  if (pet_info.weight < 0) {
    // message
    pet_info.weight = 0
  } else if (pet_info.weight > 200) {
    // message 
    pet_info.weight = 200
  }

  if (pet_info.smartness < 0) {
    // message
    pet_info.smartness = 0
  } 
}

function addToTextBox(string) {
  let p = $(`<p class="text-item"></p>`).text(string); 
  $(".clearBtn").after(p)
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.intelligence').text(pet_info['smartness'])
  $('.prestige').text(pet_info['prestige'])
}
  