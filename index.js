const boton = document.querySelector(".btn");
const calc = document.querySelector(".calcular")

let array = [];

class Productos{
    constructor(nombre, precio, cantidad){
        this.nom = nombre;
        this.pre = precio;
        this.cant = cantidad
    }

    mostarInfo(){
        console.log(`El inventario disponible es 
            marca: ${this.nom}
            precio: ${this.pre}
            cantidad en stock: ${this.cant}`);
    }

    cantidad(){
        let sumatoria = this.cant; 
        array.push(sumatoria);
        console.log(array)
    }
}

const productos1 = new Productos("Sony",38.81, 45)
const productos2 = new Productos("Lenovo",45.81, 12)
const productos3 = new Productos("amsung",52.81, 45)
const productos4 = new Productos("Philips",63.81, 75)
const productos5 = new Productos("alcatel",74.81, 65)
const productos6 = new Productos("Dell",88.81, 78)
const productos7 = new Productos("Motorol",96.81, 36)
const productos8 = new Productos("Nokia",45.81, 17)
const productos9 = new Productos("Apple",42.81, 32)
const productos10 = new Productos("Sony",42.81, 36)


boton.addEventListener("click", ()=>{
    productos1.mostarInfo()
    productos2.mostarInfo()
    productos3.mostarInfo()
    productos4.mostarInfo()
    productos5.mostarInfo()
    productos6.mostarInfo()
    productos7.mostarInfo()
    productos8.mostarInfo()
    productos9.mostarInfo()
    productos10.mostarInfo()
})

calc.addEventListener("click", ()=>{
    productos1.cantidad();
})





