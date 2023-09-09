const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const SendEmailUtilityTextOnly = async (name, email, phone, description) => {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    })
  );

  var mailOptions = {
    from: `Graphicsviewpoint <graphicsviewpoint24@gmail.com>`,
    to: ["info@graphicsviewpoint.com", "graphicsviewpoint24@gmail.com"],
    subject: "Contact Us",
    html: `<h1>Name: ${name}</h1> <h2>Email: ${email}</h2> <h3>phone: ${phone}</h3> <h4>description: ${description}</h4>`,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmailUtilityTextOnly;
