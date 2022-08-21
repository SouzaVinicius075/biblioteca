const knex = require('../config/conexao')
const livroSchema = require('../validacoes/livroSchema')

const adicionarLivro = async (req, res) => {
    try {
        await livroSchema.validate(req.body)
        const { autor, genero, descricao, data_publicacao, nome } = req.body;

        const idAutor = await knex('autores').where({ "nome": autor }).returning('id').first()
        if (!idAutor)
            return res.status(400).json({ "Mensagem": "Autor não registrado em nossa base de dados" })
        const { id } = idAutor


        const cadastro = await knex('livros').insert({ nome, id_autor: id, data_publicacao, descricao, genero }).returning('*')
        return res.status(201).json(cadastro)
    } catch (error) {
        return res.status(400).json(error.message)

    }
}

const listarLivro = async (req, res) => {
    const listar = await knex('livros')
    return res.status(200).json(listar)
}
module.exports = {
    adicionarLivro,
    listarLivro
}