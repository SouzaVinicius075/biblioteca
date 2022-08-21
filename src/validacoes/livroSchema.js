const yup = require('./yup');

const livroSchema = yup.object().shape({
    nome: yup.string().required(),
    autor: yup.string().required(),
    data_publicacao: yup.date().required(),
    descricao: yup.string().required(),
    //   editora: yup.string().required(),
    genero: yup.string().required()


})
module.exports = livroSchema