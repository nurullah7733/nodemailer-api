const router = require("express").Router();
const sendMailTextOnlyController = require("../controllers/sendMailControllerTextOnly");
const sendMailController = require("../controllers/sendMailControllerWithAttachments");
const uploadPhoto = require("../middlewares/multerMiddleware");

router.post("/contact-us", sendMailTextOnlyController);
router.post("/free-trial", uploadPhoto.array("images", 10), sendMailController);

module.exports = router;
