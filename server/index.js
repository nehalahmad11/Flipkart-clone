import express from  "express";
import cors from "cors";
import bodyParser from "body-parser";
import {v4 as uuid}  from 'uuid';

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

// making all params here

export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuid();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='100';
paytmParams['CALLBACK_URL']='http://localhost:8000/callback';
paytmParams['EMAIL']='nehalahamad1999@gmail.com';
paytmParams['MOBILE_NO']='9507524066';
// export var paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
// export let paytmParams = {};
// paytmParams['MID'] = process.env.PAYTM_MID,
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
// paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
// paytmParams['ORDER_ID'] = uuid(),
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
// paytmParams['TXN_AMOUNT'] = '100',
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
// paytmParams['EMAIL'] = 'nehalahamad1999@gmail.com'
// paytmParams['MOBILE_NO'] = '6299846847'





