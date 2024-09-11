const mongoose = require('mongoose');
const Postagem = require('../../src/models/postagemModel');
const Usuario = require('../../src/models/usuarioModel');

beforeAll(async () => {
await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
await mongoose.connection.close();
});

describe('Postagem Model', () => {
test('Deve criar uma nova postagem', async () => {
const usuario = await Usuario.create({
nome: 'Autor Teste',
email: 'autor@exemplo.com',
senha: 'Senha123'
});

const postagem = new Postagem({
titulo: 'Postagem Teste Modelo',
conteudo: 'Conteúdo da postagem',
autor: usuario._id
});

const savedPostagem = await postagem.save();

expect(savedPostagem).toHaveProperty('titulo', 'Postagem Teste Modelo');
expect(savedPostagem).toHaveProperty('conteudo', 'Conteúdo da postagem');
expect(savedPostagem).toHaveProperty('autor', usuario._id);
});
});
