import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { connectDB } from './database/connection'
import * as storeController from './controllers/StoreController'

const PORT = 8080

async function startup() {
  await connectDB.initialize()

  const app = express()

  app.use(express.json())
  app.use(cors())

  app.post('/store', storeController.save)
  app.get('/store', storeController.getAll)

  app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
}

startup()
