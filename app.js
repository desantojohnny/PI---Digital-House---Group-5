const express = require('express');
const produtos = require('./routes/produtos');
let app = express();

app.get('/', (req, res)=> res.send('Olá Mundos!'));
app.get('/contatos', (req, res)=>res.send('Página Contatos'));

app.use('/produtos', produtos);

//criando servidor
/* const app = express();
const path = require('path');

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen (port, () => {
    console.log("Servidor no AR!")
}) */