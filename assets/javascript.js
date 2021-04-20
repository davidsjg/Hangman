let timerDisp = document.querySelector(".timer")
let startBtn = document.querySelector("#startBtn")
let displayDiv = document.querySelector(".display")
let wordDisp = document.querySelector(".wordDisplay")
let charDisp = document.querySelector(".displayChar")
const log = document.getElementById('log');


//grabs random word from array, splits word into letters, puts letters into new array
let wordArray = ['steel', 'donkey', 'buffalo', 'avalanche', 'cereal']
var currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var chars = currWord.split('');
console.log(currWord)


let secondsLeft = 75
let minutes = secondsLeft/60


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;

      let minutes = secondsLeft/60

      let modSeconds = secondsLeft % 60
      let seconds = modSeconds * 60 
      timerDisp.textContent = Math.floor(minutes) + ":" + modSeconds

      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        // alert("Out of Time!")
        timerDisp.textContent = ""
      }
  
    }, 1000);
}


let wordUnder = ""
let under = ` _ `


startBtn.addEventListener("click", function() {
  displayDiv.textContent = ""
  setTime()   
  createRandom()
})

let createRandom = function() {

  let wordLength = ""

  chars.forEach(function(letter) {
    var newLetter = document.createElement("p")

    newLetter.classList.add('letter-'+letter)
    newLetter.classList.add('letters')
    newLetter.textContent= under

    let newChar = document.createElement("p")

    newChar.classList.add("char-"+letter)
    newChar.classList.add("chars")
    newChar.id ='chars-'+letter
    // newChar.classList.add('hidden')
    newChar.textContent= ` _ `//+letter


    // // int j = 123456;
    // String x = Integer.toString(j);
    // x = x.substring(0, 4) + "." + x.substring(4, x.length);

    let newCharString = chars.toString()


    console.log(newCharString)


    wordLength += newLetter

    charDisp.appendChild(newChar)
  
    // wordDisp.appendChild(newLetter)
  })
}

document.addEventListener('keypress', logKey);

let wrong = 0
let correct = 0
let wrongAnswers = 0
let correctAnswers = 0

function logKey(e) {

  let newCorrect = correct

  console.log(newCorrect)

  chars.forEach(function(letter){ 
    // console.log(typeof letter)
    // console.log(typeof keyPressed)
    let keyPressed = e.key
    let showChar= document.querySelector("#chars"-letter)
    // console.log(showChar)

    if (keyPressed == letter) {
      // showChar.removeAttribute("class", "hidden")
      $('.char-'+letter).text(letter)
      correct += 1



    } else {
      // console.log("fail")
      wrong += 1
      // console.log("correct =" + correct)
      // console.log("new correct =" + newCorrect)


    }


//     console.log(correctAnswers)
// console.log(wrongAnswers)
  })
  if (correct === newCorrect) {
    wrongAnswers += 1
    displayParts(wrongAnswers)
  }
}

function displayParts(wrongAnswers) {
  alert("in")
    switch (wrongAnswers) {
    case (1):
      console.log("Greate Job BRAH")
      break;
    case (2):
     console.log("That's two thus far shooter")
      break;
    }

}





