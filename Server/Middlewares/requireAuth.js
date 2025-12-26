import { readToken } from "../Utils/token.js"

export default function requireAuth(req, res, next) {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }

    const readToken = readToken(token)

    if (!readToken) {
        return res.status(401).json({ message: "Invalid token" })
    }

    req.userId = readToken.id
    next()
}