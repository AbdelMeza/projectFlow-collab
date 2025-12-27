import { projectModel } from "../Models/projectModel.js"
import { userModel } from "../Models/UserModel.js"

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

export async function addClientToProject(req, res) {
    const { projectName } = req.body

    try {
        const user = await userModel.findById({ _id: req.user.id })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const { username } = user

        io.join(`${username}/${projectName}`)


    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error, try again" })
    }
}