const http = require('http');
const fs = require('fs');
const {dirname} = require('path');


// const server = http.createServer((req, res) => {
//     res.writeHead(200,{
//         'Content-Type': 'text/plain'

//     });
//         res.end('Hola mundo, te saludo desde la terminal- No se ven los cambios');

// });




// const server = http.createServer((req, res) => {
//     res.writeHead(200,{
//         'Content-Type': 'text/html; charset=utf-8'

//     });
//         res.end('<h1>Hola Bienvenidos al documento html  </h1> <p> Parrafo de archivo html </p>');

// });

const server = http.createServer((req,res) =>{
    const file =fs.readFileSync(__dirname + '/index.html');
    res.writeHead(200,{
        'content-type': 'text/html; charset=utf-8'
    });

    res.end(file)
});


server.listen(8000,() => console.log(' Servidor Corriendo en puerto 3000, http://localhost:8000'));