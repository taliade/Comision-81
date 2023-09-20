alert('Hola a todos!!');


// console.log(resultado);
// saludar();
// Funcion declara  
// function saludar() {
//     let a= 20;

//     console.log('¡Hola, mundo!' , a);
//   }
  
//   saludar();


// var sumar = function(a ,b) {

//     return a + b;
//   };
  
// var resultado = sumar(3, 5);
//   console.log(resultado);

//   console.log(sumar(30,5));

//   alert(sumar(90,54));
  
//   var total = sumar(90,8);
//   console.log(total);














//   console.log(resultado);






//   console.log(total);


// function sumar(a, b) {
//   let resultado = a + b;
  
//   return resultado;
// }

// function restar(a, b) {
//     let resultad2 = a - b;
    
//     return resultad2;
//   }
// console.log(sumar(99,5))

// let numero1 = 5;
// let numero2 = 3;
// let suma = sumar(numero1, numero2);
// console.log(suma);
// console.log(restar(94,74));



const sumarConsole = (a, b) =>{
    let resultado = a + b;
     console.log('El valor retinado es: '+ resultado);
    }
    
const sumarAlert = (a, b) =>{
    let resultado = a + b;
        alert('El valor retinado es: '+ resultado);
    }
    

sumarConsole(15,3);

sumarAlert(30,15);

var mensaje = prompt('Te mando un mensaje desde prompt');
console.log(mensaje);
sumarAlert(30,9)

let numero = 10;
let letras= 'abc';
let mas = true;
console.log(parseFloat(numero));
console.log(parseInt(numero));
console.log(parseInt(mas));
console.log(Number(mas));
console.log(String(letras));

let teclado = prompt('Ingrese un numero: entre 1 y 10 ');

if (teclado >= 7 && teclado <= 10){
    alert('Su numero es mayor a 7, Felicitaciones es ganadora')
}else  {
    alert('Su numero es menor que el numero solicitado ');
}



