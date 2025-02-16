let main = document.querySelector("main")
console.log(main)

const prodImg = document.createElement("img")
prodImg.setAttribute("class", "prodImg")

let get = localStorage.getItem( "productImage" )
prodImg.src = `${get}`

main.append(prodImg)