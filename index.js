const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const Connect = require("./config/db");
const routes = require("./routes");
const app = express();

//MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//Port
const port = process.env.PORT || process.env.API_PORT;
const conexionString = process.env.MONGODB_URI;

//Cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

//Routes
app.use("/api", routes);

//Connection DB
Connect(conexionString);

app.listen(port, () => console.info(`Server is running in port ${port}`));
