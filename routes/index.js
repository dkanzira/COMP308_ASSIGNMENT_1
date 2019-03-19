var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Employee" });
});

/* GET Feedback page. */
router.post("/feedback", function(req, res, next) {
  res.render("feedback", { title: "FeedBack" });
});

/* GET Feedback page. */
router.post("/thankyou", function(req, res, next) {
  res.render("thankyou", { title: "Thank You" });
});

module.exports = router;
