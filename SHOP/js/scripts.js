const agregarAlCarrito = (idProducto) => {
     const productoAgregado = productos.find(producto => producto.id === idProducto)
    carrito.push(productoAgregado);
    document.getElementById("cantidad-prod").innerHTML = carrito.length;
    console.log(carrito)
    };

const carrito = [];

const productos = [ 
    {id:1, titulo: "Lorem 1", precio:999, type:"tinto" , stock:0, imagen:'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201610/11/00118738800616____2__600x600.jpg'},
    {id:2, titulo: "Lorem 2", precio:222, type:"tinto" , stock:1, imagen:'https://images.vivino.com/thumbs/fNc_jma0QWKDTyaII2rr9Q_pb_600x600.png' },
    {id:3, titulo: "Lorem 3", precio:111, type:"tinto" , stock:5, imagen:'https://www.hola.com/imagenes/seleccion/20200204159453/mejores-vinos-tintos-menos-veinte-euros/0-776-776/vinos-tinto-seleccion-menos-20-euros-origenes-a.jpg'},
    {id:4, titulo: "Lorem 4", precio:1982, type:"tinto" , stock:56, imagen:'https://static.carrefour.es/hd_510x_/img_pim_food/300426_00_1.jpg'},
    {id:5, titulo: "Lorem 5", precio:321, type:"rosado" , stock:0, imagen:'https://walmartar.vteximg.com.br/arquivos/ids/910846-292-292/Vino-Rosado-Norton-Cosecha-Tardia-750cc-1-484151.jpg?v=637722528080900000'},
    {id:6, titulo: "Lorem 6", precio:733, type:"blanco" , stock:12, imagen:'https://arcordiezb2c.vteximg.com.br/arquivos/ids/164152-292-292/Vino-Blanco-Dulce-Natural-Tardio-Dulce-Natural-Callia-Amable-750-Cc-1-6637.jpg?v=637589358331830000'},
    {id:7, titulo: "Lorem 7", precio:999, type:"tinto" , stock:10, imagen:'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201610/11/00118738800616____2__600x600.jpg'},
    {id:8, titulo: "Lorem 8", precio:222, type:"tinto" , stock:20, imagen:'https://images.vivino.com/thumbs/fNc_jma0QWKDTyaII2rr9Q_pb_600x600.png' },
    {id:9, titulo: "Lorem 9", precio:111, type:"tinto" , stock:0, imagen:'https://www.hola.com/imagenes/seleccion/20200204159453/mejores-vinos-tintos-menos-veinte-euros/0-776-776/vinos-tinto-seleccion-menos-20-euros-origenes-a.jpg'},
    {id:10, titulo: "Lorem 10", precio:1982, type:"tinto" , stock:56, imagen:'https://static.carrefour.es/hd_510x_/img_pim_food/300426_00_1.jpg'},
    {id:11, titulo: "Lorem 11", precio:321, type:"rosado" , stock:0, imagen:'https://walmartar.vteximg.com.br/arquivos/ids/910846-292-292/Vino-Rosado-Norton-Cosecha-Tardia-750cc-1-484151.jpg?v=637722528080900000'},
    {id:12, titulo: "Lorem 12", precio:733, type:"blanco" , stock:12, imagen:'https://arcordiezb2c.vteximg.com.br/arquivos/ids/164152-292-292/Vino-Blanco-Dulce-Natural-Tardio-Dulce-Natural-Callia-Amable-750-Cc-1-6637.jpg?v=637589358331830000'},

];

generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach ((elementoDelArray) => {
        acumuladorDeCards += ` 
        
        <div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${elementoDelArray.stock > 0 ? 'Disponible' : 'Out Stock'} </div>
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                   
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$20.00</span>
                    ${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" ">
                <div class="text-center">
                <button 
                onclick="agregarAlCarrito(${elementoDelArray.id})"
                class="btn btn-outline-dark mt-auto" href="#">
                Add to cart
                </button>
                </div>
            </div>
        </div>
    </div> `;
    });
    mostrarCardsEnElHTML(acumuladorDeCards)
}



function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};




function suscribirseAlNewsletter() {

const email = document.getElementById("email").value;
console.log(email);

}





function buscarProducto() {


    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();
    console.log(nombreProductoBuscado);
    
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });
    

    generarCards(productosEncontrados);
    }




    //ESCUCHAR UN EVENTO///////////

    const boton = document.getElementById("producto-buscado");

boton.addEventListener('click', () => {
alert("Los mejores vinos argentinos");
})

function tomarValor(event) {
   console.log(event.target.value);
}
