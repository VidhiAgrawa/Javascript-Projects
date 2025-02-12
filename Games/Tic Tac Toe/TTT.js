// Front
const player1 = document.querySelectorAll("#X")
const player2 = document.querySelectorAll("#O")
const startGame = document.querySelector(".stgame")
const struct = document.querySelector(".struct")

player1.forEach( (element) => {
    element.addEventListener( "click", () => {
        localStorage.setItem("myChoice" , element.id)
        element.style.backgroundColor = "black"
        startGame.addEventListener( "click", () => {           
            startGame.style.backgroundColor = "#114232"          
            setTimeout( () => {
                window.location.href = "TTT.html"
            }, 1000 )

        } )
        
    } )
} )
player2.forEach( (each) => {
    each.addEventListener( "click", () => {
        localStorage.setItem("myChoice" , each.id)
        each.style.backgroundColor = "#074173"
        startGame.addEventListener( "click", () => { 
            startGame.style.backgroundColor = "#163020"          
            setTimeout( () => {
                window.location.href = "TTT.html"
            }, 1000 )

        } )
        
    } )
} )