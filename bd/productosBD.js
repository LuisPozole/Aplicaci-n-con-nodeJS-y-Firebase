const {productosBD} = require("./conexion");

const Producto = require("../clases/Producto");



function validar(producto){
    var valido = false;
    if (producto.nombre != undefined && producto.cantidad != undefined && producto.precio != undefined) {
        valido = true;
    }
    return valido;
}


async function mostrarProductos(){
const productos = await productosBD.get();
    

    productosValidos = [];
    productos.forEach(producto => {
        const producto1 = new Producto({id: producto.id, ...producto.data()});
        if (validar(producto1.datos)) {
            productosValidos.push(producto1.datos);
        }
    });
    return productosValidos;
}
async function buscarPorId(id){
    var productoValido;
    const producto = await productosBD.doc(id).get();
    const producto1 = new Producto({id: producto.id, ...producto.data()});
    if (validar(producto1.datos)) {
        productoValido = producto1.datos;
    }
    return productoValido;
}


async function nuevoProducto(data) {
    const producto1 = new Producto(data);
    
    var productoValido = {};
    var productoGuardado = false;
    if (validar(producto1.datos)) {
        productoValido = producto1.datos;
        await productosBD.doc().set(productoValido);
        productoGuardado = true;
    }
    
    return productoGuardado;
}


async function borrarProductos(id) {
    var productoBorrado = true;
    

    if (await buscarPorId(id) != undefined) {
        console.log("Se borrará el producto");
        await productosBD.doc(id).delete();
    }
    return productoBorrado;
}

module.exports ={
    mostrarProductos,
    nuevoProducto,
    borrarProductos,
    buscarPorId,
}