// Un API (Application Programming Interface) es un conjunto de reglas y protocolos 
// que permiten que diferentes aplicaciones se comuniquen entre sí. Es una interfaz que 
// define cómo las diferentes partes de software deben interactuar y qué operaciones
//  pueden realizar.

// Un API define los métodos, los parámetros y el formato de los datos que se pueden
//  intercambiar entre las aplicaciones. Proporciona una forma estructurada y 
//  estandarizada para que los desarrolladores puedan utilizar y acceder a las 
//  funcionalidades de un sistema o servicio externo.


// const URL = 'https://api.thecatapi.com/v1/images/search';

// fetch(URL)
// .then(res => res.json())
// .then(data =>{
//    const img = document.querySelector('img');
//   img.src = data[0].url;
   
// });


const URL = 'https://api.thecatapi.com/v1/images/search?limit=5'; // Limitado a 5 imágenes

fetch(URL)
   .then((response) => response.json())
  .then((data) => {
    const imageContainer = document.getElementById('image-container'); // Obtén un contenedor en tu HTML
    data.forEach((catImage) => {
      const img = document.createElement('img'); // Crea un elemento de imagen para cada imagen
      img.src = catImage.url; // Establece la fuente de la imagen
      imageContainer.appendChild(img); // Agrega la imagen al contenedor
    });
  })
  .catch((error) => console.error('Error:', error));
