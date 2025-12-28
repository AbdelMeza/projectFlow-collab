import { Router } from "express";
import requireAuth from "../Middlewares/requireAuth.js";
import { getInfos, searchClient } from "../Controllers/users.js";

const userRouter = Router()

userRouter.get('/data', requireAuth, getInfos)
userRouter.get('/search', requireAuth, searchClient)

export default userRouter