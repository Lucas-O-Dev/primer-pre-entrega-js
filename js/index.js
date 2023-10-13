//Ciclo for del boton del index

let palabracorrecta ="si";


function turno(){
    let intentos = 3;
    for(let i = intentos;i>0;i--){
        let confirmacion = prompt('Gracias por confiar en Venecia.\n Nos gustaría que confirme el turno con un "si".\n Tienes '+i+' intentos. ');
if(confirmacion.toLowerCase() === palabracorrecta){
alert("Gracias por reservar un turno.\n Estaremos en contacto con usted lo antes posible.")
break;
}else{
    alert("Lamentamos que no podamos ayudarte por este medio.\n Te podes comunicar con nosotros en venecia-staff@gmail.com\n o entrando a nuestra pagina web www.venecia-estética.com.ar.\n Como presente le damos un cupón del 10% de descuento.")
    
}
    }


}

// //Array de htmlcosmetica

function clientePide(){
    const arrayA = ['Labiales liquidos', 'Barras labiales', 'Mascara para pestañas', 'Esmaltes', 'Quitaesmaltes', 'Maquillaje Compacto'];

    
    let producto = prompt("Hola, te podemos ofrecer estos productos al mejor precio del mercado.\n 0-Labiales Liquidos \n 1-Barras Labiales\n 2-Máscara para pestañas\n 3-Esmaltes\n 4-Quitaesmaltes\n 5-Maquillaje Compacto")
    
    console.log( arrayA [producto] )

}



// // // Definición de la clase ProductoPeluqueria
class ProductoPeluqueria {
        constructor(nombre, tipo, marca) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.marca = marca;
        }
    }

// //     // Creación de un array de productos de peluquería
    const producto = [
        new ProductoPeluqueria("Barras Labiales", "Labiales", "Velvet"),
        new ProductoPeluqueria("Mascara Para Pestañas", "Mascara", "Maybelline"),
        new ProductoPeluqueria("Esmaltes", "Esmaltes", "Vogue"),
        new ProductoPeluqueria("Quita Esmaltes", "Esmaltes", "Vogue"),
        new ProductoPeluqueria("Maquillaje Compacto", "Maquillaje", "Loreal"),
    ];



// //     // Función para buscar un producto por nombre
    function buscarProductoPorNombre(nombre) {
        return producto.find(producto => producto.nombre === nombre);
    }
    
    // Uso de array.find para buscar un producto por nombre
    const productoBuscado = buscarProductoPorNombre("Maquillaje Compacto");
    
    if (productoBuscado) {
        console.log("Producto encontrado:", productoBuscado);
    } else {
        console.log("Producto no encontrado");
    }


//     //aca se muestra el precio del producto en oferta.

class Ofertas {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Creación de un array de productos
const saleItems = [
    new Ofertas("Rimel Maybelline Blue", 120),
    new Ofertas("Rimel Maybelline Black", 105),
    new Ofertas("Rimel Maybelline Pink", 110),
];

// Función para aplicar un descuento a los precios de los productos
function aplicarDescuento(productos, porcentajeDescuento) {
    for (const producto of productos) {
        const precioOriginal = producto.precio;
        const descuento = precioOriginal * (porcentajeDescuento / 100);
        const precioConDescuento = precioOriginal - descuento;
        producto.precio = precioConDescuento;
    }
}

class Tienda {
    constructor() {
        this.saleItems = [];
    }

    agregarOferta(nombre, precio) {
        const nuevoProducto = new Ofertas(nombre, precio);
        this.saleItems.push(nuevoProducto);
    }

    eliminarOferta(nombre) {
        this.saleItems = this.saleItems.filter((producto) => producto.nombre !== nombre);
    }

    aplicarDescuento(porcentajeDescuento) {
        for (const producto of this.saleItems) {
            const precioOriginal = producto.precio;
            const descuento = precioOriginal * (porcentajeDescuento / 100);
            const precioConDescuento = precioOriginal - descuento;
            producto.precio = precioConDescuento;
        }
    }

    calcularPrecioTotal() {
        let precioTotal = 0;
        for (const producto of this.saleItems) {
            precioTotal += producto.precio;
        }
        return precioTotal.toFixed(2);
    }

    mostrarProductos() {
        for (const producto of this.saleItems) {
            console.log(`${producto.nombre}: $${producto.precio.toFixed(2)}`);
        }
    }
}

// Crear una tienda y agregar productos
const miTienda = new Tienda();
miTienda.agregarOferta("Rimel Maybelline Blue", 120);
miTienda.agregarOferta("Rimel Maybelline Black", 105);
miTienda.agregarOferta("Rimel Maybelline Pink", 110);

// Aplicar descuento y mostrar precios
miTienda.aplicarDescuento(10);
miTienda.mostrarProductos();

// Mostrar el precio total de los productos con descuento
console.log("Precio total de productos con descuento:", miTienda.calcularPrecioTotal());



















