const express = require('express')
// const app = express()
const router = express.Router()
// const port = 3000

router.get('/', (req, res) => {
  res.send('hello world Blog')
})

router.get('/about', (req, res) => {
  res.send('hello About of blog')
})

router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the BlogPost for ${req.params.slug}`)
})


module.exports = router




// app.use('/foo', router)

// app.listen(3000)
