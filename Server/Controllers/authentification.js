import { userModel } from "../Models/UserModel.js"
import { comparePasswords, hashPassword } from "../Utils/hashPass.js"
import { createToken } from "../Utils/token.js"

export async function signUp(req, res) {
    try {
        const { username, email, password, role } = req.body

        if (!username || !email || !password || !role) {
            return res.status(401).json({ error: "All fields are required" })
        }

        const userExists = await userModel.findOne({ $or: [{ username }, { email }] })

        if (userExists) {
            return res.status(409).json({ error: "User already exists" })
        }

        const hashPass = await hashPassword(password)

        if (!hashPass) {
            return res.status(500).json({ error: "Authentification error, try again" })
        }

        let newUser = await userModel.create({ username, email, password: hashPass, role })

        if (!newUser) {
            return res.status(500).json({ error: "Authentification error, try again" })
        }

        const { _id } = newUser
        const userToken = createToken({ id: _id, role })

        if (!userToken) {
            return res.status(500).json({ error: "Authentification error, try again" })
        }

        newUser = newUser.toObject()
        delete newUser.password

        res.status(201).json({
            user: newUser,
            token: userToken
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Authentification error, try again" })
    }
}

export async function login(req, res) {
    try {
        const { identifier, password } = req.body

        if (!identifier || !password) {
            return res.status(401).json({ error: "All fields are required" })
        }

        const user = await userModel.findOne({
            $or: [{ username: identifier }, { email: identifier }]
        })

        const { _id, role } = user

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        const { password: passwordDb } = user

        const comparePass = await comparePasswords(password, passwordDb)

        if (!comparePass) {
            res.status(401).json({ error: "Wrong informations, try again" })
        }

        const userToken = createToken({ id: _id, role })

        if (!userToken) {
            return res.status(500).json({ error: "Authentification error, try again" })
        }

        res.status(201).json({
            token: userToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Authentification error, try again" })
    }
}