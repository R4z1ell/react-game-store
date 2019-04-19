var helper = require('sendgrid').mail;
const async = require('async');
require('dotenv').config();

const sendEmail = (
  parentCallback,
  fromEmail,
  toEmails,
  subject,
  textContent,
  htmlContent
) => {
  const errorEmails = [];
  const successfulEmails = [];
  const sg = require('sendgrid')(process.env.SEND_GRID_KEY);
  async.parallel(
    [
      callback => {
        for (let i = 0; i < toEmails.length; i += 1) {
          const senderEmail = new helper.Email(fromEmail);
          const toEmail = new helper.Email(toEmails[i]);
          const content = new helper.Content('text/html', htmlContent);
          const mail = new helper.Mail(senderEmail, subject, toEmail, content);
          var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
          });
          sg.API(request, (error, response) => {
            console.log('SendGrid');
            if (error) {
              console.log('Error response received');
            }
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
          });
        }
        callback(null, true);
      }
    ],
    (err, results) => {
      console.log('Done');
    }
  );
  parentCallback(null, {
    successfulEmails: successfulEmails,
    errorEmails: errorEmails
  });
};

module.exports = { sendEmail };
