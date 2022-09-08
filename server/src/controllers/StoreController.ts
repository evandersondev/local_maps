import { Request, response, Response } from 'express'
import { connectDB } from '../database/connection'
import { Store } from '../entities/Store'

export async function save(req: Request, res: Response) {
  const db = connectDB.getRepository(Store)

  const store = await db.save(req.body)

  return res.status(200).json(store)
}

export async function getAll(req: Request, res: Response) {
  const db = connectDB.getRepository(Store)

  const store = await db.find()

  return res.json(store)
}
