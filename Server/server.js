import http from "http"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import { Server } from "socket.io"
import authRouter from "./Routers/authRouter.js"
import userRouter from "./Routers/userRouter.js"
import projectsRouter from "./Routers/projectsRouter.js"

const app = express()
const server = http.createServer(app)
app.use(express.json(), cors())
const PORT = 2026

export const io = new Server(server, {
    cors: {
        origin: "*",
        credentials: true,
    },
})

io.on("connect", (socket) => {
    socket.on("join", (username, projectName) => {
        socket.join(`${username}/${projectName}`)
    })
})

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/project', projectsRouter)

mongoose.connect('mongodb://localhost:27017/ProjectFlow')

app.listen(PORT, () => console.log(`Server working on ${PORT}`))
