import express from  "express";
import cors from "cors";
import bodyParser from "body-parser";

// here import databse connection here
import Connection from "./database/db.js";

// here import product of data
import DefaultData from "./database/Default.js";

// here handling the router
import Router from "./routes/route.js";

// import Router from "./routes/route.js";

// handling dotenv config here
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = 8000;

//  here maneging the user and password
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// here calling the database connection  And passing usename and password.

Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`Server si runing succesfully on PORT ${PORT}`)
);

// here callig all product datat..
DefaultData();
