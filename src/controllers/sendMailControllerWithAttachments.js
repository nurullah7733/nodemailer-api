const SendEmailUtilityWithAttachment = require("../utils/sendEmailUtilityWithAttachments");

const sendMailWithAttachmentsController = async (req, res) => {
  let {
    name,
    email,
    companyName,
    website,
    country,
    services,
    returnFileAs,
    instruction,
  } = req.body;
  try {
    var urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      urls.push(path);
    }

    let sendMialResult = await SendEmailUtilityWithAttachment(
      name,
      email,
      companyName,
      website,
      country,
      services,
      returnFileAs,
      instruction,
      urls
    );

    res.status(200).json({ status: "success", data: sendMialResult });
  } catch (error) {
    return res.status(401).json({ status: "fail", data: error });
  }
};

module.exports = sendMailWithAttachmentsController;
