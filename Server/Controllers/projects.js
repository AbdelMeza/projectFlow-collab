import { io } from "socket.io-client"
import { projectModel } from "../Models/projectModel.js"
import { userModel } from "../Models/UserModel.js"

export async function createProject(req, res) {
    try {
        const { title } = req.body
        if (!title) {
            return res.status(401).json({ error: "All fields are required" })
        }
        const newProject = await projectModel.create({ title, owner: req.userId })

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
    const { projectId, clientId, projectName } = req.body

    try {
        const user = await userModel.findById({ _id: clientId })

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        if (user.role !== "client") {
            return res.status(404).json({ error: "User must be registrer as a client" })
        }

        const project = await projectModel.findOne({ _id: projectId })

        if (!project) {
            return res.status(400).json({ error: "Cannot find project" })
        }

        if (project.client) {
            return res.status(400).json({ error: "Project already has a client" })
        }

        project.client = clientId

        await project.save()

        // io.join(`${username}/${projectName}`)

        res.status(200).json({ message: "Client added successfuly" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error, try again" })
    }
}