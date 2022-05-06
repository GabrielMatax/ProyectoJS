const productos = [
    {nombreProducto: "Razer DeathAdder V2", precio: 500, cantidad: 2},
    {nombreProducto: "Onikuma CW905", precio: 1000, cantidad: 16},
    {nombreProducto: "Redragon King Cobra", precio: 2000, cantidad: 8},
    {nombreProducto: "Centrophorus v2", precio: 2500, cantidad: 23},
    {nombreProducto: "Storm Elite M988", precio: 750, cantidad: 12},
    {nombreProducto: "HP M260 Black", precio: 550, cantidad: 30},
];
productos.push({nombreProducto: "HP M160 RGB", precio: 3000, cantidad: 20})
productos.push({nombreProducto: "Soul XM550", precio: 3250, cantidad: 18})
productos.push({nombreProducto: "G903", precio: 5000, cantidad: 15})

let contador = 0;
let acumulador = 0;
let respuesta = "si";

for(let i = 0; i < productos.length ; i++){
    console.log(`${i+1}_ Producto: ${productos[i].nombreProducto} Precio: ${productos[i].precio} Stock: ${productos[i].cantidad}`);
}

function calcularIva(producto){
    let iva = producto * 0.21;
    let precioFinal =  producto + iva;
    return precioFinal;
}

function sumaCarrito(producto){
    let a = producto -1;
    acumulador = acumulador + calcularIva(productos[a].precio);
    productos[a].cantidad--;
}

while(respuesta === "si"){

    let producto = parseInt(prompt("Ingresa el numero del producto que deseas (1, 2 ,3...,9) -1 para filtrar por precio -2 para buscar por nombre")); 

//Si no hay mas stock de un producto te da una nueva lista
    productos.forEach(objetoProductos =>{
        if(objetoProductos.cantidad === 0){

            productos.splice(producto-1,producto);

            for(let i = 0; i < productos.length ; i++){
                console.log(`${i+1}. Producto: ${productos[i].nombreProducto} Precio: ${productos[i].precio} Stock: ${productos[i].cantidad}`);
            }
            alert("No hay mas stock");
        }
    })

// Filtro de precios    
    if(producto === -1){
        let consulta = prompt("ingrese el precio maximo que quiere filtrar");
        let resultado = productos.filter((el) => el.precio <= consulta)
        resultado.forEach(objetoResultado =>{
        console.log(`${objetoResultado.nombreProducto} ${objetoResultado.precio}`);
        })
        continue;
    }

// Encontrar producto
    if(producto === -2){
        let consultaDos = prompt("ingrese el producto que quiere encontrar");
        let resultadoDos = productos.find((elem) => elem.nombreProducto === consultaDos)
        console.log(`Nombre: ${resultadoDos.nombreProducto} Precio: ${resultadoDos.precio} Stock disponible: ${resultadoDos.cantidad}`);
        continue;
    }
    
    if(producto > 9 || producto < -2 || producto === 0 ){
        alert("dato erroneo");
        break;
    }else if(producto === 1,9){
        sumaCarrito(producto);
    }

    contador++;

// Te informa que productos vas agregando 
    let carritoa = productos.slice(producto -1,producto);
    console.log(`Agregó al carrito ${carritoa[0].nombreProducto}`);

    respuesta = prompt("¿Desea agregar otro producto?");  
}

// Lista actualizada al finalizar
for(let i = 0; i < productos.length ; i++){
    console.log(`${i+1}- Producto: ${productos[i].nombreProducto} Precio: ${productos[i].precio} Stock: ${productos[i].cantidad}`);
}

alert(`La cantidad de produtos que agrego es ${contador} y el total de su compra es de ${acumulador}`);