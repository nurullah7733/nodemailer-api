const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const SendEmailUtilityFreeQuetTextOnly = async (
  email,
  services,
  number_of_images
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
    to: ["nurullah7733@gmail.com"],
    subject: "Contact Us",
    html: `<h1>Email: ${email}</h1> <h2>Services: ${services} </h2> <h2>Number Of Images: ${number_of_images} </h2>   `,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmailUtilityFreeQuetTextOnly;
