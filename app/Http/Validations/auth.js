const { body } = require("express-validator");
const { UserModel } = require("../../Models/user");
function registerValidator() {
  return [
    body("username").custom(async (value, ctx) => {
      if (value) {
        const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
        if (usernameRegex.test(value)) {
          const user = await UserModel.findOne({ username: value });
          if (user) throw "نام کاربری قبلا ثبت شده است. ";
          return true;
        }
        throw "نام کاربری صحیح نمی باشد.";
      } else {
        throw "نام کاربری نمی تواند خالی باشد!";
      }
    }),
    body("email")
      .isEmail()
      .withMessage("ایمیل وارد شده صحیح نمی باشد.")
      .custom(async (email) => {
        const user = await UserModel.findOne({ email });
        if (user) throw "ایمیل قبلا ثبت شده است. ";
        return true;
      }),
    body("mobile")
      .isMobilePhone("fa-IR")
      .withMessage("َشماره موبایل وارد شده صحیح نمی باشد.")
      .custom(async (mobile) => {
        const user = await UserModel.findOne({ mobile });
        if (user) throw "شماره موبایل قبلا ثبت شده است. ";
        return true;
      }),

    body("password").custom((value, ctx) => {
      if (!value) throw "رمز عبور نمی تواند خالی باشد.";
      if (value !== ctx?.req?.body?.confirm_password)
        throw "رمز عبور با تکرار ان یکسان نمی باشد .";
      return true;
    }),
  ];
}
function loginValidation() {
  return [
    body("username").notEmpty().withMessage("نام کاربری نمی تواند خالی باشد!!")
    .custom(async (value, ctx) => {
      if (value) {
        const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
        if (usernameRegex.test(value)) {
          return true;
        }
        throw "نام کاربری صحیح نمی باشد.";
      } else {
        throw "نام کاربری نمی تواند خالی باشد!";
      }
    }),
    body("password").isLength({min:6 , max: 16}).withMessage("رمز عبور باید حداقل 6 و حداکثر 16 نویسه باشد.")
  ]
}

module.exports = {
  registerValidator,
  loginValidation,
};
