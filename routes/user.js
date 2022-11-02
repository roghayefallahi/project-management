const { UserController } = require("../app/Http/Controllers/user.controller");
const { checkLogin } = require("../app/Http/Middleware/autoLogin");

const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile)

module.exports = {
    userRoutes : router
}