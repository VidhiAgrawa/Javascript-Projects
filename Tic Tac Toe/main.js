let choice = localStorage.getItem( "myChoice" )
const grid = document.querySelectorAll(".gdchild")
const winGame = document.querySelector("#wingame")
let arr = []

let b1 = document.querySelector("#box1")
let b2 = document.querySelector("#box2")
let b3 = document.querySelector("#box3")
let b4 = document.querySelector("#box4")
let b5 = document.querySelector("#box5")
let b6 = document.querySelector("#box6")
let b7 = document.querySelector("#box7")
let b8 = document.querySelector("#box8")
let b9 = document.querySelector("#box9")

// element created
let restart = document.querySelector(".restart")
const btn = document.createElement("button")
btn.setAttribute("id" , "btn")
restart.appendChild(btn)
// style
btn.style.backgroundColor = "transparent"
btn.style.fontSize = "1.5em"
btn.style.border = "none"
btn.style.color = "black"

grid.forEach( (e) => {
    e.addEventListener( "click", () => {
        e.textContent = choice;
        choice = ( choice == "X" ) ? "O" : "X";
        arr.push(e.id)
        
        // match draw
        let interval = 0
        if( arr.length == 9 ){
            winGame.textContent = `Match Draw`
            
            // game restart
            let endTime = () => {
                setInterval( () => {
                    interval++;
                    let btn2 = document.querySelector("#btn")
                    btn.textContent = `Game will restart in ${interval}`

                }, 1000 )
            }
            endTime()
            setTimeout( () => {
                window.location.reload()
            },5000 )
        }

        // x win the game
        if( b1.textContent == "X" && b2.textContent == "X" && b3.textContent == "X" ){
            winGame.textContent = "X win the game"
        }
        if( b4.textContent == "X" && b5.textContent == "X" && b6.textContent == "X" ){
            winGame.textContent = "X win the game"
        }
        if( b7.textContent == "X" && b8.textContent == "X" && b9.textContent == "X" ){
            winGame.textContent = "X win the game"
        }
        if( b1.textContent == "X" && b4.textContent == "X" && b7.textContent == "X" ){
            winGame.textContent = "X win the game"
        }
        if( b2.textContent == "X" && b5.textContent == "X" && b8.textContent == "X" ){
            winGame.textContent = "X win the game"
        }
        if( b3.textContent == "X" && b6.textContent == "X" && b9.textContent == "X" ){
            winGame.textContent = "X win the game"
        }
        if( b1.textContent == "X" && b5.textContent == "X" && b9.textContent == "X" ){
            winGame.textContent = "X win the game"
        }
        if( b3.textContent == "X" && b5.textContent == "X" && b7.textContent == "X" ){
            winGame.textContent = "X win the game"
        }

        // game restart when player X is winner
        if( winGame.textContent == "X win the game" ){
            let endTime = () => {
                setInterval( () => {
                    interval++;
                    let btn2 = document.querySelector("#btn")
                    btn.textContent = `Game will restart in ${interval}`

                }, 1000 )
            }
            endTime()
            setTimeout( () => {
                window.location.reload()
            },5000 )
        }

        // O win the game
        if( b1.textContent == "O" && b2.textContent == "O" && b3.textContent == "O" ){
            winGame.textContent = "O win the game"
        }
        if( b4.textContent == "O" && b5.textContent == "O" && b6.textContent == "O" ){
            winGame.textContent = "O win the game"
        }
        if( b7.textContent == "O" && b8.textContent == "O" && b9.textContent == "O" ){
            winGame.textContent = "O win the game"
        }
        if( b1.textContent == "O" && b4.textContent == "O" && b7.textContent == "O" ){
            winGame.textContent = "O win the game"
        }
        if( b2.textContent == "O" && b5.textContent == "O" && b8.textContent == "O" ){
            winGame.textContent = "O win the game"
        }
        if( b3.textContent == "O" && b6.textContent == "O" && b9.textContent == "O" ){
            winGame.textContent = "O win the game"
        }
        if( b1.textContent == "O" && b5.textContent == "O" && b9.textContent == "O" ){
            winGame.textContent = "O win the game"
        }
        if( b3.textContent == "O" && b5.textContent == "O" && b7.textContent == "O" ){
            winGame.textContent = "O win the game"
        }

        // game restart when player O is winner
        if( winGame.textContent == "O win the game" ){
            let endTime = () => {
                setInterval( () => {
                    interval++;
                    let btn2 = document.querySelector("#btn")
                    btn.textContent = `Game will restart in ${interval}`

                }, 1000 )
            }
            endTime()
            setTimeout( () => {
                window.location.reload()
            },5000 )
        }
    } )
} )

