const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");

// Initializing app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Body-Parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//importing routes
app.use("/users", usersRoutes);

// DotEnv config
dotenv.config();

// Using th

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
