const dotenv = require("dotenv");
dotenv.config();
const dbConnection = "mongodb+srv://itzhack:nabava90@cluster0.7dufu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ;
const mongoose = require('mongoose')
const chalk = require('chalk')
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose
    .connect(dbConnection, options)
    .then(() => {
        console.log(chalk.green('mongoDB connected'))
    })
    .catch(err => {
        console.log(chalk.red('Connection error', err.message));
    })

const db = mongoose.connection
module.exports = db

