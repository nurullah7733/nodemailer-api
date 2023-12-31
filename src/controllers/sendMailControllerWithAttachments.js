const SendEmailUtilityWithAttachment = require("../utils/sendEmailUtilityWithAttachments");

const sendMailWithAttachmentsController = async (req, res) => {
  let { name, email, phone, website, message } = req.body;
  try {
    var urls = [];
    const files = req.files;
    console.log(files, " f");
    for (const file of files) {
      const { path } = file;
      urls.push(path);
    }

    let sendMialResult = await SendEmailUtilityWithAttachment(
      name,
      email,
      phone,
      website,
      message,
      urls
    );

    res.status(200).json({ status: "success", data: sendMialResult });
  } catch (error) {
    return res.status(401).json({ status: "fail", data: error.toString() });
  }
};

module.exports = sendMailWithAttachmentsController;
