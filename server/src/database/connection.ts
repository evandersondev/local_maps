import { DataSource } from 'typeorm'

export const connectDB = new DataSource(require('../../ormconfig.json'))
