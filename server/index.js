require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
//CONTROLLERS GO HERE


const {CONNECTION_STRING, SERVER_PORT} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Connected to Database");
})

//SESSION WILL GO HERE WHEN NEEDED
// app.use(session({
//     secret: //SESSION_SECRET,
//     resave: //true or false,
//     saveUninitialized: //true or false,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7 //equals a week
//     }
// }))

//ENDPOINTS GO HERE

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})