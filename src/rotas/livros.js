const express = require('express');
const rotas = express.Router()
const livros = require('../controladores/livros')


rotas.post("/", livros.adicionarLivro)
rotas.get("/", livros.listarLivro)

module.exports = rotas