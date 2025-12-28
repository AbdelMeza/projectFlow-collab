import { projectModel } from "../Models/projectModel.js"
import { requestModel } from "../Models/requestModel.js"
import { userModel } from "../Models/UserModel.js"

export async function getUser(req, res) {
    try {
        const user = await userModel.findById({ _id: req.userId }).select("-password")

        if (!user) {
            return res.status(500).json({ error: "Server error, try again" })
        }

        res.status(200).json({ user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error, try again" })
    }
}

export async function getInfos(req, res) {
    try {
        const projects = await projectModel.find({ owner: req.userId })
            .populate("client", " _id username")
            .sort({ createdAt: -1 })
        const requests = await requestModel.find({ receiver: req.userId }).sort({ createdAt: -1 })

        if (!projects || !requests) {
            return res.status(500).json({ error: "Server error, try again" })
        }

        res.status(200).json({ projects, requests })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error, try again" })
    }
}

export async function searchClient(req, res) {
    const search = req.query.s
    try {
        const users = await userModel.find({
            $and: [
                { role: "client" },
                { username: { $regex: search, $options: "i" } }
            ]
        }).select("_id username")

        if (!users) {
            return res.status(404).json({ error: "No results found" })
        }

        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error, try again" })
    }
}