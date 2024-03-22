var express = require("express");
var router = express.Router();

router.get("/demo", function (req, res) {
  res.render("greenwich/demo");
});

module.exports = router;
