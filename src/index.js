require('dotenv').config();
const express = require('express');
const app = express();
const teste = require('./rotas/livros')
app.use(express.json());


app.use(teste);

app.listen(process.env.PORTSRV)
