const mailer = require('nodemailer');
const { resetPass } = require('./resetpass_template');
require('dotenv').config();

const getEmailData = (to, username, token, type, actionData) => {
  let data = null;

  switch (type) {
    case 'reset_password':
      data = {
        from: 'JetDeals <gokutra4@gmail.com>',
        to,
        subject: 'Password Reset Link',
        html: resetPass(actionData)
      };
      break;
    default:
      data;
  }

  return data;
};

const sendEmail = (to, username, token, type, actionData = null) => {
  const smtpTransport = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'gokutra4@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  });

  const mail = getEmailData(to, username, token, type, actionData);

  smtpTransport.sendMail(mail, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log('email sent');
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
