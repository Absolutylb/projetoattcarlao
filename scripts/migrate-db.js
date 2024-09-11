const mongoose = require('mongoose');
const config = require('../src/config');

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
console.log('Iniciando migrações...');

// Aqui você pode adicionar código para migrações de banco de dados, por exemplo:
// await mongoose.connection.db.createCollection('novaColecao');

console.log('Migrações concluídas');
mongoose.connection.close();
})
.catch(err => {
console.error('Erro durante migrações', err);
mongoose.connection.close();
});
