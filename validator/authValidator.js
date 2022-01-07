const { body, validationResult } = require("express-validator");

exports.postLogin = [
  body("username").not().isEmpty(),
  body("password").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("login", { error: errors.errors });
    }
    next();
  },
];
