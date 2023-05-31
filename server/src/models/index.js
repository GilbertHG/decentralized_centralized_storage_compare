const dbConfig = require("../configs/db.mongo");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.inventory = require("./inventory.schema.js")(mongoose);

module.exports = db;