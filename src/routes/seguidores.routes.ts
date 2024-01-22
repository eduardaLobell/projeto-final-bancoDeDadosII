import { Router } from "express"
import { Auth } from "../middlewares"
import { SeguidoresController } from "../controllers/seguir.controller"

export function seguidoresRoutes() {
    const router = Router()
    const auth = new Auth()
    const controller = new SeguidoresController

    router.get('/', [auth.validar], controller.listar)
    router.post('/:idUsuario', [auth.validar], controller.seguir)

    return router
}