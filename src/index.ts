import express from 'express'
import routes from './routes/index'

const app = express()
const port = 3000

app.use('/api', routes)

app.get('/', (req, res) => {
  res.redirect('/api')
})

app.listen(port, () => {
  console.log(`--server listening on port ${port}`)
})

export default app
