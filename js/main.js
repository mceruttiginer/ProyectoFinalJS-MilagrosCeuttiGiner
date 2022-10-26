const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const productos = [  
    {id: 1, nombre: "Sorrentinos", precio: 550, variedad: "4 quesos, calabaza y ricota.", img: "https://media.istockphoto.com/photos/mass-of-noodles-of-different-colors-red-yellow-and-green-to-make-picture-id1262751787?s=612x612"},
    {id: 2, nombre: "Tartas", precio: 600, variedad: "Verduras, jamon y queso, atun.", img:"https://media.istockphoto.com/photos/quiche-lorraine-slice-picture-id461801551"},
    {id: 3, nombre: "Fideos", precio: 350, variedad: "puro huevo, verduras", img:"https://media.istockphoto.com/photos/pasta-fettuccine-with-beef-ragout-sauce-in-black-bowl-grey-background-picture-id1215312647?s=612x612"},
    {id: 4, nombre: "Canelones", precio: 450, variedad: "Choclo o jamón y queso", img:"https://media.istockphoto.com/photos/meat-cannelloni-sauce-bechamel-picture-id502641884"}
  ]
let carrito = []

productos.forEach((product) => {
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <h3 class:"variedad">${product.variedad}</h3>
    <p class:"price">${product.precio}
    `;  
    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.className = "comprar"
    comprar.innerText = "comprar"
    content.append(comprar)
    comprar.addEventListener("click", ()=>{
        carrito.push({
           id : product.id,
           img : product.img,
           nombre : product.nombre,
           precio : product.precio,
        })
        saveLocal()
    })


})

verCarrito.addEventListener("click", ()=> {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className ="modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title"> Carrito.</h1>
    `
    modalContainer.append(modalHeader)

    const modalbutton = document.createElement ("h1")
    modalbutton.innerText ="x"
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })


    modalHeader.append(modalbutton)

    carrito.forEach((product) =>{
    
        let carritoContent = document.createElement ("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML= `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}$
        `;  

    modalContainer.append(carritoContent)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-compra"
    totalCompra.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalCompra)
})
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito))
}

