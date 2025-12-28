import { Router } from "express";
import requireAuth from "../Middlewares/requireAuth.js"
import { addClientToProject, createProject } from "../Controllers/projects.js"

const projectsRouter = Router()

projectsRouter.post('/create', requireAuth, createProject)
projectsRouter.post('/add_client', requireAuth, addClientToProject)

export default projectsRouter