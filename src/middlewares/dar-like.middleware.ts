import { NextFunction, Request, Response } from "express";

export class DarLike {
    public validar(req: Request, res: Response, next: NextFunction) {
        const { username, idTweet } = req.body

        if(!username || !idTweet) {
            return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Faltam campos!',
			});
        }

        if (username.length > 15) {
            return res.status(400).json({
				code: 400,
                ok: false,
                mensagem: 'Tamanho de username inválido'
            })
        }

        return next()
    }
}