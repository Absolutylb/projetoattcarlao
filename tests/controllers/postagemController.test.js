const request = require('supertest');
const app = require('../../src/app');
const Postagem = require('../../src/models/postagemModel');
const Usuario = require('../../src/models/usuarioModel');
const mongoose = require('mongoose');

let usuarioId;

beforeAll(async () => {
await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const usuario = await Usuario.create({
nome: 'Autor Teste',
email: 'autor@exemplo.com',
senha: 'Senha123'
});

usuarioId = usuario._id.toString();
});

afterAll(async () => {
await mongoose.connection.close();
});

describe('Postagem Controller', () => {
test('Deve criar uma nova postagem', async () => {
const response = await request(app)
.post('/postagens')
.set('Authorization', `Bearer ${usuarioId}`)
.send({
titulo: 'Postagem de Teste',
conteudo: 'Conteúdo da postagem de teste'
});

expect(response.statusCode).toBe(201);
expect(response.body).toHaveProperty('titulo', 'Postagem de Teste');
});

test('Deve listar postagens por autor', async () => {
const response = await request(app)
.get(`/postagens?autor=${usuarioId}`);

expect(response.statusCode).toBe(200);
expect(response.body).toEqual(expect.arrayContaining([
expect.objectContaining({ titulo: 'Postagem de Teste' })
]));
});
});
