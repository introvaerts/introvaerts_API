const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");
const connectDB = require('./config/dbConfig');
const imagesRoutes = require('./routes/images')
const subdomainsRoutes = require('./routes/subdomains')


// Initializing app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Body-Parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DotEnv config
dotenv.config();

// DB config
connectDB();

// Body-Parser config 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup routes (Just to test DB)
app.use("/users", usersRoutes);
app.use('/images', imagesRoutes);
app.use('/subdomains', subdomainsRoutes);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
