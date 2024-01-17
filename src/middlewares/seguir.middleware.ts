import { NextFunction, Request, Response } from "express";

export class Seguir {
    public validar(req: Request, res: Response, next: NextFunction) {
        const { idUsuario } = req.body

        if (!idUsuario) {
            return res.status(400).json({
                code: 400,
                ok: false,
                mensagem: 'Usuário não encontrado!',
            })
        }

        return next()
    }
}