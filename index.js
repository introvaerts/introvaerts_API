const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/users');
const subdomainRoutes = require('./routes/subdomains');

// Initializing app and port
const app = express();
const PORT = process.env.PORT || 3000;

// DotEnv config
dotenv.config();

// DB config
connectDB();

// Body-Parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup routes (Just to test DB)
app.use('/users', userRoutes);
app.use('/subdomains', subdomainRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
