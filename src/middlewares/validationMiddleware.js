const Zod = require('zod');

const usuarioSchema = Zod.object({
nome: Zod.string().min(1),
email: Zod.string().email(),
senha: Zod.string().min(8).regex(/[a-zA-Z]/).regex(/\d/),
imagem: Zod.string().optional(),
papel: Zod.enum(['administrador', 'autor', 'leitor']).optional()
});

const updateUsuarioSchema = Zod.object({
nome: Zod.string().optional(),
email: Zod.string().email().optional(),
senha: Zod.string().optional(),
imagem: Zod.string().optional()
});

exports.validateUsuario = (data) => usuarioSchema.parse(data);
exports.validateUpdateUsuario = (data) => updateUsuarioSchema.parse(data);
