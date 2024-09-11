const { validateUsuario, validateUpdateUsuario } = require('../../src/middlewares/validationMiddleware');

describe('Validation Middleware', () => {
test('Deve validar dados de usuário corretamente', () => {
const validData = {
nome: 'Teste',
email: 'teste@exemplo.com',
senha: 'Senha123'
};

expect(() => validateUsuario(validData)).not.toThrow();
});

test('Deve lançar erro com dados inválidos', () => {
const invalidData = {
nome: '',
email: 'teste@exemplo.com',
senha: '123'
};

expect(() => validateUsuario(invalidData)).toThrow();
});
});
