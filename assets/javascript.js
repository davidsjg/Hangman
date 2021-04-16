let timerDisp = document.querySelector(".timer")
let startBtn = document.querySelector("#startBtn")
let displayDiv = document.querySelector(".display")
let wordDisp = document.querySelector(".wordDisplay")
const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
  let keyPressed = e.key

  chars.forEach(function(letter){ 
    console.log(typeof letter)
    console.log(typeof keyPressed)

    if (keyPressed == letter) {
      console.log("success")
    } else {
      console.log("fail")
    }
  })
}

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


  chars.forEach(function(letter) {
    var numLetters = chars.length
    // var newUnder = document.createElement("p")
    // newUnder.textContent = "_"
    // wordDisp.appendChild(newUnder)

    wordUnder += under


    wordDisp.textContent = wordUnder

  })


}



