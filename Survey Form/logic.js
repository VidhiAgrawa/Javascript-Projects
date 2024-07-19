const input =  document.querySelector(".input")
let main = document.querySelector("main")
const getinput = document.querySelector(".getinput")

// number
const head = document.createElement("h3")
head.setAttribute("class", "head")
head.textContent = "Number :-"

const number = document.createElement("input")
number.setAttribute("type", "text")
number.setAttribute("placeholder", "Number")
number.setAttribute("class", "number")
main.append( number )

// email
const emHead = document.createElement("h3")
emHead.setAttribute("class", "emead")
emHead.textContent = "Email :-"

const email = document.createElement( "input" )
email.setAttribute("type", "text")
email.setAttribute("placeholder", "Email")
email.setAttribute("class", "email")

// address
const addHead = document.createElement("h3")
addHead.setAttribute("class", "addhead")
addHead.textContent = "Address :-"

const address = document.createElement( "input" )
address.setAttribute("type", "text")
address.setAttribute("placeholder", "Address")
address.setAttribute("class", "address")


const btn = document.createElement( "button" )
btn.setAttribute( "class", "btn" )
btn.textContent = "Submit Info"
btn.style.backgroundColor = "#444a4c"
btn.style.color = "white"
main.append( head, number,emHead, email, addHead, address, btn )

let interval = 4
btn.addEventListener( "click", () => {
    let inter = setInterval(() => {
        interval--
        if( interval == 0 ){
            
                // username
                let place = input.value
                let set = localStorage.setItem( "place", `${place}` )
                
                // number
                let num = number.value
                let setNum = localStorage.setItem( "num", `${num}` )
                
                // email
                let mail = email.value
                let setmail = localStorage.setItem( "mail", `${mail}` )
                
                // address
                let add = address.value
                let setadd = localStorage.setItem( "add", `${add}` )
                
                window.location.href = "index1.html"
            }
            btn.innerHTML = `Submitting in ${interval}`

        
        }, 1000);
    } )

