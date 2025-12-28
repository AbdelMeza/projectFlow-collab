import { Router } from "express";
import requireAuth from "../Middlewares/requireAuth.js"
import { addClientToProject, createProject, getOneProject } from "../Controllers/projects.js"

const projectsRouter = Router()

projectsRouter.post('/create', requireAuth, createProject)
projectsRouter.post('/add_client', requireAuth, addClientToProject)
projectsRouter.get('/:id', requireAuth, getOneProject)

export default projectsRouter