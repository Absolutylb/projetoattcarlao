const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
const token = req.headers['authorization']?.split(' ')[1];

if (!token) {
return res.status(401).json({ message: 'Token não fornecido' });
}

jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
if (err) {
return res.status(401).json({ message: 'Token inválido' });
}

req.userId = decoded.id;
next();
});
};
