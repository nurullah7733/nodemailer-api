const SendEmailUtilityTextOnly = require("../utils/sendEmailUtilityFreeQuetTextOnly");

const sendMailFreeQuetTextOnlyController = async (req, res) => {
  let { email, services, number_of_images } = req.body;
  try {
    let sendMialResult = await SendEmailUtilityTextOnly(
      email,
      services,
      number_of_images
    );

    res.status(200).json({ status: "success", data: sendMialResult });
  } catch (error) {
    return res.status(401).json({ status: "fail", data: error });
  }
};

module.exports = sendMailFreeQuetTextOnlyController;
