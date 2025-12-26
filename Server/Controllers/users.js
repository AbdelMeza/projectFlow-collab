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