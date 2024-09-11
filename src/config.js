require('dotenv').config();

const config = {
PORT: process.env.PORT || 3000,
MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/meubanco', // Ajuste o URI do MongoDB conforme necessário
JWT_SECRET: process.env.JWT_SECRET || 'secreta',
EMAIL_USER: process.env.EMAIL_USER,

EMAIL_PASS: process.env.EMAIL_PASS
};

module.exports = config;
