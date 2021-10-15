//Function which returns a random choice from rock,paper,scissors. This function acts as a computer
function computerPlay(){
    let choice=['rock','paper','scissor']
    let result=choice[Math.floor(Math.random()*choice.length)]
    return result
}

let playerPoint=0,computerPoint=0 //Variable to keep track of points

//Function which plays a single round of rock paper scissors game
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase(); //To make the player input case sensitive
    switch(playerSelection){
        //If player selects rock
        case 'rock':if(computerSelection==='rock'){
                alert('Draw! Both selected rock')
            }
            else if(computerSelection==='paper'){
                alert('You loose! Paper beats rock')
                computerPoint++
            }
            else if(computerSelection=='scissor'){
                alert('You win! Rock beats scissor')
                playerPoint++
            }
            break;
        //If player selects paper
        case 'paper':if(computerSelection==='rock'){
                alert('You win! Paper beats rock')
                playerPoint++
            }
            else if(computerSelection==='paper'){
                alert('Draw! Both selected paper')
            }
            else if(computerSelection=='scissor'){
                alert('You loose! Scissor beat rock')
                computerPoint++
            }
            break;
        //If player selects scissor
        case 'scissor':if(computerSelection==='rock'){
                alert('You loose! Rock beats scissor')
                computerPoint++
            }
            else if(computerSelection==='paper'){
                alert('You win! Scissor beats paper')
                playerPoint++
            }
            else if(computerSelection=='scissor'){
                alert('Draw! Both selected scissor')
            }
            break;
        //If none of the above cases run
        default:alert('Enter proper choice')
    }
    console.log(playerPoint,computerPoint)
    return [playerPoint,computerPoint]
}

function game(){
    while(playerPoint<5 && computerPoint<5){
        let playerChoice=prompt("Enter either rock or paper or scissor","")
        let computerChoice=computerPlay()
        console.log(computerChoice)
        let point=playRound(playerChoice,computerChoice)
        console.log("point="+point)
        alert(`Computer point is ${computerPoint}`)
        alert(`Player point is ${playerPoint}`)
    }
    if(playerPoint==5){
        alert("Hell Yeah!!! You've beat the computer! Looks like AI is not gonna take over the world after all")
    }
    else{
        alert("Computer won! The end is near folks!!! Computers are now smarter than us")
    }
    
}
game()