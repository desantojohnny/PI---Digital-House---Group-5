const express = require('express');
const produtos = require('./src/routes/produtos');
let app = express();

app.get('/', (req, res)=> res.send('Olá Mundos!'));
app.get('/contatos', (req, res)=>res.send('Página Contatos'));
app.get('/produtos/:id', (req, res)=>{
    req.params.id;
    console.log('Eu tenho o produto com o o id:', id)
})
app.use('/produtos', produtos);

//criando servidor
app.listen(3000, ()=>console.log('Servidor rodando na porta 3000'))










/* const app = express();
const path = require('path');

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen (port, () => {
    console.log("Servidor no AR!")
}) */