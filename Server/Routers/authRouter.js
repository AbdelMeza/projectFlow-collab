import { Router } from "express";
import { login, signUp } from "../Controllers/authentification.js";
import requireAuth from "../Middlewares/requireAuth.js";
import { getUser } from "../Controllers/users.js";

const authRouter = Router()

authRouter.get('/data', requireAuth, getUser)
authRouter.post('/signup', signUp)
authRouter.post('/login', login)

export default authRouter