const SendEmailUtilityTextOnly = require("../utils/sendEmailUtilityTextOnly");

const sendMailTextOnlyController = async (req, res) => {
  let { name, email, phone, companyName, description } = req.body;
  try {
    let sendMialResult = await SendEmailUtilityTextOnly(
      name,
      email,
      phone,
      companyName,
      description
    );

    res.status(200).json({ status: "success", data: sendMialResult });
  } catch (error) {
    return res.status(401).json({ status: "fail", data: error });
  }
};

module.exports = sendMailTextOnlyController;
