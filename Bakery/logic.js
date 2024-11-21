const header = document.querySelector("header")

// navbar

const navBar = document.createElement("div")
navBar.setAttribute("class", "navbar")

const navItems = document.createElement("div")
navItems.setAttribute("class", "navitems")

// navitem1
const navIt1 = document.createElement("div")
navIt1.setAttribute("class", "navit1")

const logo = document.createElement("img")
logo.setAttribute("class", "img")
logo.setAttribute("src", "https://png.pngtree.com/png-clipart/20230301/ourmid/pngtree-bakery-logo-baker-illustration-png-image_6625246.png")

const menu = document.createElement("div")
menu.setAttribute("class", "menu")
menu.innerHTML = `<i class="fa-solid fa-bars"></i> Menu`
menu.style.fontSize = "larger"

navIt1.append( logo, menu )

// navitem2
const navIt2 = document.createElement("div")
navIt2.setAttribute("class", "navit1")

const input = document.createElement("input")
input.setAttribute("placeholder", "Search Here")

const search = document.createElement("div")
search.setAttribute("class", "search")
search.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`

navIt2.append( input, search )

// navitem3
const navIt3 = document.createElement("div")
navIt3.setAttribute("class", "navit1")
navIt3.setAttribute("id", "navit3")

const login = document.createElement("div")
login.setAttribute("class", "login")
login.innerHTML = `<i class="fa-regular fa-user"></i>  Login`
login.style.fontSize = "larger"


const cart = document.createElement("div")
cart.setAttribute("class", "cart")
cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>  Cart`
cart.style.fontSize = "larger"

navIt3.append( login, cart )
navItems.append( navIt1, navIt2, navIt3 )
navBar.append( navItems )
header.appendChild( navBar )
// navbar ends here

// main starts with adding pics

const main =  document.querySelector("main")

const mainBody = document.createElement("div")
mainBody.setAttribute("class", "mainbody")

const pic = document.createElement("img")
pic.setAttribute("class", "pic")
pic.setAttribute("src", "https://png.pngtree.com/thumb_back/fw800/background/20231228/pngtree-artistic-bakery-shop-sale-banner-with-hand-drawn-textures-image_13885748.png")

const writen = document.createElement("div")
writen.setAttribute("class", "writen")

mainBody.append( pic, writen )
main.append(mainBody)
// main pic ends here

// menu chart

const menuChart = document.createElement("div")
menuChart.setAttribute("class","menuchart")
main.append(menuChart) 
// menu heading
const menuHead = document.createElement("h1")
menuHead.setAttribute("class", "menuhead")
menuHead.textContent = "--: Menu Chart :--"

// meenu grid
const menuGrid = document.createElement("div")
menuGrid.setAttribute("class", "menugrid")
menuChart.append(menuHead, menuGrid)

const menuGrid1 = document.createElement("div")
menuGrid1.setAttribute("class", "menugrid1")

const menuImg1 = document.createElement("img")
menuImg1.setAttribute("class", "menuimg1")
menuImg1.setAttribute("src", "https://img.freepik.com/premium-vector/cake-menu-pink-shop_62298-3.jpg")
menuGrid1.appendChild(menuImg1)

const menuGrid2 = document.createElement("div")
menuGrid2.setAttribute("class", "menugrid1")

const menuImg2 = document.createElement("img")
menuImg2.setAttribute("class", "menuimg1")
menuImg2.setAttribute("src", "https://marketplace.canva.com/EAFY3UL9SSg/1/0/1131w/canva-pastel-colors-minimalist-bakery-menu-wOMsYH0Hk9A.jpg")
menuGrid2.appendChild(menuImg2)

const menuGrid3 = document.createElement("div")
menuGrid3.setAttribute("class", "menugrid1")

const menuImg3 = document.createElement("img")
menuImg3.setAttribute("class", "menuimg1")
menuImg3.setAttribute("src", "https://marketplace.canva.com/EAFzjW6WXDs/1/0/1131w/canva-grey-and-brown-watercolor-pastries-dessert-menu-PUkeeAro_68.jpg")
menuGrid3.appendChild(menuImg3)

const menuGrid4 = document.createElement("div")
menuGrid4.setAttribute("class", "menugrid1")

const menuImg4 = document.createElement("img")
menuImg4.setAttribute("class", "menuimg1")
menuImg4.setAttribute("src", "https://marketplace.canva.com/EAFLQp6iguQ/1/0/1131w/canva-pink-cream-cute-bakery-dessert-menu-9kQvHuAG2OM.jpg")
menuGrid4.appendChild(menuImg4)

menuGrid.append(menuGrid1, menuGrid2, menuGrid3, menuGrid4)
// menuchart finished

// special dishes

const special = document.createElement("div")
special.setAttribute("class", "special")
main.appendChild(special)
// special heading
const spHead = document.createElement("h1")
spHead.setAttribute("class", "sphead")
spHead.innerHTML = `<span class="S">S</span>pecial <span class="S">D</span>essert :-`
spHead.style.paddingLeft = "2em"

// special item 1
const specialIt1 = document.createElement("div")
specialIt1.setAttribute("class", "specialit1")
specialIt1.style.marginTop = "2em"

const itContent1 = document.createElement("div")
itContent1.setAttribute("class", "itcontent1")
itContent1.style.display = "flex"
itContent1.style.flexDirection = "column"
itContent1.style.alignItems = "center"

const contHead = document.createElement("h2")
contHead.setAttribute("class", "conthead")
contHead.innerHTML = `Belgian Chocolate <br> <span class = " truffle">Truffle</span>`

const contDes = document.createElement("div")
contDes.setAttribute("class", "contdies")
contDes.style.textAlign = "center"
contDes.style.marginTop = "2em"
contDes.innerHTML = "This isn't just an ordinary chocolate cake – <br> It's an authentic taste of Belgium.<br> Proudly crafted with genuine 55% Belgium<br> couverture chocolate, this SMOOR hero <br>is an eggless delight with rich dark chocolate <br>sponge generously layered with <br>authentic dark chocolate ganache."

itContent1.append( contHead, contDes )


const itContent2 = document.createElement("div")
itContent2.setAttribute("class", "itcontent2")
itContent2.style.display = "flex"
itContent2.style.flexDirection = "column"
itContent2.style.alignItems = "center"

const image1 = document.createElement("img")
image1.setAttribute("class", "image1")
image1.setAttribute("src", "https://www.bigbasket.com/media/uploads/p/xxl/40201822-2_4-fresho-signature-belgium-chocolate-truffle-cake.jpg")

const price1 = document.createElement("div")
price1.setAttribute("class", "price1")
price1.textContent = "$240"
price1.style.fontSize = "xx-large"
price1.style.marginTop = "0.5em"

itContent2.append( image1, price1 )
specialIt1.append( itContent1, itContent2 )

// special item 2
const specialIt2 = document.createElement("div")
specialIt2.setAttribute("class", "specialit2")

const specialBox = document.createElement("div")
specialBox.setAttribute("class", "specialbox")

const boxCont1 = document.createElement("div")
boxCont1.setAttribute("class", "boxcon1")
boxCont1.style.display = "flex"
boxCont1.style.flexDirection = "column"
boxCont1.style.alignItems = "center"

const image2 = document.createElement("img")
image2.setAttribute("class", "image2")
image2.setAttribute("src", "https://teakandthyme.com/wp-content/uploads/2023/09/mini-chocolate-tarts-DSC_4947-1x1-1200.jpg")

const price2 = document.createElement("div")
price2.setAttribute("class", "price2")
price2.textContent = "$95"
price2.style.fontSize = "xx-large"
price2.style.marginTop = "0.5em"

boxCont1.append( image2, price2 )

const boxCont2 = document.createElement("div")
boxCont2.setAttribute("class", "boxcon2")
boxCont2.style.display = "flex"
boxCont2.style.flexDirection = "column"
boxCont2.style.alignItems = "center"

const contHead2 = document.createElement("h2")
contHead2.setAttribute("class", "conthead2")
contHead2.innerHTML = `Mini Chocolate <br> <span class = " truffle">Tarts</span>`

const contDes2 = document.createElement("div")
contDes2.setAttribute("class", "contdies2")
contDes2.style.textAlign = "center"
contDes2.style.marginTop = "2em"
contDes2.innerHTML = "Chocolate tart, also known as chocolate <br>cream pie, is a dessert consisting of <br>dark chocolate, cream and eggs, beaten<br> together, poured into a crisp, sweetened<br> pastry shell and baked until firm. It is considered<br> a form of custard tart because it includes<br> an egg-based filling."

boxCont2.append( contHead2, contDes2 )
specialBox.append( boxCont1, boxCont2 )
specialIt2.appendChild(specialBox)
special.append( spHead, specialIt1, specialIt2 )

// category
const category = document.createElement("div")
category.setAttribute("class", "category")
main.appendChild(category)

// category head
const categoryHead = document.createElement("h1")
categoryHead.style.marginTop = "1em"
categoryHead.setAttribute("class", "categoryhead")
categoryHead.style.paddingLeft = "2em"
categoryHead.innerHTML = `<span class="S">C</span>ategory :-`

// category grid items
const categoryGrid = document.createElement("div")
categoryGrid.setAttribute("class", "categorygrid")
// item
for( i = 1; i <= 5; i++ ){
    const cateItems = document.createElement("div")
    cateItems.setAttribute("id", `cateitems${i}`)
    cateItems.setAttribute("class", `cateitems`)
    categoryGrid.append(cateItems)
}

// fetching item for category
async function getFile(){
    try {
        let url = await fetch("file.json")
        let data = await url.json()

        let items = document.querySelectorAll(".cateitems")

        items.forEach( (each, i) => {
            const imgg = document.createElement("img")
            imgg.setAttribute("class", "imgg")
            imgg.src = data[i].src

            const text = document.createElement("div")
            text.setAttribute("class", "text")
            text.style.fontSize = "larger"
            text.textContent = data[i].name

            each.append( imgg, text )

        } )
    } 
    catch (error) {
      console.log(error)  
    }
}
getFile()
category.append( categoryHead, categoryGrid )

//  category section completed

// some more products
const product = document.createElement("div")
product.setAttribute("class", "product")
main.append(product)
// product heading
const productHead = document.createElement("h1")
productHead.setAttribute("class", "producthead")
productHead.innerHTML = `Get Dilicious Delight :-`
productHead.style.paddingLeft = "2em"
productHead.style.marginTop = "0.5em"
// product grid
const productGrid = document.createElement("div")
productGrid.setAttribute("class", "productgrid")

for( i = 1; i <= 7; i++ ){
    const productItem = document.createElement("div")
    productItem.setAttribute("id", `productitem${i}`)
    productItem.setAttribute("class", "productitem")
    productGrid.append( productItem )
}
    const Item1 = document.querySelector("#productitem1")
    const Item2 = document.querySelector("#productitem2")
    const Item3 = document.querySelector("#productitem3")
    const Item4 = document.querySelector("#productitem4")

    // fetching data
async function fetchData(){
    try {
        let url = await fetch("data.json") 
        let data = await url.json()

        let item = document.querySelectorAll(".productitem")

        item.forEach( (each, i) => {
            
            let productImage = document.createElement("img")
            productImage.setAttribute("class", "productimage")
            productImage.src = data[i].images
            
            let productPrice = document.createElement("div")
            productPrice.setAttribute("class", "productprice")
            productPrice.innerHTML = data[i].price

            let productName = document.createElement("div")
            productName.setAttribute("class", "productname")
            productName.innerHTML = data[i].title

            let liked = document.createElement("div")
            liked.setAttribute("class", "liked")
            liked.innerHTML = `<i class="fa-regular fa-heart" style="color: #000000;"></i> Like`
            
            each.append(productImage, productPrice, productName, liked)
            
            let show = false;
            
            liked.addEventListener( "click", () => {
                show = (show) ? false : true
                if( show ){
                    liked.style.color = "red"
                    liked.innerHTML = `<i class="fa-solid fa-heart" style="color: #ff0000;"></i> Liked`
                }
                else{
                    liked.style.color = "black"
                    liked.innerHTML = `<i class="fa-regular fa-heart" style="color: #000000;"></i> Like`
                }
            } )

        } ) 
        
        
        
        
    } 
    catch (error) {
        console.log(error)
    }
}
fetchData()

product.append( productHead, productGrid )
// product part finished    main finished

// footer starts
const footer = document.createElement("div")
footer.setAttribute( "class", "footer" )
main.append(footer)

const footerBlock = document.createElement("div")
footerBlock.setAttribute( "class", "footerblock" )

for( i = 1; i <= 20; i++ ){
    let footercon = document.createElement("div")
    footercon.setAttribute("class", "footercon")
    footercon.textContent = "Be a great Person"
    footercon.setAttribute( "id", `footercon${i}` )
    footerBlock.append(footercon)
    footercon.style.color = "white"
}
footer.append(footerBlock)

// cart



