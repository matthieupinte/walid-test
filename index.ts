import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

app.get('/lost', (req: Request, res: Response) => {
  res.send('You are lost!')
})

app.get('/api/excuses', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../data/excuses.json'))
})

app.use(function (req, res) {
  res.status(404).end('error')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
