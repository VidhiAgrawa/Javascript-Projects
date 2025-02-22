let main = document.querySelector("main")
console.log(main)

const gridDiv = document.createElement("div")
gridDiv.setAttribute( "class", "gridDiv" )

// product image 
const gridImgDiv1 = document.createElement("div")
gridImgDiv1.setAttribute( "class", "gridImgDiv1" )

const prodImg = document.createElement("img")
prodImg.setAttribute("class", "prodImg")

let get = localStorage.getItem( "productImage" )
prodImg.src = `${get}`

gridImgDiv1.appendChild( prodImg )
// product image ended
// product details
const gridDiv2 = document.createElement("div")
gridDiv2.setAttribute( "class", "gridDiv2" )
// name
const ProdName = document.createElement( "div" )
ProdName.setAttribute("id", "prodName")
ProdName.setAttribute("class", "product")
let getName = localStorage.getItem("productname")
ProdName.innerHTML = `${getName}`
// price
const ProdPrice = document.createElement( "div" )
ProdPrice.setAttribute("id", "ProdPrice")
ProdPrice.setAttribute("class", "product")
let getPrice = localStorage.getItem("productPrice")
ProdPrice.innerHTML = `Price : ${getPrice}`
// size
const ProdSize = document.createElement( "div" )
ProdSize.setAttribute("id", "ProdSize")
ProdSize.setAttribute("class", "product")
let getSize = localStorage.getItem("productSize")
ProdSize.innerHTML = `Size : ${getSize}`
// expiry and manufacturing date
const date = document.createElement( "div" )
date.setAttribute( "id", "date" )
date.setAttribute( "class", "product" )

const expDate = document.createElement( "div" )
expDate.setAttribute("id", "expDate")
expDate.setAttribute("class", "product")
let getexp = localStorage.getItem("expDate")
expDate.innerHTML = `Exp-Date : ${getexp}`

const mfdDate = document.createElement( "div" )
mfdDate.setAttribute("id", "mfdDate")
mfdDate.setAttribute("class", "product")
let getmfd = localStorage.getItem("mfdDate")
mfdDate.innerHTML = `Mfd-Date : ${getmfd}`
// description
const desc = document.createElement( "div" )
desc.setAttribute("id", "desc")
desc.setAttribute("class", "product")
let getdesc = localStorage.getItem("desc")
desc.innerHTML = `Description : ${getdesc}`
// back to home page
const btn = document.createElement( "div" )
btn.setAttribute("class", "btn")
// button 
const button = document.createElement( "button" )
button.setAttribute( "id", "button" )
button.innerHTML = `Back -)`

let intervalNum = 4
button.addEventListener( "click", () => {
    let interval = setInterval( () => {
        intervalNum--
        button.innerHTML = `Back -)${intervalNum}`
        if( intervalNum == 0 ){
            window.location.href = `index.html`
            
        }
    }, 1000 )
} )

btn.appendChild(button)
date.append( mfdDate, expDate )
gridDiv2.append( ProdName, ProdPrice, ProdSize, date, desc, btn )
gridDiv.append( gridImgDiv1, gridDiv2 )
main.append( gridDiv )
