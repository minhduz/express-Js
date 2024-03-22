var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ];

  res.render("index", { users });
});

router.get("/demo", function (req, res) {
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ];

  res.render("greenwich/demo", { users });
});

module.exports = router;
