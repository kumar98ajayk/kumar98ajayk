
const mongoose = require("mongoose");
// mongoose.Promise = require("bluebird");

const url = "mongodb+srv://mongo_local:mongo@cluster0.dbap2.mongodb.net/Tranqui?retryWrites=true&w=majority";

const connect = mongoose.connect(url, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false, });

module.exports = connect;