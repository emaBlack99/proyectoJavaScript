
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