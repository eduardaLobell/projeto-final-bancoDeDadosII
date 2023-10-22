import { NextFunction, Request, Response } from "express";


export class CriarTweet {
    public validar(req: Request, res: Response, next: NextFunction) {
        const { tipo, conteudo, usuario } = req.body

        if(!tipo || !conteudo || !usuario) {
            return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Faltam campos!',
			}); 
        }

        if(tipo !== 1 || tipo !== 2) {
            return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Tipo inválido. 1 para tweet e 2 para re tweet.',
			});
        }


        
        return next()
    }
}