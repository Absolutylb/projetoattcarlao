const nodemailer = require('nodemailer');
const config = require('../config');

// Configuração do transporte de e-mail
const transporter = nodemailer.createTransport({
service: 'Gmail', // ou outro serviço de e-mail
auth: {
user: config.EMAIL_USER,
pass: config.EMAIL_PASS
}
});

/**
 *Envia um e-mail.
 * @param {string} to - Endereço de e-mail do destinatário.
 * @param {string} subject - Assunto do e-mail.
 * @param {string} text - Corpo do e-mail em texto simples.
 * @param {string} html - Corpo do e-mail em HTML (opcional).
 * @returns {Promise} - Promessa que resolve quando o e-mail for enviado.
 */
exports.sendEmail = (to, subject, text, html) => {
const mailOptions = {
from: config.EMAIL_USER,
to,
subject,
text,
html
};

return transporter.sendMail(mailOptions);
};
