import express, { NextFunction, Request, Response } from 'express'
import './database/connection'
import router from './router'
import path from 'path'
import errorHandler from './errors/handler'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use((req:Request, res:Response, next:NextFunction) => {
  const error:any = new Error('Not Found')
  error.status = 400
  next(error)
})
app.use(errorHandler)

app.listen(3333)
