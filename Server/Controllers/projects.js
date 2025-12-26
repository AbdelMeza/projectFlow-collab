import { projectModel } from "../Models/projectModel.js"

export async function createProject(req, res) {
    try {
        const { title, description } = req.body     
        if (!title || !description) {
            return res.status(401).json({ error: "All fields are required" })
        }
        const newProject = await projectModel.create({ title, description, owner: req.userId })

        if (!newProject) {
            return res.status(500).json({ error: "Project creation error, try again" })
        }
        res.status(201).json({ project: newProject })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error, try again" })
    }
}
//get user projects
export async function getUserProjects(req, res) {
    try {
        const projects = await projectModel.find({ owner: req.userId })
        res.status(200).json({ projects })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error, try again" })
    }       
}