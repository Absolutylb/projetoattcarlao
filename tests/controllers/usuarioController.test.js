const request = require('supertest');
const app = require('../../src/app');
const Usuario = require('../../src/models/usuarioModel');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Usuário Controller', () => {
test('Deve registrar um novo usuário', async () => {
const response = await request(app)
.post('/usuarios/registro')
.send({
nome: 'Teste',
email: 'teste@exemplo.com',
senha: 'Senha123',
imagem: 'url/imagem.jpg',
papel: 'autor'
});

expect(response.statusCode).toBe(201);
expect(response.body).toHaveProperty('nome', 'Teste');
});

test('Deve atualizar o perfil do usuário', async () => {
const usuario = await Usuario.create({
nome: 'Teste Atualização',
email: 'atualizacao@exemplo.com',
senha: 'Senha123'
});

const response = await request(app)
.put(`/usuarios/${usuario._id}`)
.send({
nome: 'Teste Atualizado',
email: 'atualizado@exemplo.com',
senha: 'NovaSenha123'
});

expect(response.statusCode).toBe(200);
expect(response.body).toHaveProperty('nome', 'Teste Atualizado');
});
});
