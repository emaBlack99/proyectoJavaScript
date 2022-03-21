
/*FUNCION PARA VALIDAR EL STOCK*/
agregarAlCarrito('Lorem 1', 2000, 10, 3);
function agregarAlCarrito(nombreDeProducto, precioDeProducto = 0, stockProducto, cantidadPedida) {
    const tieneStock = validarStock(stockProducto, cantidadPedida);

    if (tieneStock) {
     let valorProducto = 2000;
        console.log(valorProducto);
    } else {
        console.log('no tenemos mas');
    }
}


//****************************************************************************************************************************VALIDAR STOCK**************************************************** */

function validarStock(stockProducto, cantidadPedida){
    const tieneStock = (stockProducto> cantidadPedida);
    return tieneStock;

const validarStock2daForma = function (stockProducto, cantidadPedida) {
    const tieneStock = (stockProducto> cantidadPedida);
    return tieneStock;
};
}

//listado de PRODUCTOS con for

const nombresVinos = ['lorem1', 'lorem2', 'lorem3', 'lorem4', 'lorem5'];

for(let i = 0; i < 5; i++) {
   console.log( nombresVinos[i] )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OBJETOS EN ARRAY//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const carrito = []
const productos = [
{id:1, titulo:"Lorem1", precio:1000 },
{id:2, titulo:"Lorem2", precio:1100 },
{id:3, titulo:"Lorem3", precio:1200 },
{id:4, titulo:"Lorem4", precio:1300 },
{id:5, titulo:"Lorem5", precio:1400 },
{id:6, titulo:"Lorem6", precio:1500 },
{id:7, titulo:"Lorem7", precio:1600 },
{id:8, titulo:"Lorem8", precio:1700 },
{id:9, titulo:"Lorem9", precio:1800 },
{id:10, titulo:"Lorem10", precio:1900 },
{id:11, titulo:"Lorem11", precio:2000 },

]

agregarAlCarrito(productos[0]);

productos.forEach(elementoDelArray => {
    console.log(elementoDelArray)
})

////SUMAR TOTAL DEL CARRITO///////////
const totalDelCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);

console.log("Total del carrito = " + totalDelCarrito);



/////////FILTER POR PRECIO/CAT./ETC./////////////////////
/////De Mayor Precio/////////////////////////
const productosDeMayorPrecio = productos.filter((producto) => producto.precio > 1700) ;
console.log(productosDeMayorPrecio)


/////////FILTER POR PRECIO/CAT./ETC./////////////////////
/////////De menor Precio////////////////////
const productosDeMenorPrecio = productos.filter((producto) => producto.precio <= 1400) ;
console.log(productosDeMenorPrecio)


/////////*******FIND  *///codigo buscador

const valorDelBuscador = "Lorem5"
const productoEncontrado = productos.find(
    (producto) => producto.titulo.toUpperCase().trim() === valorDelBuscador.toUpperCase
    ());
    console.log(productoEncontrado);

/////////////DOM///////////////////////////

const divProductos = document.querySelector('#productos')



productos.forEach(element =>{
    let card = document.createElement('div')
    card.className = 'card'
    card.style = "width: 18rem;"
    console.log(card)

    card.innerHTML = `
    
    <div id="vino1">
    <img src="img/etiquetas/8966df5f55a773ed5b1c420a598e7d38.webp ${element.img}" alt="consultorio 1"
        class="galeria__fotos" id="vino">
    <h4 class="text-center${element.titulo}">Lorem</h4>
    <h5 class="text-center"${element.precio}>$2.000</h5>


    <button onclick="agregarAlCarrito('lorem 1', 2000)" class="d-flex justify-conten-center bott-vino">Sumar
        al Carrito</button>

</div>
    `
    divProductos.appendChild(card)
})
