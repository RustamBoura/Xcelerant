const mongoose = require("mongoose")

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const dbURI = `mongodb://${dbUser}:${dbPassword}@localhost:27017/${dbName}`;

mongoose
  // .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .connect("mongodb://127.0.0.1:27017/xcelerant")
  .then(() => {
    console.log("Successfully connected to MongoDB.")
  })
  .catch((e) => {
    console.error("Connection error", e.message)
  })
mongoose.set("debug", true)

const db = mongoose.connection

module.exports = db