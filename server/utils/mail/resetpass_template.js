require('dotenv').config();

const resetPass = data => {
  const URL =
    process.env.NODE_ENV === 'production'
      ? process.env.ROOT_URL
      : 'http://localhost:3000';

  return `
   <!DOCTYPE html>
<html style="margin: 0; padding: 0;">
  <head>
    <title>Email template</title>
  </head>

  <body style="margin: 0; padding: 0;">
    <table
      class="table"
      cellpadding="0"
      cellspacing="0"
      style="background-color: #eee; empty-cells: hide; margin: 0 auto; padding: 0; width: 600px;"
    >
      <tr>
        <td style="background-color: rgba(33, 33, 33, 0.9); margin: 0 auto;">
          <div
            style="margin: 15px 0; width: 130px; margin-left: 39%; transform: skew(-20deg); background-color: rgba(204,204,204,0.35);"
          >
            <h1
              style="box-sizing: border-box; color: #ccc; font-family: Black Ops One,sans-serif; line-height: 30px; text-align: center; font-size: 20px;"
            >
              JetDeals
            </h1>
          </div>
        </td>
      </tr>
      <tr>
        <td
          style="margin: 0 auto;padding: 15px 25px 25px 25px;box-sizing: border-box"
        >
          <h2
            style="font-size: 20px; color: #333; font-family: Roboto, sans-serif; font-weight: 400;"
          >
            Hi ${data.username}, do you want to reset your password?
          </h2>
          <p
            style="font-size: 13px; font-family: Roboto, sans-serif; color: #333; margin-bottom: 18px;"
          >
            Someone requested to reset your <b>jetDeals.com</b> account
            password. If it wasn't you, please ignore this e-mail and no changes
            will be made to your account. However, if you have requested to
            reset your password, please click the link below. You will be
            redirected to the jetDeals.com password reset form.
          </p>
          <a
            href="${URL}/reset_password/${data.resetToken}"
            style="text-decoration: underline; color: #252525; font-size: 14px; font-family: Roboto, sans-serif;"
            >Click here to reset your password</a
          >
        </td>
      </tr>
      <tr>
        <td style="background-color: #999592; margin: 0 auto;">
          <p
            style="box-sizing: border-box; color: white; font-family: Roboto, sans-serif; letter-spacing: 0.5px; line-height: 1.4; margin: 0; padding: 15px 25px; text-align: center; font-size:9px"
          >
            This is an automatically generated e-mail, please do not reply to
            it. Copyright © 2019 JetDeals. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
      `;
};

module.exports = { resetPass };
