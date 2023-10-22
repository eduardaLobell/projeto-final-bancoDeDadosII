import { Router } from "express";
import { CadastroUsuario, Login } from "../middlewares";
import { UsuarioController } from "../controllers";


export function usuariosRoutes() {
    const router = Router()
    const cadastrarUsuario = new CadastroUsuario()
    const controller = new UsuarioController()
    const login = new Login()

    router.post('/', [cadastrarUsuario.validar], controller.criar) //criar usuários
    router.post('/login', [login.validar], controller.login) // login de usuários

    return router
}

//maleato de dexclorferinamina 2mg