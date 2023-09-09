const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const SendEmailUtilityWithAttachment = async (
  name,
  email,
  companyName,
  website,
  country,
  services,
  returnFileAs,
  instruction,
  freeTrialFiles
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

  let att = [];
  if (freeTrialFiles?.length > 0) {
    freeTrialFiles.map((item) => {
      att.push({
        path: item,
      });
    });
  }

  var mailOptions = {
    from: `Graphicsviewpoint <graphicsviewpoint24@gmail.com>`,
    to: ["info@graphicsviewpoint.com", "graphicsviewpoint24@gmail.com"],
    subject: "Free Trial",
    html: `<h1>Name: ${name}</h1> <h2>Email: ${email}</h2> <h3>company name: ${companyName}</h3> <h4>website: ${website}</h4> <h4>country: ${country}</h4> <h4>services: ${services}</h4> <h4>return file as: ${returnFileAs}</h4> <h4>instruction: ${instruction}</h4>`,
    attachments: att,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmailUtilityWithAttachment;
