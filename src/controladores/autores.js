const knex = require('../config/conexao')

const adicionarAutor = async (req, res) => {
    const adicionar = await knex('autores').insert(req.body).returning('*')
    return res.status(201).json(adicionar)
}

module.exports = {
    adicionarAutor
}