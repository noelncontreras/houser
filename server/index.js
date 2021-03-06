require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
//CONTROLLER(S) GO HERE
const controller = require("./controller");

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
//GET request to get list of all houses to render in Dashboard.js endpoint
app.get("/api/houses", controller.getAllHouses);
//POST request to add a new house to house list from front-end to back-end(DB)
app.post("/api/house", controller.addNewHouse);
//DELETE request to delete house from list and DB
app.delete("/api/house/:id", controller.deleteHouse);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})