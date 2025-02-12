
const MainDiv = document.querySelector(".table")
MainDiv.style.boxShadow = "0 0 16px black"
MainDiv.style.backdropFilter = "blur(0.9px)"

let heading = document.querySelector("h1")

let input1 = document.createElement("input")
input1.setAttribute( "class", "input1" ) 
input1.setAttribute( "id", "input2" ) 
input1.setAttribute( "placeholder", "Write the value for table" ) 
input1.style.borderRadius = "1em"
input1.style.outline = "none"

let input2 = document.createElement("input")
input2.setAttribute( "class", "input2" ) 
input2.setAttribute( "id", "input2" ) 
input2.setAttribute( "placeholder", "Write the length <=10 for table" ) 
input2.style.borderRadius = "1em"
input1.style.outline = "none"

let btn = document.createElement("button")
btn.setAttribute( "class", "btn" ) 
btn.setAttribute( "id", "btn" )
btn.textContent = "Submit" 
btn.style.borderRadius = "1em"
btn.style.outline = "none"
btn.style.backgroundColor = "#f0ab82"

MainDiv.append(input1, input2, btn)



btn.addEventListener( "click", () => {
    let value1 = input1.value
    let value2 = input2.value
    
    if( value1 == "" ){
        alert( "enter some number " )
        
    }
    if( value2 == "" || value2 < 10 ){
        alert( "enter number equal to 10" )
        
    }
    else{

        MainDiv.removeChild( input1 )
        MainDiv.removeChild( input2 )
        MainDiv.removeChild( btn )

        let tableCont = document.createElement("div")
        tableCont.setAttribute("class", "tablecont")
        MainDiv.append(tableCont)
        
        heading.innerHTML = `Table of ${ value1 }`
        
        for( let i = 1; i <= 10; i++ ){
            
            let tableItem = document.createElement("div")
            tableItem.setAttribute("class", "tableitem")
            tableItem.style.fontSize = "1em"
            tableCont.append( tableItem )
            
            tableItem.innerHTML = `${value1} x ${i} = ${value1 * i}`
            
        }

        let backBtn = document.createElement("button")
        backBtn.setAttribute( "class", "back" )
        MainDiv.append(backBtn)
        backBtn.textContent = "Back"
        backBtn.style.borderRadius = "1em"
        backBtn.style.outline = "none"
        backBtn.style.backgroundColor = "#f0ab82"
        backBtn.style.marginTop = "-3em"


        backBtn.addEventListener( "click", () => {
            window.location.reload()
        } )

        

    }
} )