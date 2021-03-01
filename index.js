const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/users')

//importing routes


// Initializing app and port 
const app = express();
const PORT = process.env.PORT || 3000;

// DotEnv config
dotenv.config();

// DB config
connectDB();

// Body-Parser config 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup routes
app.use('/users', userRoutes);

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});