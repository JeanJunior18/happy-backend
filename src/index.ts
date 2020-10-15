import express from 'express'

const app = express()

app.use('/', (req, res) => {
  return res.json({ response: 'ok' })
})

app.listen(3333)
