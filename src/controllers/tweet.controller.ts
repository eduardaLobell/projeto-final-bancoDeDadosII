import { Request, Response } from "express";
import { TweetService } from "../services";

export class TweetController {
    public async criar (req: Request, res: Response) {
        const { conteudo, tipo, idUsuario } = req.body

        try {
            const service = new TweetService()
            const response = await service.criarTweet({
                conteudo: conteudo,
                tipo: tipo,
                idUsuario: idUsuario
            })

            return res.status(response.code).json(response)


        } catch(error: any) {
            return res.status(500).json({
                code: 500,
                ok: false,
                mensagem: error.toString()
            })
        }
    }
}