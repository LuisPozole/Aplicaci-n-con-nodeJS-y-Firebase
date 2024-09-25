var rutas = require("express").Router();
var {mostrarProductos, nuevoProducto, borrarProductos, buscarPorId} = require("../bd/productosBD");

rutas.get("/productos", async (req, res)=>{
    var productosValidos = await mostrarProductos();
    res.json(productosValidos);
    
});

rutas.get("/productos/buscarPorId/:id", async (req, res)=>{
    var productoValido = await buscarPorId(req.params.id);
    res.json(productoValido);
});

rutas.post("/productos/nuevoProducto", async (req, res)=>{
    console.log(req.body);
    var productoGuardado = await nuevoProducto(req.body);
    res.json(productoGuardado);
});

rutas.delete("/productos/borrarProducto/:id", async (req, res)=>{
    var productoBorrado = await borrarProductos(req.params.id);
    res.json(productoBorrado);
});

module.exports = rutas;