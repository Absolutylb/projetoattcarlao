const mongoose = require('mongoose');
const Usuario = require('../../src/models/usuarioModel');
const bcrypt = require('bcryptjs');

beforeAll(async () => {
await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
await mongoose.connection.close();
});

describe('Usuario Model', () => {
test('Deve criar um novo usuário', async () => {
const hashedPassword = await bcrypt.hash('Senha123', 10);
const usuario = new Usuario({
nome: 'Teste Modelo',
email: 'teste.modelo@exemplo.com',
senha: hashedPassword
});

const savedUsuario = await usuario.save();

expect(savedUsuario).toHaveProperty('nome', 'Teste Modelo');
expect(savedUsuario).toHaveProperty('email', 'teste.modelo@exemplo.com');
});
});
