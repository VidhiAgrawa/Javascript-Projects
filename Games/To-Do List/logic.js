let input = document.querySelector(".todoinput")
let btn = document.querySelector("button")

let arr = []

btn.addEventListener( "click", () => {
    let value = input.value
    const todo = document.createElement("div")
    todo.setAttribute( "class", "todo" )

    document.querySelector("main").append( todo, reload )

    const todoText = document.createElement("div")
    todoText.setAttribute( "class", "todotext" )
    
    let cross = document.createElement("div")
    cross.setAttribute( "class", "cross" )

    if( value == "" ){
        alert("Write some To-Do")
    }
    if( arr.includes(value) ){
        alert( "To-Do is already present" )
    }
    else{
        arr.push(value)
        
        todoText.innerHTML = ` <i class="fa-solid fa-chevron-right"></i> ${value}`
        
        cross.innerHTML = `<i class="fa-solid fa-ban"></i>`

        todo.append( todoText, cross )

        cross.addEventListener( "click", () => {
            document.querySelector("main").removeChild(todo)
        } )
        
    } 
    
} )

const reload = document.createElement( "div" )
reload.setAttribute( "class", "reload" )
reload.textContent = "Reload"

reload.addEventListener( "click", () => {
    window.location.reload()
} )
