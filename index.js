const boton = document.querySelector(".btn");
const calc = document.querySelector(".calcular");
const mostar = document.querySelector(".Buscar");
const crear = document.querySelector(".crear");

let array = [];

let nameProdu ;
let precioProdu; 
let cantidadProdu; 

class Productos{
    constructor(nombre, precio, cantidad){
        this.nom = nombre;
        this.pre = precio;
        this.cant = cantidad
    }

    mostrarInfo(){
        console.log(`
            Nombre: ${this.nom}
            Precio: ${this.pre}
            Cantidad: ${this.cant}`);
    }


}

array.push(new Productos("Sony",38.81, 45));
array.push(new Productos("Lenovo",45.81, 12));
array.push(new Productos("Samsung",52.81, 45));
array.push(new Productos("Philips",63.81, 75));
array.push(new Productos("alcatel",74.81, 65));
array.push(new Productos("Dell",88.81, 78));
array.push(new Productos("Motorol",96.81, 36));
array.push(new Productos("Nokia",45.81, 17));
array.push(new Productos("Apple",42.81, 32));
array.push(new Productos("Vivo",42.81, 36));

console.log(array);

//mostar los productos

boton.addEventListener("click", ()=>{
    array.forEach(elemento => elemento.mostrarInfo());
    
})

//calcular la sumatoria de los productos

calc.addEventListener("click", () =>{
    let total = 0;
    let contador = 0;
    for (let i = 0; i<array.length; i++){
        contador = array[i].pre*array[i].cant;
        total = total + contador; 
    }
    console.log("El total de todos los produsctos es: "+ total);

});



//buscar los productos

let nom;
let nombres =[];
for (let i = 0; i<array.length; i++){
    nom = array[i].nom;
    nombres.push(nom);
}

let nomSave = nombres.join(`
    Nombre: `);

mostar.addEventListener("click", () =>{
    let respuesta = prompt(`Escribe el nombre del elemento que deceas buscar:
        Nombre: ${nomSave} 
        `);
    buscarProducto(respuesta)

})

function buscarProducto (datoUsuario){
    const encontrar = array.find((j) => j.nom === datoUsuario);
    if(encontrar === undefined){
        console.log("producto no encontrado");
    }else{
        nameProdu = encontrar.nom;
        precioProdu = encontrar.pre;
        cantidadProdu = encontrar.cant;

        console.log(`
            Nombre: ${nameProdu}
            Precio: ${precioProdu}
            Cantidad: ${cantidadProdu}`)

    }
    

    
}

//agregar productos

crear.addEventListener("click", ()=>{
    let newname = prompt("ingrese el nombre del ceular");
    let newprecio = prompt("ingrese el valor");
    let newcantidad = prompt("ingrese la cantidad");

    array.push(new Productos(newname, newprecio, newcantidad));
})


//Elmininar productos




















