const express = require('express');
const rotas = express.Router()
const livros = require('../controladores/livros')


rotas.get("/", livros.cadastrarLivro)


module.exports = rotas