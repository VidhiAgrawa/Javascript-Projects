const main = document.querySelector("main")

const input = document.createElement("input")
input.setAttribute("class", "input")

const char = document.createElement("p")
char.setAttribute("class", "char")
char.textContent = "character"

const sym = document.createElement("p")
sym.setAttribute("class", "sym")
sym.textContent = "Special"

const lower = document.createElement("p")
lower.setAttribute("class", "lower")
lower.textContent = "lower"

const button = document.createElement("button")
button.setAttribute("class", "btn")
button.textContent = "Generate"

let random;
let charRan;

let num = "0123456789"
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower_char = "abcdefghijklmnopqrstuvwxyz"
let special_char = "!@#$&*:;`~_-=+^%"
let realString = ""

button.addEventListener( "click", () => {
    button.style.backgroundColor = "rgb(73 115 149)"
    button.style.color = "white"
    realString += num
    input.value = ""
    realString = new String(realString)
    for( let i = 0 ; i < 9 ; i++ ){
        random = Math.floor( Math.random() * realString.length )
        input.value += realString[random]


        }
    } )
    
    let clicked = false;
    char.addEventListener(  "click", () => {
        clicked = ( clicked == true ) ? false : true
            if( clicked ){
                char.style.color = "red"
                char.style.textDecoration = "underline"
                realString += characters;

        }
    })

    sym.addEventListener( "click", () => {
        clicked = ( clicked == true ) ? false : true
        if( clicked ){
            sym.style.color = "red"
            sym.style.textDecoration = "underline"
            realString += special_char;
        }
    } )

    lower.addEventListener( "click", () => {
        clicked = ( clicked == true ) ? false : true
        if( clicked ){
            lower.style.color = "red"
            lower.style.textDecoration = "underline"
            realString += lower_char;
        }
    } )

const copy = document.createElement("button")
copy.setAttribute("class", "btn2")
copy.innerHTML = "Copy"

copy.addEventListener( "click", () => {
    let click = false
    window.navigator.clipboard.writeText(input.value)
    copy.textContent = "Copied"
    copy.style.backgroundColor = "grey"
    copy.style.color = "white"
} )

    


main.append( input , char, sym, lower, button, copy )
