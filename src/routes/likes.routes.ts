import { Router } from "express";
import { Auth, DarLike, Login } from "../middlewares";
import { LikeController } from "../controllers";

export function likesRoutes() {
    const router = Router()
    const auth = new Auth()
    const darLike = new DarLike()
    const controller = new LikeController()

    router.post('/', [auth.validar, darLike.validar], controller.darLike) //dar like

    return router
}