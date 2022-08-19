const knex = require('../config/conexao')

const cadastrarLivro = async (req, res) => {
    await knex('livros')
}

module.exports = {
    cadastrarLivro
}