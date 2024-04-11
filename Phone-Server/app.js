var express = require("express");
var logger = require("morgan");
var cors = require("cors");
var cookieParser = require("cookie-parser");


// Importing routes
var indexRouter = require("./routes/index.routes");
var phoneRoutes = require("./routes/phone.routes");

var app = express();

// Middleware configuration
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("trust proxy", 1);
app.enable("trust proxy");

app.use(
  cors({
    origin: [process.env.REACT_APP_URI], // <== URL of our future React app
  })
);
app.use(express.static(__dirname + "/public")).use(cookieParser());



// Using routes
app.use("/", indexRouter);
app.use("/phones", phoneRoutes);

module.exports = app;
