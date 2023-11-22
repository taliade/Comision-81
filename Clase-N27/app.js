const express = require('express')
const path = require('path');

const fs = require('fs');

const port = 3000;

const app = express();

app.get('/', (req, res) => { res.send("hola Mundo!") });

app.get('/personajes/:id', (req, res) => {
    
    const dibujo = path.join(__dirname , '/src/data/personajes.json');
                           //(__dirname, 'src', 'data','personajes.json'); 
        fs.readFile(dibujo, 'utf-8', (error, data) => {
            if (error) {
                console.error(error);
                return res.status(500).send('Error al leer el archivo');

            }
            const personajes = JSON.parse(data);
            const personaje = personajes.find(p => p.id === parseInt(req.params.id))
                if(!personaje){
                    return res.status(404).send('El personajes que busca, no se encuentra');
                }
                    return res.json(personaje);
            }) 
        })

app.listen(port, () => { console.log('Servidor Corriendo en Puerto http://localhost:3000')
         }) 
          //alt + 96 Comillas 