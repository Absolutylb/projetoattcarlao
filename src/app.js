const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./routes/usuarioRoutes');
const postagemRoutes = require('./routes/postagemRoutes');
const config = require('./config');

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/postagens', postagemRoutes);

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.listen(config.PORT, () => {
console.log(`Servidor rodando na porta ${config.PORT}`);
});
