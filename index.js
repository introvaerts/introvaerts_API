const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

//importing routes


// Initializing app and port 
const app = express();
const PORT = process.env.PORT || 3000;

// DotEnv config
dotenv.config();

// Body-Parser config 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using th

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});