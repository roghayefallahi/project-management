const {projectRoutes} = require("./project");
const {teamRoutes} = require("./team");
const{authRoutes} = require("./auth");
const {userRoutes} = require("./user")
const router = require("express").Router();
router.use("/auth", authRoutes)
router.use("/project", projectRoutes)
router.use("/team", teamRoutes)
router.use("/user", userRoutes)

module.exports = {
    AllRoutes : router
}