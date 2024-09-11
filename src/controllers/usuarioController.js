const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.registrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, imagem, papel } = req.body;

    const hashedPassword = await bcrypt.hash(senha, 10);

const usuario = new Usuario({
nome,
email,
senha: hashedPassword,
imagem,
papel: papel || 'leitor'
});

await usuario.save();

res.status(201).json(usuario);
} catch (error) {
res.status(400).json({ error: error.message });
}
};

exports.atualizarUsuario = async (req, res) => {
try {
const { id } = req.params;

const updates = {};
if (nome) updates.nome = nome;
if (email) updates.email = email;
if (senha) updates.senha = await bcrypt.hash(senha, 10);
if (imagem) updates.imagem = imagem;

const usuario = await Usuario.findByIdAndUpdate(id, updates, { new: true });

res.status(200).json(usuario);
} catch (error) {
res.status(400).json({ error: error.message });
}
};
