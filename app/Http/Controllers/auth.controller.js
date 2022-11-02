const { UserModel } = require("../../Models/user");
const { hashString, tokenGenarator } = require("../../Modules/functions");
const bcrypt = require("bcrypt");
class AuthController {
  async register(req, res, next) {
    try {
      const { username, email, mobile, password } = req.body;
      const hashPassword = hashString(password);
      const user = await UserModel.create({
        username,
        email,
        mobile,
        password: hashPassword,
      });

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user)
        throw {
          status: 401,
          message: "نام کاربری یا رمز عبور اشتباه می باشد!",
        };
      const compareResult = bcrypt.compareSync(password, user.password);
      if (!compareResult)
        throw {
          status: 401,
          message: "نام کاربری یا رمز عبور اشتباه می باشد!",
        };
        const token = tokenGenarator({username});
        user.token = token;
       await user.save()

      return res.status(200).json({
        status: 200,
        success: true,
        message: "شما با موفقیت وارد حساب کابری خود شدید...",
        token
      })
    } catch (error) {
      next(error);
    }
  }

  resetPassword() {}
}

module.exports = {
  AuthController: new AuthController(),
};
