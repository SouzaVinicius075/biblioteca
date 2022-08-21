require('dotenv').config();
const express = require('express');
const app = express();
const rotasLivros = require('./rotas/livros')
const rotasAutores = require('./rotas/autores')
app.use(express.json());


app.use("/livros", rotasLivros);
app.use("/autores", rotasAutores)

app.listen(process.env.PORTSRV)
