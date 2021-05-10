const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://patushir:fireftw69@chatapp.gzxho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
