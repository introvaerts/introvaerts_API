const mongoose = require('mongoose');

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  };

  const { DBACCESS } = process.env;
  
  try {
    const conn = await mongoose.connect(DBACCESS, options);
    console.log(`Mongo DB connected ${conn.connection.host}`);

    //Bind connection to error event (to get notification of connection errors after initial connection was established)
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  } catch (error) {
    console.log("*** Connection failed! ***");
    console.error(error);
  }
}

module.exports = connectDB;