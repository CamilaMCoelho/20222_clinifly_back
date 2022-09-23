import express from 'express'
import cors from 'cors'
import setupRoutes from './config/routes'

const app = express()
app.use(cors())
app.use(express.json())
setupRoutes(app)

app.listen(3333, () => {
  console.log('🔥 Server started at http://localhost:3333')
})
