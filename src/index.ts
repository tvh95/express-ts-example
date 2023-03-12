import express, { Request, Response } from 'express'
import { config } from 'dotenv'
import { getUser, getUserBalance } from './utilities/user'

config()

const app = express()
const port = process.env.PORT

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong')
})

app.get('/user', (req: Request, res: Response) => {
  const userData: UserDetail = getUser()
  const balance: number = Math.max(getUserBalance(), 0)
  res.json({ userData, balance })
})

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
