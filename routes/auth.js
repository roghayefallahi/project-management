const { AuthController } = require("../app/Http/Controllers/auth.controller");
const {
  expressValidatorMapper,
} = require("../app/Http/Middleware/checkErrors");
const {
  registerValidator,
  loginValidation,
} = require("../app/Http/Validations/auth");

const router = require("express").Router();
router.post(
  "/register",
  registerValidator(),
  expressValidatorMapper,
  AuthController.register
);
router.post(
  "/login",
  loginValidation(),
  expressValidatorMapper,
  AuthController.login
);

module.exports = {
  authRoutes: router,
};
