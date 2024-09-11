const request = require('supertest');
const app = require('../../src/app');
const Usuario = require('../../src/models/usuarioModel');
const jwt = require('jsonwebtoken');
const config = require('../../src/config');

let token;

beforeAll(async () => {
const usuario = await Usuario.create({
nome: 'Teste Middleware',
email: 'middleware@exemplo.com',
senha: 'Senha123'
});

token = jwt.sign({ id: usuario._id }, config.JWT_SECRET);
});

describe('Auth Middleware', () => {
test('Deve permitir acesso com token válido', async () => {
const response = await request(app)
.post('/postagens')
.set('Authorization', `Bearer ${token}`)
.send({
titulo: 'Postagem Teste Middleware',
conteudo: 'Conteúdo de teste'
});

expect(response.statusCode).toBe(201);
});

test('Não deve permitir acesso sem token', async () => {
const response = await request(app)
.post('/postagens')
.send({
titulo: 'Postagem Sem Token',
conteudo: 'Conteúdo de teste'
});

expect(response.statusCode).toBe(401);
});
});
