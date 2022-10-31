const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
function hashString(str){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(str, salt)
}

module.exports = {
    hashString
}