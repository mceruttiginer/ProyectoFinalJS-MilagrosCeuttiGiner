const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = doment.getElementById("modal-container")
const productos = [  
    {id: 1, nombre: "Sorrentinos", precio: 550, variedad: "4 quesos, calabaza, ricota", img:""},
    {id: 2, nombre: "Tartas", precio: 600, variedad: "verduras, jamon y queso, atun", img:""},
    {id: 3, nombre: "Fideos", precio: 350, variedad: "puro huevo, verduras", img:""},
    {id: 4, nombre: "Canelones", precio: 450, variedad: "choclo, jamón y queso", img:""}
  ]
let carrito = []

productos.forEach((product) => {
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class:"price">${product.precio}
    `;  
    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.className = "comprar"
    comprar.innerText = "Comprar"
    content.append(comprar)
    comprar.addEventListener("click", ()=>{
        carrito.push({
           id: product.id,
           img: product.img,
           nombre: product.nombre,
           precio: product.precio
        })
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

    const modalButton = document.createElement ("h1")
    modalButton.innerText ="x"
    modalButton.className = "modal-header-button"

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })


    modalHeader.append(modalButton)

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

