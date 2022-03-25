
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
{id:1, titulo:"Lorem1", precio:1000, stock:20,},
{id:2, titulo:"Lorem2", precio:1100, stock:18},
{id:3, titulo:"Lorem3", precio:1200, stock:15},
{id:4, titulo:"Lorem4", precio:1300, stock:5 },
{id:5, titulo:"Lorem5", precio:1400, stock:50 },
{id:6, titulo:"Lorem6", precio:1500, stock:0 },
{id:7, titulo:"Lorem7", precio:1600, stock:30 },
{id:8, titulo:"Lorem8", precio:1700, stock:2},
{id:9, titulo:"Lorem9", precio:1800, stock:0 },
{id:10, titulo:"Lorem10", precio:1900, stock:1},
{id:11, titulo:"Lorem11", precio:2000, stock:20 },

]



generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `
        
        <div class="card" style="width: 18rem;">
        <img class="card-img-top"
            src="https://media.appbar.com.ar/produc_variant/00000526_0d60a716-0a3c-4c8a-ac4c-8bc066be190e.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};



