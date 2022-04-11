const petArray = []

$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
  if (petArray.length === 0)
    petArray.push( new createNewPet() )

  $(`.clearBtn`).click(clickedClear)

  updatePetInfoInHtml(0)
})

function createNewPet() {
  this.name = null

  while (this.name === null) {
      this.name = prompt("Enter your pet name")
  }
  
  this.weight = getRandomInt(100)
  this.happiness = getRandomInt(10)
  // TODO: Change back
  // this.smartness = getRandomInt(6)
  this.smartness = 20
  this.prestige = 0

  let petNumber = petArray.length
  $(".pet-content-wrapper").append(`

  <div class="pet${petNumber}">
    <section class="pet-image-container">
      <!-- Replace pet image with your own pet image -->
      <img class="pet-image pet-image${petNumber}" src="https://cdn.glitch.com/3aa98e05-3216-497c-a251-210ae4713a83%2Fhound.jpg?1541715339220">
    </section>
    <section class="dashboard">
        <div>Name: <strong><span class="name${petNumber}"></span></strong></div>
        <div>Weight: <strong><span class="weight${petNumber}"></span> pounds</strong></div>
        <div>Happiness: <strong><span class="happiness${petNumber}"></span> tail wags (per min)</strong></div>
        <div>Intelligence: <strong><span class="intelligence${petNumber}"></span> Smartness</strong></div>
        <div>Prestige: <strong><span class="prestige${petNumber}"></span> lvl</strong></div>
        <div class="button-container">
          <button class="pet${petNumber} treat-button">
            Treat
          </button>
          <button class="pet${petNumber} play-button">
            Play
          </button>
          <button class="pet${petNumber} exercise-button">
            Exercise
          </button>
          <button class="pet${petNumber} calculus-button">
            Do Calculus
          </button>
          <button class="pet${petNumber} duplicate">
            Duplicate
          </button>
        </div>
    </section>
  </div>

  `)

    // When each button is clicked, it will "call" function for that button (functions are below)
    $(`.pet${petNumber}.treat-button`).click(clickedTreatButton);
    $(`.pet${petNumber}.play-button`).click(clickedPlayButton);
    $(`.pet${petNumber}.exercise-button`).click(clickedExerciseButton);
    $(`.pet${petNumber}.calculus-button`).click(clickedCalculusButton);
    $(`.pet${petNumber}.duplicate`).click(clickedDuplicate);
}

function getRandomInt(upperLimit) {
  return Math.floor(Math.random() * (upperLimit - 1)) + 1;
}

function clickedTreatButton(data) {
  let petNumber = parseInt( data.target.className.split(" ")[0].charAt(3) )

  if (petArray[petNumber].happiness <= 19.5 && petArray[petNumber].weight <= 180) {
    petArray[petNumber].happiness += 0.5
    petArray[petNumber].weight += 20

    addToTextBox(`${petArray[petNumber].name}: Yummy bruv. Can I get some more?`)
  } else {
    addToTextBox(`${petArray[petNumber].name}: If I eat any more I will burst`)
  }


  checkAndUpdatePetInfoInHtml(petNumber);
}

function clickedPlayButton(data) {
  let petNumber = parseInt( data.target.className.split(" ")[0].charAt(3) )
  
  if (petArray[petNumber].happiness <= 19.5 && petArray[petNumber].weight >= 5) {
    petArray[petNumber].happiness += 0.5
    petArray[petNumber].weight -= 5

    addToTextBox(`${petArray[petNumber].name}: Whoopy! That was fun!`)
  } else {
    addToTextBox(`${petArray[petNumber].name}: No playing! I'm tired.`)
  }

  checkAndUpdatePetInfoInHtml(petNumber);
}

function clickedExerciseButton(data) {
  let petNumber = parseInt( data.target.className.split(" ")[0].charAt(3) )

  if (petArray[petNumber].happiness >= 0.5 && petArray[petNumber].weight >= 10) {
    petArray[petNumber].happiness -= 0.5
    petArray[petNumber].weight -= 10

    addToTextBox(`${petArray[petNumber].name}: Great workout. Feeling pumped.`)
  } else {
    addToTextBox(`${petArray[petNumber].name}: I'm too sore for this.`)
  }

  checkAndUpdatePetInfoInHtml(petNumber);
}

function clickedCalculusButton(data) {
  let petNumber = parseInt( data.target.className.split(" ")[0].charAt(3) )

  if (petArray[petNumber].happiness >= 5) {
    petArray[petNumber].smartness = Math.round((petArray[petNumber].smartness + 0.2) * 10) / 10
    petArray[petNumber].happiness -= 5

    addToTextBox(`${petArray[petNumber].name}: Ah yes, I love calculus.`)
  } else {
    addToTextBox(`${petArray[petNumber].name}: Stop torturing me!`)
  }

  checkAndUpdatePetInfoInHtml(petNumber);
}

function clickedDuplicate (data) {
  let petNumber = parseInt( data.target.className.split(" ")[0].charAt(3) )

  if (petArray[petNumber].smartness >= 20) {
    petArray[petNumber].smartness -= 20
    petArray[petNumber].prestige++

    addToTextBox(`${petArray[petNumber].name}: I have trancended REALITY!!!`)
    petArray.push(new createNewPet())
  } else {
    addToTextBox(`${petArray[petNumber].name}: Excuse me?`)
  }

  checkAndUpdatePetInfoInHtml(petNumber);
  checkAndUpdatePetInfoInHtml(petNumber + 1);
}

function clickedClear() {
  $("p").remove(".text-item")
}

function checkAndUpdatePetInfoInHtml(petNumber) {

  checkWeightAndHappinessBeforeUpdating(petNumber);  
  updatePetInfoInHtml(petNumber);
}

function checkWeightAndHappinessBeforeUpdating(petNumber) {

  if (petArray[petNumber].happiness < 0) {
    // message
    petArray[petNumber].happiness = 0
  } else if (petArray[petNumber].happiness > 20) {
    // message
    petArray[petNumber].happiness = 20
  }

  if (petArray[petNumber].weight < 0) {
    // message
    petArray[petNumber].weight = 0
  } else if (petArray[petNumber].weight > 200) {
    // message 
    petArray[petNumber].weight = 200
  }

  if (petArray[petNumber].smartness < 0) {
    // message
    petArray[petNumber].smartness = 0
  } 
}

function addToTextBox(string) {
  let p = $(`<p class="text-item"></p>`).text(string); 
  $(".clearBtn").after(p)
}

// Updates your HTML with the current values in your petArray[petNumber] object
function updatePetInfoInHtml(petNumber) {
  console.log(petArray[petNumber])

  $(`.name${petNumber}`).text(petArray[petNumber].name);
  $(`.weight${petNumber}`).text(petArray[petNumber].weight);
  $(`.happiness${petNumber}`).text(petArray[petNumber].happiness);
  $(`.intelligence${petNumber}`).text(petArray[petNumber].smartness);
  $(`.prestige${petNumber}`).text(petArray[petNumber].prestige);
}
  