const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const SendEmailUtilityTextOnly = async (
  name,
  email,
  phone,
  companyName,
  description
) => {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      host: "mail.laramintkw.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        // This is needed to prevent TLS issues with self-signed certificates
        rejectUnauthorized: false,
      },
      debug: true, // Enable debugging
    })
  );

  var mailOptions = {
    from: '"laramintkw.com" <info@laramintkw.com>',
    to: ["sinanrumi7733@gmail.com"],
    subject: "Contact Us",
    html: `<h1>Name: ${name}</h1> <h2>Email: ${email}</h2> <h3>phone: ${phone}</h3> <h4>Company Name: ${companyName}</h4> <h5>description: ${description}</h5> `,
  };

  const result = await transporter.sendMail(mailOptions);
  console.log(result);
  return result;
};

module.exports = SendEmailUtilityTextOnly;
