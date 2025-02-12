const main = document.querySelector("main")

let input = document.createElement("input")
input.setAttribute( "class", "input" )

const grid = document.createElement("div")
grid.setAttribute( "class", "grid" )
main.append( input, grid )

for (let i = 0; i < 20; i++) {
    const gridBox = document.createElement("button");
    gridBox.setAttribute( "id", `gridbox${i}` )
    gridBox.setAttribute( "class", "gridbox" )
    grid.append( gridBox )  
}
let gridBox1 = document.querySelector("#gridbox0")
gridBox1.textContent = "AC"
 
let gridBox2 = document.querySelector("#gridbox1")
gridBox2.textContent = "%"
 
let gridBox3 = document.querySelector("#gridbox2")
gridBox3.innerHTML = `<i class="fa-solid fa-delete-left"></i>`
 
let gridBox4 = document.querySelector("#gridbox3")
gridBox4.textContent = "/"
 
let gridBox5 = document.querySelector("#gridbox4")
gridBox5.textContent = "7"
 
let gridBox6 = document.querySelector("#gridbox5")
gridBox6.textContent = "8"
 
let gridBox7 = document.querySelector("#gridbox6")
gridBox7.textContent = "9"
 
let gridBox8 = document.querySelector("#gridbox7")
gridBox8.textContent = "*"
 
let gridBox9 = document.querySelector("#gridbox8")
gridBox9.textContent = "4"
 
let gridBox10 = document.querySelector("#gridbox9")
gridBox10.textContent = "5"
 
let gridBox11 = document.querySelector("#gridbox10")
gridBox11.textContent = "6"
 
let gridBox12 = document.querySelector("#gridbox11")
gridBox12.textContent = "-"
 
let gridBox13 = document.querySelector("#gridbox12")
gridBox13.textContent = "1"
 
let gridBox14 = document.querySelector("#gridbox13")
gridBox14.textContent = "2"
 
let gridBox15 = document.querySelector("#gridbox14")
gridBox15.textContent = "3"
 
let gridBox16 = document.querySelector("#gridbox15")
gridBox16.textContent = "+"
 
let gridBox17 = document.querySelector("#gridbox16")
gridBox17.textContent = "00"
 
let gridBox18 = document.querySelector("#gridbox17")
gridBox18.textContent = "0"
 
let gridBox19 = document.querySelector("#gridbox18")
gridBox19.textContent = "."

let gridBox20 = document.querySelector("#gridbox19")
gridBox20.textContent = "="
gridBox20.style.background = "#ff9800"
 