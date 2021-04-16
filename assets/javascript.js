let timerDisp = document.querySelector(".timer")


setTime()   
// setSeconds()


let secondsLeft = 75
let minutes = secondsLeft/60

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;

      let minutes = secondsLeft/60
      console.log(Math.floor(minutes))

      let modSeconds = secondsLeft % 60
      console.log(modSeconds)
      let seconds = modSeconds * 60 
      console.log(seconds)
      timerDisp.textContent = Math.floor(minutes) + ":" + modSeconds

      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        alert("Out of Time!")
      }
  
    }, 1000);
}
