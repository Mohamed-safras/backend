const express = require("express");
const mongooes = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());
//ROUTES
const postRoute = require("./routes/post");

//middleware
app.use("/", postRoute);

//connect to the DB

mongooes.connect(
  process.env.DB__CONNECTION,
  { useNewUrlParser: true },

  () => {
    console.log("DB was connected");
  }
);
//Listening to the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`sever running on ${PORT}`));
