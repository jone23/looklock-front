var express = require("express");
var router = express.Router();
const projectController = require("../controllers/projectController");

router.get('/', projectController.read);
router.post('/', projectController.write);

module.exports = router;