const { check } = require("express-validator");
const { validateResult } = require("../utils/validate");

const userValidate = [
  check("name").exists().not().isEmpty().isLength({ min: 3 }),
  check("lastname").exists().not().isEmpty().isLength({ min: 3 }),
  check("email").exists().isEmail(),
  check("password").exists().not().isEmpty().isLength({ min: 8 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { userValidate };
