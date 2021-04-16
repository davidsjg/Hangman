let timerDisp = document.querySelector(".timer")


setTime()   
setSeconds()


let secondsLeft = 300
let minutes = secondsLeft/60

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;

      let minutes = secondsLeft/60
      console.log(Math.floor(minutes))

      let modSeconds = secondsLeft % 60
      let seconds = modSeconds * 60 
      timerDisp.textContent = Math.floor(minutes) + ":" + secondsLeft2

      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        alert("Out of Time!")
      }
  
    }, 1000);
}

let secondsLeft2 = 59   

function setSeconds() {
var timerInterval2 = setInterval(function() {
    secondsLeft2--;
  

    if (secondsLeft2 === 0) {

        clearInterval(timerInterval2)
        secondsLeft2=59
        setSeconds()

    }


    // if(secondsLeft2 === 0 && minutes === 0) {
    //   // Stops execution of action at set interval
    //   clearInterval(timerInterval2);
    //   // Calls function to create and append image
    //   alert("Out of Time!")
    // } 


  }, 1000);

}
