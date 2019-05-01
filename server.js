const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const carprofile = require("./routes/api/carprofile");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use routes
app.use("/api/users", users);
app.use("/api/carprofile", carprofile);

//Port
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
