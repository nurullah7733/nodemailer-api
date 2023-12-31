const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const SendEmailUtilityWithAttachment = async (
  name,
  email,
  phone,
  website,
  message,
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
    from: `prominentgraphics <nurullah7733@gmail.com>`,
    to: ["info@prominentgraphics.com", "nurullah7733@gmail.com"],
    subject: "Free Trial",
    html: `<h1>Name: ${name}</h1> <h2>Email: ${email}</h2> <h3>Phone: ${phone}</h3> <h4>website: ${website}</h4>  <h4>Instructions: ${message}</h4> `,
    attachments: att,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmailUtilityWithAttachment;
