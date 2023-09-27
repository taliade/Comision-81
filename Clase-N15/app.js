alert('Hola mundo!!');



var perro = {
    nombre:'max ',
    edad: 5,
    vivo : true
};

console.log(perro);



const myObj = {};

// Definir una nueva propiedad en el objeto "myObj"
Object.defineProperty(myObj, 'nombreclave', {
  value: 'Modelo_xt2',
  writable: false, // La propiedad no puede ser modificada
  enumerable: true, // La propiedad es enumerable
  configurable: true // La propiedad es configurable
});

console.log(myObj.nombreclave); 

myObj.color = "Rojo";
myObj.potencia = 240;

console.log(myObj);




// const mascota = {
//     nombre:'Firulais',
//     familia: 'Perro',
//     raza:'Caniche',
//     peso: 3000,
//     edad: '7 meses'
// };

// console.log(mascota.nombre);
// console.log(mascota.peso);
// console.log(mascota['familia']);
// console.log(mascota['raza']);

// mascota.color = 'Negro';

// console.log(mascota['color']);



// const persona = {
//     nombre: 'John',
//     apellido: 'Ramirez',
//     edad: 30,
//     profesion: 'Desarrollador'
//   };
  
//   // Recorrer el objeto (persona) utilizando un bucle "for...in"
//   for (let clave in persona) {
//     if (persona.hasOwnProperty(clave)) {
//       console.log(clave + ': ' + persona[clave]);
//     }
//   }



//   const mascota = {
//     nombre:'Firulais',
//     familia: 'Perro',
//     raza:'Caniche',
//     peso: 3000,
//     edad: '7 meses',
//     sonido: 'Guau Guau!',
//     saludar: function(){ 
//         console.log(this.sonido);}
// };

// mascota.saludar();


function Mascota(nombre,familia,raza,peso,edad,sonido){
    this.nombre = nombre;
    this.familia = familia;
    this.raza =raza;
    this.peso =peso;
    this.edad = edad;
    this.sonido = sonido;
    
    this.saludar = function(){
    console.log(this.sonido);
    }
}



 // Crear una instancia de la clase Mascota
 const miMascota = new Mascota('Firulais', 'Perro', 'Labrador', 20, 5, 'Guau Guau!');
 const miGato = new Mascota('Fiona', 'PGato', 'Gato gato', 20, 5, 'Miua Miua!');

 // Invocar el método saludar de la instancia
 miMascota.saludar();
 miGato.saludar(); 
 


 class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }



  // Crear un objeto de la clase Persona
const persona1 = new Persona('Juan', 25);

// Acceder a las propiedades del objeto
console.log(persona1.nombre); // Salida: Juan
console.log(persona1.edad); // Salida: 25

// Invocar el método saludar del objeto
persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 25 años.



let tasks = [
    {
        id:1,
        day:'Lunes',
        task:'Leer un libro',
        state:'Pendiente'

    },
    {
        id:2,
        day:'Miercoles',
        task:'Sacar al Perro',
        state:'Pendiente'

    },
    {
        id:3,
        day:'Viernes',
        task:'Jugar videojuegos',
        state:'Pendiente'

    },

];





for (let task in tasks) {
      
        console.log(tasks[task]);
    }
    