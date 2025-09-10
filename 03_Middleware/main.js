const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs")

const blog = require('./routes/blog')

app.use('/blog', blog)


app.use(express.static("public"));

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

//Middleware 1 -- logger for our Application
app.use((req, res, next) => {
    console.log(req.headers);
    req.prem = "I am Prem";
    
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`);
//   res.send("Hacked by MiddleWare 1")
  next();
});

//Middleware 2
app.use((req, res, next) => {
    req.prem = "I am Prem Bhai ";

  console.log("M2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello About" + req.prem);
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
