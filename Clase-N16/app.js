// alert('Hola mundo!');

// const frutas = ['manzana', 'plátano', 'naranja', 'uva'];

// console.log(frutas);

// console.log(frutas[3]);

// // metodo .at() 
// console.log(frutas.at(1)); // Salida: plátano
// console.log(frutas.at(3));


// const datos =['Jose',23, true, 'Calle Falsa 123'];
// console.log(datos.length); 
// console.log(datos);

// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros); // Salida: [1, 2, 3, 4, 5]
// console.log(numeros.length); // Salida: 5 (cantidad de elementos)

// const nombres = ['Juan', 'María', 'Pedro'];
// console.log(nombres); // Salida: ['Juan', 'María', 'Pedro']
// console.log(nombres.length); // Salida: 3 (cantidad de elementos)

// const booleanos = [true, false, true, true];
// console.log(booleanos); // Salida: [true, false, true, true]
// console.log(booleanos.length); // Salida: 4 (cantidad de elementos)

// const personas = [
//     { nombre: 'Juan', edad: 30, vivo:true },
//     { nombre: 'María', edad: 25, vivo:true  },
//     { nombre: 'Pedro', edad: 35, vivo:'No lo se'}
//   ];
//   console.log(personas); // Salida: [{ nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 25 }, { nombre: 'Pedro', edad: 35 }]
//   console.log(personas.length); // Salida: 3 (cantidad de elementos)

// frutas.push('mandarina');
// console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva']
// console.log(frutas[3]);


// frutas.unshift('Sandia');
// console.log(frutas); // S

// console.log(frutas[1]);

// frutas.pop();
// console.log(frutas); //
// frutas.shift();
// console.log(frutas); //


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const resultado = array1.concat(array3, array2);
// console.log(resultado); // Salida: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const dogs = ["🐶", "🐶"];
// const cats = ["🐱", "🐱", "🐱"];
// // const pets = dogs.concat(cats);
//  console.log(dogs.concat(cats,cats));
// // ["🐶", "🐶", "🐱", "🐱", "🐱"]



// ///join 
// const elementos = ['Hola', ' ', 'mundo', '!'];

// // Utilizando el método join()
// const concatenado = elementos.join('*');
// console.log(concatenado); // Salida: 'Hola mundo!'

// const devices = ["💻", "🖥️", "🖥️", "💻", "🖨️"];
// const network = devices.join("〰️");
// console.log(network);
// // "💻〰️🖥️〰️🖥️〰️💻〰️🖨️"

// let concatenado2 = ' -';
// for (let elemento of elementos) {
//   concatenado2 += elemento;
// }
// console.log(concatenado2); // Salida: 'Hola mundo!'


// const frase = "Hola, cómo estás?";

// // Dividir la frase en palabras utilizando el espacio en blanco como separador
// const palabras = frase.split(" -");

// console.log(palabras);


// const letras = frase.split("");

// console.log(letras);

// const primerosTres = numeros.slice(0, 3);
// console.log(primerosTres); // Salida: [1, 2, 3]
// let weather = ["☁️", "🌧️", "☁️"];
// weather.splice(1, 2, "☀️");
// console.log(weather);
// // ["☁️", "☀️"]



// frutas.sort();
// console.log(frutas);




// nume.sort();
// console.log(nume);

// nume.sort(function(a, b) {
//     return b - a;
//   });

//   console.log(nume);



// const numeros = [10, 5, 8, 2, 1];
//   numeros.forEach(function(numero) {
//     console.log(numero);
//   });

const numeros = [1, 2, 3, 4, 5];

const todosMayoresQueCero = numeros.every(function(numero) {
  return numero > 0;
});

console.log(todosMayoresQueCero); // Salida: true

const todosPares = numeros.every(function(numero) {
  return numero % 2 === 0;
});

console.log(todosPares); // Salida: false

const visitors   = ["🧑", "👽", "🧑", "🧑", "🤖"];
const isHuman    = e => e === "🧑";
const onlyHumans = visitors.every(isHuman);
 console.log(onlyHumans);
// false





const algunoMayorQueTres = numeros.some(function(numero) {
  return numero > 3;
});

console.log(algunoMayorQueTres); // Salida: true

const algunoNegativo = numeros.some(function(numero) {
  return numero < 0;
});

console.log(algunoNegativo); 



const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
  console.log(suma);


  const duplicados = numeros.map(function(numero) {
    return numero * 2;
  });
  console.log(duplicados); // Salida: [2, 4, 6, 8, 10]
  
  const hungryMonkeys = ["🐒", "🦍", "🦧"];
  const feededMonkeys = hungryMonkeys.map(m => m + "🍌");
  console.log(feededMonkeys);
  // ["🐒🍌", "🦍🍌", "🦧🍌"]
  

  const pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
  });
  console.log(pares); // Salida: [2, 4]
  
  const guests  = ["👩👨", "👩👩", "👨", "👩", "👨👨"];
  const singles = guests.filter(g => g.length/2 === 1); // *
  console.log(singles);
  // ["👨", "👩"]
  


  const encontrado = numeros.find(function(numero) {
    return numero > 3;
  });
  console.log(encontrado); // Salida: 4
  
  const emojis = ["😀", "🌍", "🐶", "🍕", "🎉"];
  
  // Función de callback para buscar un emoji específico
  const buscarEmoji = (emoji) => {
    return emoji === "🐶";
  };


  const emojiEncontrado = emojis.find(buscarEmoji);

console.log(emojiEncontrado);
