const express = require('express');
const rotas = express.Router()
const autores = require('../controladores/autores')


rotas.post("/", autores.adicionarAutor)


module.exports = rotas