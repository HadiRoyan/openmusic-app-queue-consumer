const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendMail(targetMail, content) {
    const message = {
      from: 'Playlists App',
      to: targetMail,
      subject: 'Expor Playlists',
      text: 'Terlampir hasil dari expor playlist',
      attachments: [
        {
          filename: 'playlists.json',
          content,
        },
      ],
    }

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
