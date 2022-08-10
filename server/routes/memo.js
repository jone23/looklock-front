var express = require("express");
var router = express.Router();
const memoController = require("../controllers/memoController");
const memo = require("../models/memo");

router.get('/', memoController.readAll);
router.post('/', memoController.write);

module.exports = router;