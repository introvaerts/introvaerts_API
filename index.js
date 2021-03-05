const express = require('express');
const dotenv = require('dotenv');
// DotEnv config
dotenv.config();
const bodyParser = require('body-parser');
const connectDB = require('./config/dbConfig');
const usersRoutes = require('./routes/users');
const imagesRoutes = require('./routes/images');
const subdomainsRoutes = require('./routes/subdomains');
const galleriesRoutes = require('./routes/galleries');
const logger = require('./middlewares/log');

// Initializing app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Body-Parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB config
connectDB();

// Winston logger
app.use(logger);

// Setup routes (Just to test DB)
app.use('/users', usersRoutes);
app.use('/images', imagesRoutes);
app.use('/subdomains', subdomainsRoutes);
app.use('/galleries', galleriesRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
