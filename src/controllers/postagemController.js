const Postagem = require('../models/postagemModel');

exports.criarPostagem = async (req, res) => {
try {
const { titulo, conteudo } = req.body;
const usuarioId = req.userId; // Usando um middleware para definir req.userId

const postagem = new Postagem({ titulo, conteudo, autor: usuarioId });

await postagem.save();

res.status(201).json(postagem);
} catch (error) {
res.status(400).json({ error: error.message });
}
};

exports.listarPostagensPorAutor = async (req, res) => {
try {
const { autor } = req.query;

const postagens = await Postagem.find({ autor });

res.status(200).json(postagens);
} catch (error) {
res.status(400).json({ error: error.message });
}
};
