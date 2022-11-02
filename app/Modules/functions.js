const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
function hashString(str){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(str, salt)
}

function tokenGenarator(payload){
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "3 days"});
    return token

}

function tokenVerify(token){
    const result = jwt.verify(token, process.env.SECRET_KEY);
    if(!result?.username) throw {status: 401, message: "لطفا وارد حساب کاربری خود شوید ."}
    return result 
}

module.exports = {
    hashString,
    tokenGenarator,
    tokenVerify
}