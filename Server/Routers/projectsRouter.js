import { Router } from "express";
import requireAuth from "../Middlewares/requireAuth.js"
import { createProject } from "../Controllers/projects.js"

const projectsRouter = Router()

projectsRouter.post('/create', requireAuth, createProject)

export default projectsRouter