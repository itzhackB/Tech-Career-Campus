const dotenv = require("dotenv");
dotenv.config();
const jwt = require('jsonwebtoken')

const chalk = require("chalk");
const express = require("express");
const db = require("./DB");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors())
db.on("error", () => {
    console.log(chalk.red("Connection error"));
});


app.listen(PORT, () => {
    console.log(
        `${chalk.green("tech_career")} ${chalk.yellow(
            "live and up on port"
        )} ${chalk.blue(PORT)}`
    );
});


app.get('/api/post', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: 'Post created..',
                authData
            })
        }
    })
})

app.get('/api/login', (req, res) => {

    const user = {
        id: 1,
        name: "izthack",
        lastName: "bynesai"
    }
    jwt.sign({ user }, 'secretkey',{expiresIn:"2h"}, (err, token) => {
        res.json({
            token
        })
    })
})

//Format of token
// Authorization : Bearer <token> 
function verifyToken(req, res, next) {
    // get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer if undefined
    if (typeof bearerHeader !== 'undefined') {
        //  split at the space
        const bearer = bearerHeader.split(' ')
        //Get token from array
        const bearerToken = bearer[1]
        //Set the token
        req.token = bearerToken;
        // next middleware
        next();

    } else {
        //Forbidden
        res.sendStatus(403);
    }

}

