const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))


// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('Hello About')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact Me')
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog')
})

app.get('/blog/:slug', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  
  res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello Intro to JS')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello Intro to Python')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
