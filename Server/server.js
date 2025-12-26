import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import authRouter from "./Routers/authRouter.js"


const PORT = 2026
const app = express()
app.use(express.json(), cors())

app.use('/auth', authRouter)

mongoose.connect('mongodb://localhost:27017/ProjectFlow')

app.listen(PORT, () => console.log(`Server working on ${PORT}`))
