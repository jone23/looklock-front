var express = require("express");
var router = express.Router();

const userController = require("../controllers/userController");

router.get('/', userController.read);
router.post('/', userController.write);
router.put('/:address', userController.update);
module.exports = router;