const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const SendEmailUtilityFreeQuetTextOnly = async (
  name,
  email,
  phone,
  companyName,
  description
) => {
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
    from: `entiregraphics <contact.entiregraphics@gmail.com>`,
    to: ["info@entiregraphics.com", "contact.entiregraphics@gmail.com"],
    subject: "Contact Us",
    html: `<h1>Name: ${name}</h1> <h2>Email: ${email}</h2> <h3>phone: ${phone}</h3> <h4>Company Name: ${companyName}</h4> <h5>description: ${description}</h5> `,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmailUtilityFreeQuetTextOnly;
