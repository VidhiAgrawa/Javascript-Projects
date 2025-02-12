const choice = document.querySelectorAll(".same")
const userScore = document.querySelector(".user-score")
const compScore = document.querySelector(".comp-score")
const result = document.querySelector(".result")
const restart = document.querySelector(".time")


choice.forEach( (element) => {
    element.addEventListener("click", () => {
        comp(element) 
    })
} )

// comp function

const comp = (element) => {
    const random = Math.floor( Math.random() * 3 )
    let click = random;
    // user choice
    let userId = element.getAttribute("id")
    // user choice end
    const setTime = setTimeout( () => {
        // giving comp a choice
        if( 0 == random ){
            click = "stone"
        }
        if( 1 == random ){
            click = "paper"
        }
        if( 2 == random ){
            click = "scissor"
        }
        // "2px solid #40E0D0" 
        document.querySelector(`#${click}` ).style.boxShadow = " 0 0 2em #40E0D0 " 
        document.querySelector(`#${click}` ).style.borderRadius = "20px"
        document.querySelector(`#${userId}` ).style.boxShadow = " 0 0 2em #FFB1B1 "
        document.querySelector(`#${userId}` ).style.borderRadius = "20px"
        // Match Draw
        if( click == userId ){
            document.querySelector(`#${userId}, #${click}` ).style.boxShadow = " 0 0 2em #A91D3A "
            result.textContent = "Match Draw"
            result.style.color = "purple"
        }
        // comp winning
        if( click == "stone" && userId == "scissor" ){
            compScore.textContent = parseInt(compScore.textContent) + 1
            result.textContent = `Computer win the Game `
            result.style.color = " green "
        }
        if( click == "paper" && userId == "stone" ){
            compScore.textContent = parseInt(compScore.textContent) + 1
            result.textContent = `Computer win the Game `
            result.style.color = " green "
        }
        if( click == "scissor" && userId == "paper" ){
            compScore.textContent = parseInt(compScore.textContent) + 1
            result.textContent = `Computer win the Game `
            result.style.color = " green "
        }
        
        // user winning
        if( userId == "stone" && click == "scissor" ){
            userScore.textContent = parseInt(userScore.textContent) + 1
            result.textContent = `User win the Game `
            result.style.color = "darkblue"
        }
        if( userId == "paper" && click == "stone" ){
            userScore.textContent = parseInt(userScore.textContent) + 1
            result.textContent = `User win the Game `
            result.style.color = "darkblue"
        }
        if( userId == "scissor" && click == "paper" ){
            userScore.textContent = parseInt(userScore.textContent) + 1
            result.textContent = `User win the Game `
            result.style.color = "darkblue"
        }
        
        let count  = 4;
        const setIn = setInterval( () => {
            count--
            restart.style.fontSize = "1.5em"
            restart.style.textAlign = "center"
            
            restart.textContent = ` The Game will restart in ${count}`;
            if( count == 0 ){
                clearInterval(setIn)
                result.textContent = "Play the game"
                result.style.color = "black"
                restart.textContent = ""
                document.querySelector(`#${click}` ).style.boxShadow = ""
                document.querySelector(`#${userId}` ).style.boxShadow = ""
            }
        }, 1000 )
        
    }, 200)
    
    
}



