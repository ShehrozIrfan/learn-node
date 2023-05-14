const express = require("express");
const app = express();

// express js is all about the middleware
app.use((req, res, next) => {
  console.log("first middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware!");
  res.send("<h1>Welcome from express</h1>");
});

app.listen(3000);
