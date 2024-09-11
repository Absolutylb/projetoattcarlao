const mongoose = require('mongoose');
const config = require('../src/config');

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Banco de dados inicializado'))
.catch(err => console.error('Erro ao conectar ao banco de dados', err));
