import express from 'express'
import cors from 'cors'
import { connectDatabase } from './config/database'
import apiRouter from './routes/api'

const app = express()
const port = 8000
const codespaceName = process.env.CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl })
})

app.use('/api', apiRouter)

async function startServer() {
  await connectDatabase()
  app.listen(port, () => {
    console.log(`OctoFit API listening at ${apiBaseUrl}`)
  })
}

startServer().catch((error) => {
  console.error('Unable to start OctoFit API:', error)
  process.exit(1)
})