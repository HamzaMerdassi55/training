const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('welcome')
})
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})
app.get('/bonjour', (req, res) => {
    res.send('bonjour')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
