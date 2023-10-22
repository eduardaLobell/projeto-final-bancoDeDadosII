import { NextFunction, Request, Response } from 'express';

export class CadastroUsuario {
	public validar(req: Request, res: Response, next: NextFunction) {
		const { nome, email, username, senha } = req.body;

		if (!nome || !email || !username || !senha) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Faltam campos!',
			});
		}

		if (!email.includes('@') || !email.includes('.com')) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'E-mail inválido!',
			});
		}

		if (senha.length < 6) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Mínima 6 caracteres para senha.',
			});
		}

        if (username.length > 15) {
            return res.status(400).json({
				code: 400,
                ok: false,
                mensagem: 'Máximo de 15 caracteres no username.'
            })
        }

        if (nome.length <= 2) {
            return res.status(400).json({
				code: 400,
                ok: false,
                mensagem: 'Mínimo de 3 caraceteres para o nome.'
            })
        }
		return next();
	}
}