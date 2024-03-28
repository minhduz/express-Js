var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var toysRouter = require("./routes/toys");

var app = express();

var mongoose = require("mongoose");
const e = require("express");

var url = "mongodb://localhost:27017/";
var url_could =
  "mongodb+srv://ducnmgch210774:j.C7z$rHAq%40uSUX@cluster0.dr4hz0i.mongodb.net/";
mongoose
  .connect(url_could)
  .then(() => console.log("Connect to DB success"))
  .catch((err) => console.log("Fail to connect to DB " + err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cars", toysRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(process.env.PORT || 3001);
module.exports = app;
