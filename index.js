const Application = require("./app/server.js");
const DB_URL = "mongodb://127.0.0.1:27017/ProjectManagerDB";
require('dotenv').config()
new Application(3000, DB_URL)