const express = require("express");
const app = express();

const blog = require('./routes/blog')

const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog)

app.get("/", (req, res) => {
  console.log("hey its a Get request");

  res.send("Hello World!");
});

app.post('/', (req, res) => {
  console.log("hey its a Post request");
  res.send('Hello World Post')
})

app.get("/index", (req, res) => {
  console.log("hey its a index");

  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["T", "Prem"]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
