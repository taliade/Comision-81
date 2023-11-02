const express = require('express');
const path = require('path');
// Comentarios 
const app = express();
/*   Comentarios */
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/home', (req, res) => {
    res.send('Hola Te saludo! en la seccion de HOME - Probando las actualizaciones de nodemon.... ');
});


app.use(express.static('./test-app/public'));



app.listen(port, () => {
    console.log(`El puerto esta CORRIENDO en http://localhost:${port}` )});