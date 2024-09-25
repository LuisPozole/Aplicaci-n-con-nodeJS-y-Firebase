class Producto {
    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.cantidad = data.cantidad;
        this.precio = data.precio
    }
    set id(id) {
        this._id = id; 
    }
    set nombre(nombre) {
        const nombreRegex = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)) {
            this._nombre = nombre; // Asigna el nombre solo si cumple con el regex
        } else {
            console.log('Nombre inválido: Debe iniciar con una letra mayúscula, seguido de letras minúsculas y puede contener espacios.');
        }
    }

    set cantidad(cantidad) {
        const cantidadRegex = /^[0-9]+(\.[0-9]+)?$/;
        if (cantidadRegex.test(cantidad)) {
            this._cantidad = cantidad;
        cantidad
             console.log('Producto inválido: Debe tener al menos 3 caracteres y contener solo letras, números o guiones bajos.');
        }
    }
    set precio(precio) {
        const precioRegex = /^[0-9]+(\.[0-9]+)?$/;
        if (precioRegex.test(precio) && precio.length >= 0) {
            this._precio = precio; 
        } else {
            console.log('Precio inválido: Debe ser un número válido con al menos 6 caracteres.');
        }
    }
    


    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get cantidad() {
        return this._cantidad;
    }
    get precio() {
        return this._precio;
    }


    get datos() {
        if (this.id != undefined) {
            return {
                id: this.id,
                nombre: this.nombre,
                cantidad: this.cantidad,
                precio: this.precio,
            };
        } else {
            return {
                nombre: this.nombre,
                cantidad: this.cantidad,
                precio: this.precio,
            };
        }
    }
}

module.exports = Producto;

