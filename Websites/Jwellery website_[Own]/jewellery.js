// login page

let login = document.querySelector(".login")
// let body = document.querySelector("body")

let show = false

login.addEventListener( "click", () => {
    show = ( show ) ? false : true
    // if show is true
    if( show ){
        let loginPage = document.createElement("div")
        console.log(loginPage)
        loginPage.setAttribute("class", "loginpage")
        login.appendChild(loginPage)
        loginPage.style.zIndex = "1"
        loginPage.style.gap = "2em"
        loginPage.style.borderRadius = "4em"
        document.querySelector("main").style.filter = "blur(5px)"
        
        let para = document.createElement("p")
        para.textContent = "Enter username"
        para.style.marginTop = "1em"
        para.style.textAlign = "center"
        loginPage.appendChild(para)
        
        let input2 = document.createElement("input")
        input2.setAttribute("class", "place")
        input2.placeholder = "Username"
        loginPage.appendChild(input2)
        
        let input3 = document.createElement("input")
        input3.setAttribute("class", "place")
        input3.placeholder = "Enter your Number"
        loginPage.appendChild(input3)
        
        let logBtn = document.createElement("button")
        logBtn.setAttribute("class", "logbtn")
        console.log(logBtn)
        logBtn.textContent = "LogIn"
        logBtn.style.backgroundColor = "transparent"
        
        loginPage.appendChild(logBtn)
        
        document.querySelector(".logbtn").addEventListener( "click", () => {

            document.querySelector(".logbtn").style.backgroundColor = "white"
            document.querySelector(".logbtn").style.Color = "black"
            
            document.querySelector(".login").removeChild(document.querySelector(".loginpage"))
                document.querySelector("main").style.filter = "blur(0px)"
                document.querySelector(".loginpage").removeChild(document.querySelector("p, .place, .logBtn"))
                
            } )
        }    
    } )

    // menu side baar

    let menu = document.querySelector("#menu")

    menu.addEventListener( "click", () => {
        show = ( show ) ? false : true
        if( show ){
            let menuBar = document.createElement("div")
            menuBar.setAttribute("class", "menubar")
            menu.appendChild(menuBar)
            
            let menuGrid = document.createElement("div")
            menuGrid.setAttribute( "class", "menugrid" )
            menuGrid.style.height = "23.6em"
            menuBar.appendChild(menuGrid)

            for( let i = 1; i <= 6; i++ ){
                let menuDet = document.createElement("div")
                menuDet.setAttribute("id", `menudet${i}`)
                menuDet.setAttribute( "class", "det" )
                menuGrid.appendChild(menuDet)
            }
            
            let det1 = document.querySelector("#menudet1")
            let det2 = document.querySelector("#menudet2")
            let det3 = document.querySelector("#menudet3")
            let det4 = document.querySelector("#menudet4")
            let det5 = document.querySelector("#menudet5")
            let det6 = document.querySelector("#menudet6")
            
            det1.textContent = "MENU"
            det1.style.textAlign = "center"
            det1.style.marginTop = "0.8em"
            
            det2.innerHTML = `<i class="fa-regular fa-address-card"></i>  Profile`
            det2.style.marginTop = "1em"
            det3.innerHTML = `<i class="fa-solid fa-gears"></i> Setting`
        
            det4.innerHTML = `<i class="fa-solid fa-circle-info"></i> Help Us`
            
            det5.innerHTML = `<i class="fa-solid fa-user-plus"></i> Sign Up`
        
            det6.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> EXIT`
        
            det6.addEventListener( "click", () => {
            document.querySelector("#menu").removeChild(document.querySelector(".menubar"))
        } )
    }
} )

// cart page

const cart = document.querySelector("#navcontent5")

    cart.addEventListener( "click", () => {
        show = ( show ) ? false : true

        if(show){

            const cartDiv = document.createElement("div")
            cartDiv.setAttribute("class", "cartDiv")
            cartDiv.style.borderRadius = "2em"
            cartDiv.style.backdropFilter = "blur(2em)"
            
            cart.appendChild(cartDiv)
            
            const cartDet1 = document.createElement("div")
            cartDet1.setAttribute("class", "cartdet1")
            cartDet1.style.height = "3em"
            // cartDet1.style.fontSize = "2em"
            cartDet1.innerHTML = `<span class="span">CART</span>`
            
            const cartExit = document.createElement("span")
            cartExit.setAttribute("class", "exitp")
            cartExit.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> EXIT`
            cartDet1.appendChild(cartExit)
            
            const cartDet2 = document.createElement("div")
            cartDet2.setAttribute("class", "cartdet2")
            cartDet2.style.height = "14em"
            cartDet2.style.width = "100%"
            cartDet2.style.fontSize = "2em"
            cartDet2.textContent = "Cart is empty please Add items"
            
            cartDiv.append( cartDet1, cartDet2 )
            
            cartExit.addEventListener("click", () => {
                document.querySelector("#navcontent5").removeChild(document.querySelector(".cartDiv"))
            })
            
        }
        
    } )

    // different category

    const category = document.createElement("div")
    category.setAttribute("class", "category")
    document.querySelector(".main").appendChild(category)

    const categoryContent = document.createElement("h1")
    categoryContent.setAttribute("class", "categorycontent")
    categoryContent.textContent = `Category:-`
    categoryContent.style.color = "black"
    categoryContent.style.marginLeft = "1em"
    
    const cateGrid = document.createElement("div")
    cateGrid.setAttribute("class", "categrid")

    category.append(categoryContent, cateGrid)

    const cateGbox = document.createElement("div")
    cateGbox.setAttribute("class", "categbox")
    cateGrid.appendChild(cateGbox)

    for( let i = 1; i <= 6; i++ ){
        let cateDiv = document.createElement("div")
        cateDiv.style.borderRadius = "2em"
        cateDiv.setAttribute("id", `catediv${i}`)
        cateDiv.setAttribute("class", "catediv")
        cateGbox.appendChild(cateDiv)
    }

    let cateDiv1 = document.querySelector("#catediv1")
    let cateDiv2 = document.querySelector("#catediv2")
    let cateDiv3 = document.querySelector("#catediv3")
    let cateDiv4 = document.querySelector("#catediv4")
    let cateDiv5 = document.querySelector("#catediv5")
    let cateDiv6 = document.querySelector("#catediv6")

// fetching items

    async function getData(){
        try {
            let url2 = await fetch("category.json")
            let data2 = await url2.json()

            let cate = document.querySelectorAll(".catediv")

            cate.forEach( (each, i) => {

                let image = document.createElement("img")
                image.setAttribute("class", "image2")
                image.style.height = "7em"
                image.style.background = "red"
                image.src = data2[i].src 

                let naam = document.createElement("div")
                naam.setAttribute("class", "naam")
                naam.textContent = data2[i].Name
                naam.style.fontSize = "17px"

                each.append(image, naam)
            } )

        } catch (error) {
            console.log(error)
        }
    }
    getData()

// jewellery items

    show = false
    show = ( show ) ? false : true
    if(show){

        const jewelItems = document.createElement("div")
        jewelItems.setAttribute("class", "jewelitems")
        document.querySelector(".main").appendChild(jewelItems)
        
        const itContent = document.createElement("h1")
        itContent.setAttribute("class", "itcontent")
        itContent.textContent = `Get more Items`
        itContent.style.color = "black"
        itContent.style.marginLeft = "1em"
        
        let GridCo = document.createElement("div")
        GridCo.setAttribute("class", "gridco")
        
        let itGrid = document.createElement("div")
        itGrid.setAttribute("class", "itgrid")
        GridCo.appendChild(itGrid)
        jewelItems.append(itContent, GridCo)
        
        for( let i = 1; i <= 12; i++ ){
            let gridDiv = document.createElement("div")
            gridDiv.style.borderRadius = "2em"
            gridDiv.setAttribute("id", `griddiv${i}`)
            gridDiv.setAttribute("class", "griddiv")
            itGrid.appendChild(gridDiv)
        }

        let gridDiv1 = document.querySelector("#griddiv1")
        let gridDiv2 = document.querySelector("#griddiv2")
        let gridDiv3 = document.querySelector("#griddiv3")
        let gridDiv4 = document.querySelector("#griddiv4")
        let gridDiv5 = document.querySelector("#griddiv5")
        let gridDiv6 = document.querySelector("#griddiv6")
        let gridDiv7 = document.querySelector("#griddiv7")
        let gridDiv8 = document.querySelector("#griddiv8")
        let gridDiv9 = document.querySelector("#griddiv9")
        let gridDiv10 = document.querySelector("#griddiv10")
        let gridDiv11 = document.querySelector("#griddiv11")
        let gridDiv12 = document.querySelector("#griddiv12")

// fetching items

        async function getFile(){
            try {
                let url = await fetch("jewellery.json")
                let data = await url.json()
                
                let con = document.querySelectorAll(".griddiv")

                con.forEach( (each, i) => {

                    let discription = document.createElement("div")
                    discription.setAttribute("class", "discription")
                    discription.innerHTML = `<i class="fa-solid fa-info"></i>`
                    discription.style.color = "#66604e"

                    let img = document.createElement("img")
                    img.setAttribute("class", "image")
                    img.style.height = "7em"
                    img.src = data[i].src
                    
                    let name = document.createElement("div")
                    name.setAttribute("class", "name")
                    name.style.fontSize = "20px"
                    name.textContent = data[i].Name
                    
                    let price = document.createElement("div")
                    price.setAttribute("class", "price")
                    price.textContent = data[i].Price
                    
                    let date = document.createElement("div")
                    date.setAttribute("class", "date")
                    date.textContent = data[i].Date

                    const btn = document.createElement("button")
                    btn.setAttribute("class", "btn")
                    btn.style.height = "2.2em"
                    btn.style.width = "7em"
                    btn.style.fontSize = "15px"
                    btn.style.background = "#ffc107"
                    btn.textContent = "Add to Cart"

                    each.append( discription, img, name, price, date, btn )

// discription box

                    discription.addEventListener("click", () => {

                        let cateInfo = document.createElement("div")
                        cateInfo.setAttribute("class", "cateinfo")
                        document.querySelector(".main").appendChild(cateInfo)
                        
                        let info = document.createElement("div")
                        info.setAttribute("class", "info")
                        cateInfo.appendChild(info)
                        info.style.position = "absolute"
                        info.style.backgroundColor = "#E6B9A6"
                        
                        let infoIt = document.createElement("div")
                        infoIt.setAttribute("class", "infoit")
                        infoIt.textContent = "Discription"
                        infoIt.style.height = "2em"
                        infoIt.style.fontSize = "25px"
                        
                        let infoIt2 = document.createElement("div")
                        infoIt2.setAttribute("class", "infoit2")
                        infoIt2.style.height = "23em"
                        infoIt2.style.width = "40em"
                        
                        let infoCon1 = document.createElement("img")
                        infoCon1.setAttribute("class", "infocon1")
                        infoCon1.style.height = "65%"
                        infoCon1.style.width = "40%"
                        infoCon1.style.boxShadow = "0 0 10px"
                        infoCon1.style.border = "2px solid #a78f47"
                        infoCon1.src = data[i].src
                        
                        let infoCon2 = document.createElement("div")
                        infoCon2.setAttribute("class", "infocon2")
                        infoCon2.innerHTML = `${data[i].Name} <br><br> Price:-  ${data[i].Price} <br> <br> Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit. <br>Iure molestiae ducimus<br> voluptatem esse quisquam,<br> eos architecto eum eius <br>quibusdam neque voluptas. `
                        infoCon2.style.fontSize = "20px"
                        
                        infoIt2.append( infoCon1, infoCon2 )
                        
                        let infoExit = document.createElement("button")
                        infoExit.setAttribute("class", "infoexit")
                        infoExit.textContent = "Exit"
                        infoExit.style.fontSize = "2em"

                        info.append( infoIt, infoIt2, infoExit )
                        
                        infoExit.addEventListener( "click", () => {
                            document.querySelector(".main").removeChild(document.querySelector(".cateinfo"))
                        } )
                        
                    }) 
                   
                    
                
                } )
            } 
            catch (error) {
                console.log(error)
            }    
        }
        getFile()        
    }



 