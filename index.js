const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/users')
const imagesRoutes = require('./routes/images')
const subdomainRoutes = require('./routes/subdomains')
const galleriesRoutes = require('./routes/galleries')

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
app.use('/users', userRoutes);
app.use('/images', imagesRoutes);
app.use('/subdomains', subdomainRoutes);
app.use('/galleries', galleriesRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
