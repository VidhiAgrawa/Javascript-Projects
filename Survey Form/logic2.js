const main = document.querySelector( "main" )

const dataInfo = document.createElement("h1")
dataInfo.innerHTML = "Collected Data"

// username
const inputValue = document.createElement("div")
inputValue.setAttribute( "class", "inputvalue" )

let get = localStorage.getItem( "place" )
inputValue.innerHTML = `Username :- ${get}`

// number
const numValue = document.createElement("div")
inputValue.setAttribute( "class", "numvalue" )

let getNum = localStorage.getItem( "num" )
numValue.innerHTML = `Number :- ${getNum}`

// email
const emailValue = document.createElement("div")
emailValue.setAttribute( "class", "emailvalue" )

let getmail = localStorage.getItem( "mail" )
emailValue.innerHTML = `Email :- ${getmail}`

// address
const addValue = document.createElement("div")
addValue.setAttribute( "class", "addvalue" )

let getadd = localStorage.getItem( "add" )
addValue.innerHTML = `Address :- ${getadd}`

// back
const btn = document.createElement("button")
btn.setAttribute( "class", "btn" )
btn.textContent = "Back"
btn.style.color = "white"
btn.style.backgroundColor = "#444a4c"

btn.addEventListener( "click", () => {
    window.location.href = "index.html"
} )



main.append(dataInfo, inputValue, numValue, emailValue, addValue, btn)