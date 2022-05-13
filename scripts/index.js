const contenedor = document.getElementById("productoss");
const tablaCarrito = document.getElementById("carritoLista");
const carrito = [];

const productos = [
    {id:1, nombreProducto: "Razer DeathAdder V2", precio: 500, cantidad: 20, img:"img/Producto1.png"},
    {id:2, nombreProducto: "Onikuma CW905", precio: 1000, cantidad: 16, img:"img/Producto2.png"},
    {id:3, nombreProducto: "Redragon King Cobra", precio: 2000, cantidad: 18, img:"img/Producto3.png"},
    {id:4, nombreProducto: "Centrophorus v2", precio: 2500, cantidad: 23, img:"img/Producto4.png"},
    {id:5, nombreProducto: "Storm Elite M988", precio: 750, cantidad: 12, img:"img/Producto5.png"},
    {id:6, nombreProducto: "HP M260 Black", precio: 550, cantidad: 30, img:"img/Producto6.png"},
    {id:7, nombreProducto: "HP M160 RGB", precio: 3000, cantidad: 20, img:"img/Producto7.png"},
    {id:8, nombreProducto: "Soul XM550", precio: 3250, cantidad: 18, img:"img/Producto8.png"},
    {id:9, nombreProducto: "G903", precio: 5000, cantidad: 15, img:"img/Producto9.png"},
];

const armarCard = (item) => {
    return ( `
        <article class="card productos">
            <img src="${item.img}" class="card-img-top" alt="Imagen de un mouse ${item.nombreProducto}">
            <div class="card-body">
                <h2 class="productos__nombre">${item.nombreProducto}</h2>
                <h3 class="productos__nombre">${item.precio}$</h3>
                <h4 class="productos__nombre">Stock: ${item.cantidad}</h4>
                <button onclick=agregarCarrito(${item.id}) class="productos_btn_color ${item.cantidad ? 'btn-primary' : 'btn-secondary'}" ${!item.cantidad ? 'disabled' : '' }><a class="">Agregar</a></button>
            </div>
        </article>`
    );
};

const armarCarrito = (item) => {
    return( `
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.nombreProducto}</td>
        <td>${item.comprados}</td>
        <td>$${item.precio * item.comprados} ($${item.precio})</td>
    </tr>`
    );
};

const cargarProductos = (datos, nodo, agregar) => {
    let acumuladorDos = "";
    datos.forEach((el) => {
        acumuladorDos += agregar ? armarCarrito(el) : armarCard(el);
    })
    nodo.innerHTML = acumuladorDos;
};

const agregarCarrito = (id) => {
    const seleccion = productos.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);

    if(seleccion.cantidad === 0){
        alert("no stock")
    }

    if (busqueda === -1) {
        carrito.push({
            id: seleccion.id,
            nombreProducto: seleccion.nombreProducto,
            precio: seleccion.precio,
            comprados: 1,
        })
        productos[0].cantidad--
        
    } else {
        carrito[busqueda].comprados = carrito[busqueda].comprados + 1
    }
    cargarProductos(carrito, tablaCarrito, true);
};

cargarProductos(productos, contenedor, false);
