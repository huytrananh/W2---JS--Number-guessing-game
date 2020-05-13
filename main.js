// 1. computer need to pick a random number
let computerNum = Math.floor(Math.random()*100) + 1
let historyNum = []
let time = 5
let myTime;
console.log("This is the number that computer chose: ", computerNum)

// 2. when user click the guess, it will fire a function
function guessNumber(){
    console.log("Fireeeee")
    // 3. grab the value that user typed
    let userNum = document.getElementById("guessNumber").value
    let resultMessage = " "
    // 4. compare with the value computer picked with user value
    if(computerNum > userNum){              // 5. if computer's num > user's num => Print: Too low
        resultMessage = "too low"
    } else if(computerNum < userNum){        // 6. if computer's num < user's num => Print: Too high
        resultMessage = "too high"
    } else if(computerNum == userNum){       // 7. if computer's num === user's num => Print: Correct
        resultMessage = "Correct"
    }
    
    if(historyNum.length < 5){
        historyNum.push(userNum)
    } else{
        alert("Can not guess now. Reset the game!")

    }
    // keep the history
    document.getElementById("resultArea").innerHTML = `${resultMessage}` // 8. show the result to user
    document.getElementById("historyArea").innerHTML = `History: ${historyNum}` //show the history
}

// Counting time
function timeCounting(){
    myTime = setInterval(() => {
        time -= 1
        if(time == -1){
            alert("Time over!")
        }
        document.getElementById('timeCount').innerHTML = `HURRY UP !!: ${time} second`
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timeCounting()// fire the timecounting function!!


//Timeout 
function timeOut() {
    clearInterval(myTime);
}


// 1. make the chance feature (only have 5 chance)
// 2. reset feature (when click the reset button = > reset everything)
// 3. if user win/lose => the guess button will be disabled(cannot click)
// 4. add timer feature (if you cannot finish game within 20s, then you lose)



