
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

//