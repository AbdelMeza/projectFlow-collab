import { Router } from "express";
import requireAuth from "../Middlewares/requireAuth.js";
import { getInfos } from "../Controllers/users.js";

const userRouter = Router()

userRouter.get('/data', requireAuth, getInfos)

export default userRouter