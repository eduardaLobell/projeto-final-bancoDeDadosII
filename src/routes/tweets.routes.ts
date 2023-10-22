import { Router } from "express"
import { Auth, CriarTweet } from "../middlewares"
import { TweetController } from "../controllers"

export function tweetsRoutes() {
    const router = Router()
    const auth = new Auth()
    const criarTweet = new CriarTweet()
    const controller = new TweetController()

    router.post('/', [auth.validar, criarTweet.validar], controller.criar) //criar tweets
    
    return router
}